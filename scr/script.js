/* ==========================================================================
   1. DATA DAFTAR TOPIK (UNTUK HALAMAN UTAMA INDEX.HTML)
   Tambahkan topik baru Anda di dalam array ini sesuai bidangnya.
   ========================================================================== */
const DAFTAR_TOPIK = [
    {
        bidang: "Aljabar & Aritmetika",
        topik: [
            { judul: "AM GM HM QM", folder: "AM_GM_HM_QM" },
            { judul: "Aljabar", folder: "Aljabar" },
            { judul: "Aritmetika Sosial", folder: "Aritmetika_Sosial" },
            { judul: "Barisan dan Deret", folder: "Barisan_dan_Deret" },
            { judul: "Barisan dan Deret Aritmetika", folder: "Barisan_dan_Deret_Aritmetika" },
            { judul: "Barisan dan Deret Geometri", folder: "Barisan_dan_Deret_Geometri" },
            { judul: "Bunga Tunggal", folder: "Bunga_Tunggal" },
            { judul: "Bunga Majemuk", folder: "Bunga_Majemuk" },
            { judul: "Deret Geometri Tak Hingga", folder: "Deret_Geometri_Tak_Hingga" },
            { judul: "Deret Teleskopik", folder: "Deret_Teleskopik" },
            { judul: "Bentuk Akar", folder: "Bentuk_Akar" },
            { judul: "Induksi Matematika", folder: "Induksi_Matematika" },
            { judul: "Persamaan Aljabar", folder: "Persamaan_Aljabar" },
            { judul: "Persamaan Eksponen", folder: "Persamaan_Eksponen" },
            { judul: "Polinomial (Suku Banyak)", folder: "Polinom_(Suku_Banyak)" },
            { judul: "Program Linear", folder: "Program_Linier_(Program_Linear)" },
            { judul: "Maksimum dan Minimum", folder: "Maksimum_dan_Minimum" },
            { judul: "Cauchy Schwarz", folder: "Cauchy_Schwarz" },
            { judul: "Floor Function", folder: "Floor_Function" },
        ]
    },
    {
        bidang: "Teori & Sistem Bilangan",
        topik: [
            { judul: "Basis Bilangan", folder: "Basis_Bilangan" },
            { judul: "Bilangan Asli", folder: "Bilangan_Asli" },
            { judul: "Bilangan Bulat", folder: "Bilangan_Bulat" },
            { judul: "Bilangan Kompleks", folder: "Bilangan_Kompleks" },
            { judul: "Bilangan Pecahan", folder: "Bilangan_Pecahan" },
            { judul: "Bilangan Prima", folder: "Bilangan_Prima" },
            { judul: "Bilangan Real", folder: "Bilangan_Real" },
            { judul: "Faktor Positif", folder: "Faktor_Positif" },
            { judul: "Faktorial", folder: "Faktorial" },
        ]
    },
    {
        bidang: "Geometri",
        topik: [
            { judul: "Geometri (Bidang Datar)", folder: "Geometri_(Bidang_Datar)" },
            { judul: "Segitiga", folder: "Segitiga" },
            { judul: "Poligon (Segi Banyak)", folder: "Poligon_(Segi_Banyak)" },
            { judul: "Balok", folder: "Balok" },
            { judul: "Bangun Ruang Sisi Lengkung", folder: "Bangun_Ruang_Sisi_Lengkung" },
            { judul: "Hubungan Garis dan Lingkaran", folder: "Hubungan_Garis_dan_Lingkaran" },
            { judul: "Garis Singgung Lingkaran", folder: "Garis_Singgung_Lingkaran" },
        ]
    },
    {
        bidang: "Trigonometri",
        topik: [
            { judul: "Trigonometri", folder: "Trigonometri" },
            { judul: "Aturan Cosinus", folder: "Aturan_Cosinus" },
            { judul: "Aturan Sinus", folder: "Aturan_Sinus" },
            { judul: "Fungsi Trigonometri", folder: "Fungsi_Trigonometri" },
            { judul: "Grafik Fungsi Trigonometri", folder: "Grafik_Fungsi_Trigonometri" },
        ]
    },
    {
        bidang: "Kalkulus",
        topik: [
            { judul: "Asimtot Kurva", folder: "Asimtot_Kurva" },
            { judul: "Matriks", folder: "Matriks" },
            { judul: "Determinan Matriks", folder: "Determinan_Matriks" },
            { judul: "Dilatasi", folder: "Dilatasi" },
            { judul: "Fungsi", folder: "Fungsi" },
            { judul: "Fungsi Komposisi", folder: "Fungsi_Komposisi" },
            { judul: "Fungsi Kuadrat", folder: "Fungsi_Kuadrat" },
            { judul: "Fungsi Naik dan Turun", folder: "Fungsi_Naik_dan_Turun" },
            { judul: "Integral Lipat", folder: "Integral_Lipat" },
            { judul: "Integral Tak Tentu", folder: "Integral_Tak_Tentu" },
            { judul: "Integral Tentu", folder: "Integral_Tentu" },
            { judul: "Persamaan Diferensial", folder: "Persamaan_Diferensial" },
        ]
    },
    {
        bidang: "Statistika",
        topik: [
            { judul: "Statistika", folder: "Statistika" },
            { judul: "Rata-Rata", folder: "Rata-Rata" },
            { judul: "Desil", folder: "Desil" },
            { judul: "Diagram Lingkaran", folder: "Diagram_Lingkaran" },
        ]
    },
    {
        bidang: "Kombinatorika",
        topik: [
            { judul: "Peluang", folder: "Peluang" },
            { judul: "Frekuensi Harapan", folder: "Frekuensi_Harapan" },
            { judul: "Aturan Pencacahan", folder: "Aturan_Pencacahan" },
            { judul: "Permutasi dan Kombinasi", folder: "Permutasi_dan_Kombinasi" },
            { judul: "Permutasi Siklik", folder: "Permutasi_Siklik_(Siklis)" },
            { judul: "Prinsip Sarang Burung Merpati", folder: "Prinsip_Sarang_Merpati" },
            { judul: "Distribusi Binomial", folder: "Distribusi_Binomial" },
        ]
    },
    {
        bidang: "Lainnya",
        topik: [
            { judul: "Himpunan", folder: "Himpunan" },
            { judul: "Induksi Matematika", folder: "Induksi_Matematika" },
            { judul: "Logika Matematika", folder: "Logika_Matematika" },
            { judul: "Satuan Waktu", folder: "Satuan_Waktu" },
            { judul: "Matematika Terapan", folder: "Matematika_Terapan" },
        ]
    }
];

