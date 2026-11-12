const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const LEVEL_MAP = {
  Materi: 'Materi',
  Exercise: 'Dasar',
  SNBT: 'SNBT',
  HOTS: 'HOTS'
};

function stripTagsAndClean(html) {
  if (!html) return '';
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<ol[^>]*class=["'][^"']*pilgan[^"']*["'][^>]*>[\s\S]*?<\/ol>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTopicMap() {
  const scriptPath = path.join(ROOT, 'scr', 'script.js');
  const content = fs.readFileSync(scriptPath, 'utf8');
  const map = {};
  const re = /\{\s*judul:\s*"([^"]+)"\s*,\s*folder:\s*"([^"]+)"\s*\}/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    map[m[2]] = m[1];
  }
  return map;
}

function buildIndex() {
  const topicMap = extractTopicMap();
  const entries = [];

  const dirs = fs.readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !['.git', 'node_modules', 'scr', 'www', '.vscode'].includes(d.name));

  for (const dir of dirs) {
    const topicFolder = dir.name;
    const topicTitle = topicMap[topicFolder] || topicFolder.replace(/_/g, ' ');
    const topicPath = path.join(ROOT, topicFolder);

    for (const sub of ['Materi', 'Exercise', 'SNBT', 'HOTS']) {
      const subPath = path.join(topicPath, sub);
      if (!fs.existsSync(subPath) || !fs.statSync(subPath).isDirectory()) continue;

      const files = fs.readdirSync(subPath)
        .filter((f) => /^\d+\.html$/i.test(f))
        .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

      for (const file of files) {
        const pageNum = parseInt(file.replace('.html', ''), 10) || 1;
        const fullPath = path.join(subPath, file);
        const rawHtml = fs.readFileSync(fullPath, 'utf8');

        // Hapus komentar HTML agar template soal yang di-comment tidak ikut terindeks
        const uncommented = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
        const relUrl = `./${topicFolder}/${sub}/${file}`;

        if (sub === 'Materi') {
          const materiMatch = uncommented.match(/<article[^>]*class=["'][^"']*materi-card[^"']*["'][^>]*>([\s\S]*?)<\/article>/i);
          if (materiMatch) {
            const cleanedMateri = materiMatch[1]
              .replace(/<div[^>]*class=["'][^"']*pembahasan-box[\s\S]*?<\/div>\s*<\/div>/gi, ' ')
              .replace(/<button[\s\S]*?<\/button>/gi, ' ');
            const text = stripTagsAndClean(cleanedMateri);
            if (
              text &&
              text.length > 40 &&
              !text.includes('Tulis penjelasan materi') &&
              !text.includes('Judul Sub-Bab Pertama')
            ) {
              entries.push({
                t: topicTitle,
                l: LEVEL_MAP[sub],
                n: 'Ringkasan Materi',
                s: '',
                u: relUrl,
                q: text.slice(0, 1200)
              });
            }
          }
        } else {
          const articleRe = /<article[^>]*class=["'][^"']*soal-item[^"']*["'][^>]*>([\s\S]*?)<\/article>/gi;
          let match;
          let idxInPage = 0;

          while ((match = articleRe.exec(uncommented)) !== null) {
            idxInPage++;
            const fullTag = match[0];
            const inner = match[1];
            const idMatch = fullTag.match(/<article[^>]*\bid=["']([^"']+)["']/i);
            const soalNo = (pageNum - 1) * 10 + idxInPage;
            const anchorId = idMatch ? idMatch[1] : String(soalNo);

            // Potong sebelum tombol solusi / pembahasan-box agar soal dengan nested div (.row/.col) tetap utuh
            const beforeSolusi = inner.split(/<button[^>]*class=["'][^"']*btn-solusi|<div[^>]*class=["'][^"']*pembahasan-box/i)[0];
            const withoutSumber = beforeSolusi.replace(/<div[^>]*class=["'][^"']*soal-sumber[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, '');
            const withoutNo = withoutSumber.replace(/<div[^>]*class=["'][^"']*soal-no[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, '');

            const sumberMatch = beforeSolusi.match(/<div[^>]*class=["'][^"']*soal-sumber[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);

            const soalText = stripTagsAndClean(withoutNo);
            const sumberText = stripTagsAndClean(sumberMatch ? sumberMatch[1] : '');

            if (
              !soalText ||
              soalText.length < 10 ||
              /Tulis teks soal/i.test(soalText) ||
              soalText === '...'
            ) {
              continue;
            }

            entries.push({
              t: topicTitle,
              l: LEVEL_MAP[sub],
              n: `No. ${soalNo}`,
              s: sumberText && !/Sumber Soal/i.test(sumberText) ? sumberText : '',
              u: `${relUrl}#${anchorId}`,
              q: soalText
            });
          }
        }
      }
    }
  }

  const outJson = path.join(ROOT, 'scr', 'search-index.json');
  const outJs = path.join(ROOT, 'scr', 'search-index.js');
  fs.writeFileSync(outJson, JSON.stringify(entries), 'utf8');
  fs.writeFileSync(outJs, `window.KULIKMATH_SEARCH_INDEX = ${JSON.stringify(entries)};\n`, 'utf8');
  console.log(`Indexed ${entries.length} posts/questions into scr/search-index.json (${Math.round(fs.statSync(outJson).size / 1024)} KB)`);
}

buildIndex();
