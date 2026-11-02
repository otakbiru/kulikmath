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
            { judul: "Bentuk Akar", folder: "Bentuk_Akar" },
            { judul: "Induksi Matematika", folder: "Induksi_Matematika" }
        ]
    },
    {
        bidang: "Teori & Sistem Bilangan",
        topik: [
            { judul: "Basis Bilangan", folder: "Basis_Bilangan" },
            { judul: "Bilangan Asli", folder: "Bilangan_Asli" },
            { judul: "Bilangan Bulat", folder: "Bilangan_Bulat" },
            { judul: "Bilangan Kompleks", folder: "Bilangan_Kompleks" },
            { judul: "Bilangan Pecahan", folder: "Bilangan_Pecahan" }
        ]
    },
    {
        bidang: "Geometri & Trigonometri",
        topik: [
            { judul: "Aturan Cosinus", folder: "Aturan_Cosinus" },
            { judul: "Aturan Sinus", folder: "Aturan_Sinus" },
            { judul: "Balok", folder: "Balok" },
            { judul: "Bangun Ruang Sisi Lengkung", folder: "Bangun_Ruang_Sisi_Lengkung" },
            { judul: "Hubungan Garis dan Lingkaran", folder: "Hubungan_Garis_dan_Lingkaran" }
        ]
    },
    {
        bidang: "Kalkulus & Kombinatorika",
        topik: [
            { judul: "Asimtot Kurva", folder: "Asimtot_Kurva" },
            { judul: "Aturan Pencacahan", folder: "Aturan_Pencacahan" },
            { judul: "Matriks", folder: "Matriks" },
            { judul: "Integral Lipat", folder: "Integral_Lipat" },
            { judul: "Integral Tak Tentu", folder: "Integral_Tak_Tentu" },
            { judul: "Integral Tentu", folder: "Integral_Tentu" }
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
   5. RENDER HALAMAN UTAMA (INDEX.HTML) + SEARCH BAR
   ========================================================================== */
function initIndexPage() {
    const listContainer = document.getElementById("topic-list-container");
    const searchInput = document.getElementById("search-input");
    if (!listContainer) return;

    function renderTopics(filterText = "") {
        const query = filterText.toLowerCase().trim();
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

        listContainer.innerHTML = html || `<p style="color: var(--text-muted);">Topik tidak ditemukan.</p>`;
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