/* ==========================================================================
   2. FITUR DARK MODE
   ========================================================================== */
function initTheme() {
    const savedTheme = localStorage.getItem("math_blog_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("math_blog_theme", next);
    updateThemeButton(next);
}

function updateThemeButton(theme) {
    const btn = document.getElementById("theme-toggle");
    if (btn) {
        btn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    }
}

/* ==========================================================================
   3. OTOMATISASI HALAMAN SOAL & MATERI
   ========================================================================== */
function initSoalAndMateriPage() {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const fileName = pathParts[pathParts.length - 1] || "1.html";
    const folderType = pathParts[pathParts.length - 2] || "Exercise";

    const pageNumber = parseInt(fileName.replace(".html", ""), 10) || 1;

    // Pemetaan nama folder ke nama Tingkat
    const levelMap = {
        "Materi": "Materi",
        "Exercise": "Dasar",
        "SNBT": "SNBT",
        "HOTS": "HOTS"
    };
    const namaTingkat = levelMap[folderType] || folderType;

    // Isi otomatis teks tingkat pada kalimat pembuka
    const levelSpan = document.getElementById("auto-level");
    if (levelSpan) {
        levelSpan.textContent = namaTingkat;
    }

    // Render tombol navigasi Tingkat: Materi | Dasar | SNBT | HOTS
    const navContainer = document.getElementById("level-nav");
    if (navContainer) {
        const levels = [
            { label: "📖 Materi", folder: "Materi" },
            { label: "Dasar", folder: "Exercise" },
            { label: "SNBT", folder: "SNBT" },
            { label: "HOTS", folder: "HOTS" }
        ];

        let navHTML = `<span class="level-label">Tingkat:</span>`;
        levels.forEach(lv => {
            const isActive = folderType.toLowerCase() === lv.folder.toLowerCase() ? "active" : "";
            navHTML += `<a href="../${lv.folder}/1.html" class="level-pill ${isActive}">${lv.label}</a>`;
        });
        navContainer.innerHTML = navHTML;
    }

    // Penomoran otomatis soal (1.html -> 1..10, 2.html -> 11..20) & tombol pembahasan
    const soalItems = document.querySelectorAll(".soal-item");
    if (soalItems.length > 0) {
        const startNumber = (pageNumber - 1) * 10 + 1;

        soalItems.forEach((item, idx) => {
            const currentNo = startNumber + idx;

            // Isi nomor soal
            const noEl = item.querySelector(".soal-no");
            if (noEl) {
                noEl.textContent = `No. ${currentNo}`;
            }

            // Pasang fungsi buka/tutup pembahasan
            const btnBuka = item.querySelector(".btn-solusi");
            const boxSolusi = item.querySelector(".pembahasan-box");
            const btnTutup = item.querySelector(".btn-tutup");

            if (btnBuka && boxSolusi) {
                btnBuka.addEventListener("click", () => {
                    const isShown = boxSolusi.classList.toggle("show");
                    btnBuka.textContent = isShown ? "SEMBUNYIKAN PENYELESAIAN" : "LIHAT PENYELESAIAN";
                });
            }

            if (btnTutup && boxSolusi && btnBuka) {
                btnTutup.addEventListener("click", () => {
                    boxSolusi.classList.remove("show");
                    btnBuka.textContent = "LIHAT PENYELESAIAN";
                });
            }
        });

        // Jalankan deteksi jumlah file otomatis untuk Pagination
    }
    buildAutoPagination(pageNumber);
}

/* ==========================================================================
   4. AUTO-PAGINATION (DETEKSI OTOMATIS BANYAKNYA FILE 1.html, 2.html, dst.)
   ========================================================================== */
async function buildAutoPagination(currentPage) {
    const paginationContainers = document.querySelectorAll(".pagination-wrapper");
    if (paginationContainers.length === 0) return;

    let totalPages = 1;
    let checkPage = 1;
    const maxLimit = 100;

    while (checkPage <= maxLimit) {
        if (checkPage === currentPage) {
            totalPages = checkPage;
            checkPage++;
            continue;
        }
        try {
            const res = await fetch(`./${checkPage}.html`, { method: "HEAD" });
            if (res.ok) {
                totalPages = checkPage;
                checkPage++;
            } else {
                break;
            }
        } catch (e) {
            break;
        }
    }

    // Render angka 1 | 2 | 3 ...
    let html = "";
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? "active" : "";
        html += `<a href="./${i}.html" class="page-btn ${activeClass}">${i}</a>`;
    }

    paginationContainers.forEach(container => {
        container.innerHTML = html;
    });
}

