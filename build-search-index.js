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

function extractScriptConfig() {
  const scriptPath = path.join(ROOT, 'scr', 'script.js');
  const content = fs.readFileSync(scriptPath, 'utf8');

  const topicMap = {};
  const topicRe = /\{\s*judul:\s*"([^"]+)"\s*,\s*folder:\s*"([^"]+)"\s*\}/g;
  let m;
  while ((m = topicRe.exec(content)) !== null) {
    topicMap[m[2]] = m[1];
  }

  // Parse DAFTAR_ARTIKEL entries so indexed articles reuse exact category & title metadata
  const artikelTitleByUrl = {};
  const artikelCategoryByFolder = {};
  const artikelBlockMatch = content.match(/const\s+DAFTAR_ARTIKEL\s*=\s*\[([\s\S]*?)\r?\n\];/);
  if (artikelBlockMatch) {
    const groupRe = /kategori:\s*"([^"]+)"[\s\S]*?folder:\s*"([^"]+)"[\s\S]*?artikel:\s*\[([\s\S]*?)\](?=\s*,?\s*\})/g;
    let gm;
    while ((gm = groupRe.exec(artikelBlockMatch[1])) !== null) {
      const kategori = gm[1];
      const folder = gm[2].replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
      artikelCategoryByFolder[folder] = kategori;

      const itemRe = /\{\s*judul:\s*"([^"]+)"\s*,\s*file:\s*"([^"]+)"\s*\}/g;
      let am;
      while ((am = itemRe.exec(gm[3])) !== null) {
        artikelTitleByUrl[`./${folder}/${am[2]}`] = { judul: am[1], kategori };
      }
    }
  }

  return { topicMap, artikelTitleByUrl, artikelCategoryByFolder };
}