/* ==========================================================================
   5. RENDER HALAMAN UTAMA (INDEX.HTML) + SEARCH BAR (TOPIK & ISI SOAL)
   ========================================================================== */
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildSearchSnippet(text, query) {
    const maxLen = 240;
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const matchIdx = lowerText.indexOf(lowerQuery);

    let start = 0;
    let end = text.length;

    if (text.length > maxLen) {
        if (matchIdx !== -1) {
            start = Math.max(0, matchIdx - 80);
            end = Math.min(text.length, start + maxLen);
            // Jangan memotong di tengah blok rumus $...$ atau \(...\)
            const beforeSlice = text.slice(0, start);
            const dollarCount = (beforeSlice.match(/\$/g) || []).length;
            if (dollarCount % 2 === 1) {
                const prevDollar = text.lastIndexOf("$", start);
                if (prevDollar !== -1) start = prevDollar;
            }
        } else {
            end = maxLen;
        }
    }

    let snippet = text.slice(start, end).trim();
    if (start > 0) snippet = "..." + snippet;
    if (end < text.length) snippet = snippet + "...";

    // Highlight kata kunci di luar ekspresi LaTeX ($...$ dan \(...\))
    const escapedQ = escapeRegExp(query);
    const re = new RegExp(`(${escapedQ})`, "gi");
    const parts = snippet.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g);

    return parts.map(part => {
        if (part.startsWith("$") || part.startsWith("\\(") || part.startsWith("\\[")) {
            return part;
        }
        return part.replace(re, `<mark class="search-highlight">$1</mark>`);
    }).join("");
}

function initIndexPage() {
    const listContainer = document.getElementById("topic-list-container");
    const searchInput = document.getElementById("search-input");
    if (!listContainer) return;

    function renderTopics(filterText = "") {
        const rawQuery = filterText.trim();
        const query = rawQuery.toLowerCase();
        let html = "";

        DAFTAR_TOPIK.forEach(grup => {
            const filtered = grup.topik.filter(t =>
                t.judul.toLowerCase().includes(query) ||
                grup.bidang.toLowerCase().includes(query)
            );

            if (filtered.length > 0) {
                html += `
          <div class="category-block">
            <h2 class="category-heading">${grup.bidang}</h2>
            <div class="topic-grid">
              ${filtered.map(t => `
                <div class="topic-card">
                  <div class="topic-name">${t.judul}</div>
                  <div class="topic-links">
                    <a href="./${t.folder}/Materi/1.html">Materi</a>
                    <a href="./${t.folder}/Exercise/1.html">Dasar</a>
                    <a href="./${t.folder}/SNBT/1.html">SNBT</a>
                    <a href="./${t.folder}/HOTS/1.html">HOTS</a>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `;
            }
        });

        // Pencarian isi soal & materi seperti daftar post Blogspot (aktif saat minimal 2 karakter)
        if (query.length >= 2 && Array.isArray(window.KULIKMATH_SEARCH_INDEX)) {
            const wordRegex = new RegExp(`\\b${escapeRegExp(query)}\\b`, "i");
            const matchedPosts = [];

            for (const item of window.KULIKMATH_SEARCH_INDEX) {
                const hayQ = item.q.toLowerCase();
                const hayT = item.t.toLowerCase();
                const hayS = (item.s || "").toLowerCase();

                if (hayQ.includes(query) || hayT.includes(query) || hayS.includes(query)) {
                    const isExactWord = wordRegex.test(item.q) || wordRegex.test(item.t) || wordRegex.test(item.s || "");
                    matchedPosts.push({ item, score: isExactWord ? 2 : 1 });
                }
            }

            matchedPosts.sort((a, b) => b.score - a.score);
            const maxDisplay = 100;
            const shownPosts = matchedPosts.slice(0, maxDisplay);

            if (shownPosts.length > 0) {
                html += `
          <div class="category-block search-results-block">
            <h2 class="category-heading">Daftar Soal & Materi yang Memuat "${rawQuery}" (${matchedPosts.length} ditemukan)</h2>
            <div class="search-post-list">
              ${shownPosts.map(({ item }) => `
                <a href="${item.u}" class="search-post-card">
                  <div class="search-post-meta">
                    <span class="search-post-topic">${item.t}</span>
                    <span class="search-post-badge level-${item.l.toLowerCase()}">${item.l}</span>
                    <span class="search-post-no">${item.n}</span>
                    ${item.s ? `<span class="search-post-source">${item.s}</span>` : ""}
                  </div>
                  <div class="search-post-snippet">${buildSearchSnippet(item.q, rawQuery)}</div>
                </a>
              `).join("")}
            </div>
          </div>
        `;
            }
        }

        listContainer.innerHTML = html || `<p style="color: var(--text-muted);">Tidak ditemukan topik maupun soal dengan kata kunci "${rawQuery}".</p>`;

        if (query.length >= 2 && typeof renderMathInElement === "function") {
            renderMathInElement(listContainer, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false },
                    { left: "\\(", right: "\\)", display: false },
                    { left: "\\[", right: "\\]", display: true }
                ],
                throwOnError: false
            });
        }
    }

    renderTopics();

    if (searchInput) {
        searchInput.addEventListener("input", e => renderTopics(e.target.value));
    }
}

/* ==========================================================================
   6. INISIALISASI SAAT HALAMAN DIMUAT & RENDER KATEX
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initIndexPage();
    initSoalAndMateriPage();

    if (typeof renderMathInElement === "function") {
        renderMathInElement(document.body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\(", right: "\\)", display: false },
                { left: "\\[", right: "\\]", display: true }
            ],
            throwOnError: false
        });
    }
});