function extractMateriText(uncommentedHtml) {
  const cards = [];
  const cardRe = /<article[^>]*class=["'][^"']*materi-card[^"']*["'][^>]*>([\s\S]*?)<\/article>/gi;
  let match;
  while ((match = cardRe.exec(uncommentedHtml)) !== null) {
    const cleaned = match[1]
      .replace(/<div[^>]*class=["'][^"']*pembahasan-box[\s\S]*?<\/div>\s*<\/div>/gi, ' ')
      .replace(/<button[\s\S]*?<\/button>/gi, ' ');
    const text = stripTagsAndClean(cleaned);
    if (
      text &&
      text.length > 40 &&
      !text.includes('Tulis penjelasan materi') &&
      !text.includes('Judul Sub-Bab Pertama') &&
      !text.includes('Tulis isi artikel')
    ) {
      cards.push(text);
    }
  }
  return cards.join(' ');
}

function buildIndex() {
  const { topicMap, artikelTitleByUrl, artikelCategoryByFolder } = extractScriptConfig();
  const entries = [];

  const dirs = fs.readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !['.git', 'node_modules', 'scr', 'www', '.vscode', 'Arsip_Soal', 'Artikel'].includes(d.name));

  // Indeks halaman khusus di Arsip_Soal/<Kategori>/*.html
  const arsipRoot = path.join(ROOT, 'Arsip_Soal');
  if (fs.existsSync(arsipRoot) && fs.statSync(arsipRoot).isDirectory()) {
    const arsipCats = fs.readdirSync(arsipRoot, { withFileTypes: true }).filter((d) => d.isDirectory());
    for (const catDir of arsipCats) {
      const catPath = path.join(arsipRoot, catDir.name);
      const htmlFiles = fs.readdirSync(catPath).filter((f) => /\.html$/i.test(f));
      for (const file of htmlFiles) {
        const fullPath = path.join(catPath, file);
        const rawHtml = fs.readFileSync(fullPath, 'utf8');
        const uncommented = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
        const relUrl = `./Arsip_Soal/${catDir.name}/${file}`;
        const paketTitle = file.replace(/\.html$/i, '');

        const articleRe = /<article[^>]*class=["'][^"']*soal-item[^"']*["'][^>]*>([\s\S]*?)<\/article>/gi;
        let match;
        let idxInPage = 0;
        while ((match = articleRe.exec(uncommented)) !== null) {
          idxInPage++;
          const fullTag = match[0];
          const inner = match[1];
          const idMatch = fullTag.match(/<article[^>]*\bid=["']([^"']+)["']/i);
          const anchorId = idMatch ? idMatch[1] : String(idxInPage);

          const beforeSolusi = inner.split(/<button[^>]*class=["'][^"']*btn-solusi|<div[^>]*class=["'][^"']*pembahasan-box/i)[0];
          const noMatch = beforeSolusi.match(/<div[^>]*class=["'][^"']*soal-no[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);
          const customNo = stripTagsAndClean(noMatch ? noMatch[1] : '');

          const withoutSumber = beforeSolusi.replace(/<div[^>]*class=["'][^"']*soal-sumber[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, '');
          const withoutNo = withoutSumber.replace(/<div[^>]*class=["'][^"']*soal-no[^"']*["'][^>]*>[\s\S]*?<\/div>/gi, '');
          const sumberMatch = beforeSolusi.match(/<div[^>]*class=["'][^"']*soal-sumber[^"']*["'][^>]*>([\s\S]*?)<\/div>/i);

          const soalText = stripTagsAndClean(withoutNo);
          const sumberText = stripTagsAndClean(sumberMatch ? sumberMatch[1] : '');
          if (!soalText || soalText.length < 10) continue;

          entries.push({
            t: paketTitle,
            l: catDir.name,
            n: customNo || `No. ${idxInPage}`,
            s: sumberText,
            u: `${relUrl}#${anchorId}`,
            q: soalText
          });
        }
      }
    }
  }

  // Indeks halaman artikel khusus di Artikel/*.html dan Artikel/<Kategori>/*.html
  const artikelRoot = path.join(ROOT, 'Artikel');
  function pushArtikelEntry(fullPath, relUrl, fallbackKategori) {
    const rawHtml = fs.readFileSync(fullPath, 'utf8');
    const uncommented = rawHtml.replace(/<!--[\s\S]*?-->/g, '');
    const text = extractMateriText(uncommented);
    if (!text) return;

    const meta = artikelTitleByUrl[relUrl];
    const highlightMatch = uncommented.match(/<span[^>]*class=["'][^"']*topic-highlight[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
    const highlightTitle = stripTagsAndClean(highlightMatch ? highlightMatch[1] : '');
    const fileTitle = path.basename(fullPath, path.extname(fullPath));
    const articleTitle = (meta && meta.judul) || (highlightTitle && highlightTitle !== 'Judul Artikel' ? highlightTitle : fileTitle);

    entries.push({
      t: articleTitle,
      l: 'Artikel',
      n: (meta && meta.kategori) || fallbackKategori,
      s: '',
      u: relUrl,
      q: text.slice(0, 1500)
    });
  }

  if (fs.existsSync(artikelRoot) && fs.statSync(artikelRoot).isDirectory()) {
    const topItems = fs.readdirSync(artikelRoot, { withFileTypes: true });
    for (const item of topItems) {
      if (item.isFile() && /\.html$/i.test(item.name)) {
        pushArtikelEntry(
          path.join(artikelRoot, item.name),
          `./Artikel/${item.name}`,
          artikelCategoryByFolder['Artikel'] || 'Artikel Khusus'
        );
      } else if (item.isDirectory()) {
        const catPath = path.join(artikelRoot, item.name);
        const fallbackKategori = artikelCategoryByFolder[`Artikel/${item.name}`] || item.name.replace(/_/g, ' ');
        const htmlFiles = fs.readdirSync(catPath).filter((f) => /\.html$/i.test(f));
        for (const file of htmlFiles) {
          pushArtikelEntry(
            path.join(catPath, file),
            `./Artikel/${item.name}/${file}`,
            fallbackKategori
          );
        }
      }
    }
  }

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
          const text = extractMateriText(uncommented);
          if (text) {
            entries.push({
              t: topicTitle,
              l: LEVEL_MAP[sub],
              n: 'Ringkasan Materi',
              s: '',
              u: relUrl,
              q: text.slice(0, 1200)
            });
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
