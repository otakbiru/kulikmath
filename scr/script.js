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
            { judul: "Pangkat (Eksponen)", folder: "Pangkat_(Eksponen)" },
            { judul: "Logaritma", folder: "Logaritma" },
            { judul: "Nilai Mutlak", folder: "Nilai_Mutlak" },
            { judul: "Perbandingan", folder: "Perbandingan" },
            { judul: "Perbandingan Berbalik Nilai", folder: "Perbandingan_Berbalik_Nilai" },
            { judul: "Skala & Perbandingan Geometri", folder: "Skala" },
            { judul: "Induksi Matematika", folder: "Induksi_Matematika" },
            { judul: "Persamaan Aljabar", folder: "Persamaan_Aljabar" },
            { judul: "Persamaan Bentuk Akar", folder: "Persamaan_Bentuk_Akar" },
            { judul: "Persamaan Eksponen", folder: "Persamaan_Eksponen" },
            { judul: "Persamaan Kuadrat", folder: "Persamaan_Kuadrat" },
            { judul: "Persamaan Logaritma", folder: "Persamaan_Logaritma" },
            { judul: "Persamaan Nilai Mutlak", folder: "Persamaan_Nilai_Mutlak" },
            { judul: "Pertidaksamaan Bentuk Aljabar", folder: "Pertidaksamaan_Bentuk_Aljabar" },
            { judul: "Pertidaksamaan Linear Dua Variabel", folder: "Pertidaksamaan_Linear_Dua_Variabel" },
            { judul: "Pertidaksamaan Logaritma", folder: "Pertidaksamaan_Logaritma" },
            { judul: "Sistem Persamaan Aljabar", folder: "Sistem_Persamaan_Aljabar" },
            { judul: "Sistem Persamaan Linear Dua Variabel (SPLDV)", folder: "Sistem_Persamaan_Linear_Dua_Variabel" },
            { judul: "Sistem Persamaan Linear Tiga Variabel (SPLTV)", folder: "Sistem_Persamaan_Linear_Tiga_Variabel" },
            { judul: "Sistem Persamaan Linear-Kuadrat (SPLK)", folder: "Sistem_Persamaan_Linear-Kuadrat" },
            { judul: "Sistem Pertidaksamaan Linear Dua Variabel (SPtLDV)", folder: "Sistem_Pertidaksamaan_Linear_Dua_Variabel" },
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
            { judul: "KPK (Kelipatan Persekutuan Terkecil)", folder: "KPK" },
            { judul: "Modulo", folder: "Modulo" },
        ]
    },
    {
        bidang: "Geometri",
        topik: [
            { judul: "Geometri (Bidang Datar)", folder: "Geometri_(Bidang_Datar)" },
            { judul: "Segitiga", folder: "Segitiga" },
            { judul: "Kesebangunan", folder: "Kesebangunan" },
            { judul: "Kesebangunan pada Segitiga", folder: "Kesebangunan_pada_Segitiga" },
            { judul: "Teorema Menelaus", folder: "Teorema_Menelaus" },
            { judul: "Persegi", folder: "Persegi" },
            { judul: "Persegi Panjang", folder: "Persegi_Panjang" },
            { judul: "Jajar Genjang", folder: "Jajar_Genjang" },
            { judul: "Trapesium", folder: "Trapesium" },
            { judul: "Poligon (Segi Banyak)", folder: "Poligon_(Segi_Banyak)" },
            { judul: "Lingkaran", folder: "Lingkaran" },
            { judul: "Segiempat Siklik (Segiempat Tali Busur)", folder: "Segiempat_Siklik" },
            { judul: "Sudut Pusat dan Sudut Keliling Lingkaran", folder: "Sudut_Pusat_dan_Sudut_Keliling" },
            { judul: "Persamaan Garis Lurus", folder: "Persamaan_Garis_Lurus" },
            { judul: "Persamaan Lingkaran", folder: "Persamaan_Lingkaran" },
            { judul: "Hubungan Garis dan Lingkaran", folder: "Hubungan_Garis_dan_Lingkaran" },
            { judul: "Garis Singgung Lingkaran", folder: "Garis_Singgung_Lingkaran" },
            { judul: "Koordinat Kutub", folder: "Koordinat_Kutub" },
            { judul: "Refleksi (Pencerminan)", folder: "Refleksi_(Pencerminan)" },
            { judul: "Rotasi (Perputaran)", folder: "Rotasi" },
            { judul: "Translasi (Pergeseran Geometri)", folder: "Translasi" },
            { judul: "Vektor (Aljabar & Geometri)", folder: "Vektor" },
            { judul: "Panjang Vektor", folder: "Panjang_Vektor" },
            { judul: "Kubus", folder: "Kubus" },
            { judul: "Balok", folder: "Balok" },
            { judul: "Limas", folder: "Limas" },
            { judul: "Kerucut", folder: "Kerucut" },
            { judul: "Bangun Ruang Sisi Lengkung", folder: "Bangun_Ruang_Sisi_Lengkung" },
        ]
    },
    {
        bidang: "Trigonometri",
        topik: [
            { judul: "Trigonometri", folder: "Trigonometri" },
            { judul: "Trigonometri Pada Segitiga", folder: "Trigonometri_Pada_Segitiga" },
            { judul: "Aturan Cosinus", folder: "Aturan_Cosinus" },
            { judul: "Aturan Sinus", folder: "Aturan_Sinus" },
            { judul: "Fungsi Trigonometri", folder: "Fungsi_Trigonometri" },
            { judul: "Grafik Fungsi Trigonometri", folder: "Grafik_Fungsi_Trigonometri" },
            { judul: "Persamaan Trigonometri", folder: "Persamaan_Trigonometri" },
            { judul: "Sistem Persamaan Trigonometri", folder: "Sistem_Persamaan_Trigonometri" },
        ]
    },
    {
        bidang: "Kalkulus",
        topik: [
            { judul: "Asimtot Kurva", folder: "Asimtot_Kurva" },
            { judul: "Matriks", folder: "Matriks" },
            { judul: "Determinan Matriks", folder: "Determinan_Matriks" },
            { judul: "Invers Matriks", folder: "Invers_Matriks" },
            { judul: "Dilatasi", folder: "Dilatasi" },
            { judul: "Fungsi", folder: "Fungsi" },
            { judul: "Fungsi Komposisi", folder: "Fungsi_Komposisi" },
            { judul: "Invers Fungsi", folder: "Invers_Fungsi" },
            { judul: "Fungsi Kuadrat", folder: "Fungsi_Kuadrat" },
            { judul: "Fungsi Naik dan Turun", folder: "Fungsi_Naik_dan_Turun" },
            { judul: "Limit", folder: "Limit" },
            { judul: "Limit Tak Hingga", folder: "Limit_Tak_Hingga" },
            { judul: "Limit Trigonometri", folder: "Limit_Trigonometri" },
            { judul: "Laju Perubahan", folder: "Laju_Perubahan" },
            { judul: "Turunan (Kalkulus Diferensial)", folder: "Turunan" },
            { judul: "Turunan Fungsi Trigonometri", folder: "Turunan_Fungsi_Trigonometri" },
            { judul: "Integral Tak Tentu", folder: "Integral_Tak_Tentu" },
            { judul: "Integral Trigonometri Tak Tentu", folder: "Integral_Trigonometri_Tak_Tentu" },
            { judul: "Integral Tentu", folder: "Integral_Tentu" },
            { judul: "Integral Lipat", folder: "Integral_Lipat" },
            { judul: "Luas Daerah di Bawah Kurva", folder: "Luas_Daerah_Di_Bawah_Kurva" },
            { judul: "Persamaan Diferensial", folder: "Persamaan_Diferensial" },
        ]
    },
    {
        bidang: "Statistika",
        topik: [
            { judul: "Statistika", folder: "Statistika" },
            { judul: "Rata-Rata", folder: "Rata-Rata" },
            { judul: "Kuartil", folder: "Kuartil" },
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
            { judul: "Kombinasi dengan Pengulangan", folder: "Kombinasi_dengan_Pengulangan" },
            { judul: "Permutasi Siklik", folder: "Permutasi_Siklik_(Siklis)" },
            { judul: "Koefisien Binomial", folder: "Koefisien_Binomial" },
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
   1B. DATA ARSIP SOAL KOMPETISI & UJIAN (KTOM, OSN, SNBT, UAS)
   ========================================================================== */
const DAFTAR_ARSIP = [
    {
        kategori: "KTOM",
        folder: "Arsip_Soal/KTOM",
        paket: [
            { judul: "KTOM September 2026", file: "KTOM September 2026.html" },
            { judul: "KTOM Oktober 2026", file: "KTOM Oktober 2026.html" },
            { judul: "KTOM November 2026", file: "KTOM November 2026 - Kontes Akhir Tahun 2026 Babak 1.html" },
        ]
    },
    {
        kategori: "OSK",
        folder: "Arsip_Soal/OSK",
        paket: [
            { judul: "OSK SMA 2006", file: "OSK SMA 2006.html" }
        ]
    },
    {
        kategori: "OSN",
        folder: "Arsip_Soal/OSN",
        paket: [
            { judul: "OSN SMA 2003", file: "OSN SMA 2003.html" },
            { judul: "OSN SMA 2006", file: "OSN SMA 2006.html" }
        ]
    },
    {
        kategori: "OSP",
        folder: "Arsip_Soal/OSP",
        paket: [
            { judul: "OSP SMA 2003", file: "OSP SMA 2003.html" },
            { judul: "OSP SMA 2006", file: "OSP SMA 2006.html" }
        ]
    },
    {
        kategori: "SNBT",
        folder: "Arsip_Soal/SNBT",
        paket: []
    },
    {
        kategori: "UAS",
        folder: "Arsip_Soal/UAS",
        paket: []
    }
];

/* ==========================================================================
   1C. DATA ARTIKEL KHUSUS (RUBRIK ARTIKEL LINTAS TOPIK)
   ========================================================================== */
const DAFTAR_ARTIKEL = [
    {
        kategori: "Teori Bilangan",
        folder: "Artikel/Teori_Bilangan",
        artikel: [
            { judul: "Ciri Bilangan Habis Dibagi 2 Sampai 11", file: "Ciri Bilangan Habis Dibagi 2 Sampai 11.html" }
        ]
    },
    {
        kategori: "Aljabar",
        folder: "Artikel/Aljabar",
        artikel: []
    },
    {
        kategori: "Geometri",
        folder: "Artikel/Geometri",
        artikel: []
    },
    {
        kategori: "Kalkulus",
        folder: "Artikel/Kalkulus",
        artikel: []
    },
    {
        kategori: "Kombinatorika",
        folder: "Artikel/Kombinatorika",
        artikel: []
    },
    {
        kategori: "Umum",
        folder: "Artikel/Umum",
        artikel: []
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
    const rawFileName = decodeURIComponent(pathParts[pathParts.length - 1] || "1.html");
    const fileName = rawFileName;
    const folderType = decodeURIComponent(pathParts[pathParts.length - 2] || "Exercise");
    const isNumericPage = /^\d+\.html$/i.test(fileName);
    const isArsipPage = pathParts.some(p => decodeURIComponent(p).toLowerCase() === "arsip_soal") || fileName.toLowerCase() === "templatearsipsoal.html";
    const isArtikelPage = pathParts.some(p => decodeURIComponent(p).toLowerCase() === "artikel") || fileName.toLowerCase() === "templateartikel.html";
    const grupArtikel = isArtikelPage
        ? DAFTAR_ARTIKEL.find(g => {
            const folderTail = (g.folder.split("/").pop() || "").toLowerCase();
            return folderTail === folderType.toLowerCase() ||
                g.kategori.toLowerCase() === folderType.replace(/_/g, " ").toLowerCase();
        })
        : null;

    if (isArsipPage) {
        document.body.classList.add("is-arsip-page");

        // Tambahkan tombol Cetak / PDF di navbar khusus halaman Arsip Soal
        const navBarContainer = document.querySelector(".navbar .nav-container");
        const themeBtn = document.getElementById("theme-toggle");
        if (navBarContainer && !document.getElementById("print-arsip-btn")) {
            const printBtn = document.createElement("button");
            printBtn.id = "print-arsip-btn";
            printBtn.type = "button";
            printBtn.className = "theme-btn btn-print";
            printBtn.textContent = "🖨️ Cetak / PDF";
            printBtn.addEventListener("click", () => window.print());
            if (themeBtn) {
                const actionsWrap = document.createElement("div");
                actionsWrap.className = "nav-actions";
                themeBtn.parentNode.insertBefore(actionsWrap, themeBtn);
                actionsWrap.appendChild(printBtn);
                actionsWrap.appendChild(themeBtn);
            } else {
                navBarContainer.appendChild(printBtn);
            }
        }

        // Sisipkan kredit & tautan KulikMath khusus untuk tampilan cetak (@media print)
        const printCreditHTML = `<span>by <strong>KulikMath</strong></span><span class="print-arsip-sep" aria-hidden="true">&bull;</span><a href="https://otakbiru.github.io/kulikmath/" target="_blank" rel="noopener noreferrer">otakbiru.github.io/kulikmath/</a>`;
        const pageHeader = document.querySelector(".page-header");
        if (pageHeader && !pageHeader.querySelector(".print-arsip-brand")) {
            const brandEl = document.createElement("div");
            brandEl.className = "print-arsip-brand";
            brandEl.innerHTML = printCreditHTML;
            pageHeader.appendChild(brandEl);
        }
        const mainContainer = document.querySelector("main.container");
        if (mainContainer && !mainContainer.querySelector(".print-arsip-footer")) {
            const footerEl = document.createElement("footer");
            footerEl.className = "print-arsip-footer";
            footerEl.innerHTML = printCreditHTML;
            mainContainer.appendChild(footerEl);
        }
    }

    const pageNumber = isNumericPage ? (parseInt(fileName.replace(".html", ""), 10) || 1) : 1;

    // Pemetaan nama folder ke nama Tingkat
    const levelMap = {
        "Materi": "Materi",
        "Exercise": "Dasar",
        "SNBT": "SNBT",
        "HOTS": "HOTS"
    };
    let namaTingkat = levelMap[folderType] || folderType;
    if (isArtikelPage) {
        namaTingkat = grupArtikel
            ? grupArtikel.kategori
            : (fileName.toLowerCase() === "templateartikel.html" || folderType.toLowerCase() === "artikel"
                ? "Artikel"
                : folderType.replace(/_/g, " "));
    }

    // Isi otomatis teks tingkat pada kalimat pembuka
    const levelSpan = document.getElementById("auto-level");
    if (levelSpan) {
        levelSpan.textContent = namaTingkat;
    }

    // Helper pembangun pill navigasi untuk Arsip_Soal maupun Artikel
    function buildGroupNavHTML(labelPrefix, items, activeFileName) {
        let html = `<span class="level-label">${labelPrefix}</span>`;
        items.forEach(item => {
            const isActive = item.file.toLowerCase() === activeFileName.toLowerCase() ? "active" : "";
            html += `<a href="./${encodeURIComponent(item.file).replace(/%20/g, " ")}" class="level-pill ${isActive}">${item.judul}</a>`;
        });
        return html;
    }

    // Render tombol navigasi Tingkat (topik) atau daftar item sejenis (Arsip_Soal / Artikel)
    const navContainer = document.getElementById("level-nav");
    if (navContainer) {
        if (isArsipPage) {
            const grupArsip = DAFTAR_ARSIP.find(g => g.kategori.toLowerCase() === folderType.toLowerCase());
            if (grupArsip && grupArsip.paket.length > 0) {
                navContainer.innerHTML = buildGroupNavHTML(`Paket ${grupArsip.kategori}:`, grupArsip.paket, fileName);
            }
        } else if (isArtikelPage) {
            if (grupArtikel && grupArtikel.artikel.length > 0) {
                navContainer.innerHTML = buildGroupNavHTML(`Artikel ${grupArtikel.kategori}:`, grupArtikel.artikel, fileName);
            }
        } else {
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
    }

    // Penomoran otomatis soal (1.html -> 1..10, 2.html -> 11..20) & tombol pembahasan
    const soalItems = document.querySelectorAll(".soal-item");
    if (soalItems.length > 0) {
        const startNumber = (pageNumber - 1) * 10 + 1;

        soalItems.forEach((item, idx) => {
            const currentNo = startNumber + idx;

            // Isi nomor soal jika belum memiliki label khusus (seperti "Bagian A - No. 1")
            const noEl = item.querySelector(".soal-no");
            if (noEl && !noEl.textContent.trim()) {
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
    }
    if (isNumericPage && !isArsipPage && !isArtikelPage) {
        buildAutoPagination(pageNumber);
    }
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

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function initIndexPage() {
    const listContainer = document.getElementById("topic-list-container");
    const searchInput = document.getElementById("search-input");
    if (!listContainer) return;

    document.body.classList.add("is-index-page");
    let controlsContainer = document.getElementById("index-controls");
    if (!controlsContainer) {
        controlsContainer = document.createElement("div");
        controlsContainer.id = "index-controls";
        controlsContainer.className = "index-controls";
        listContainer.parentNode.insertBefore(controlsContainer, listContainer);
    }

    const totalArsip = DAFTAR_ARSIP.reduce((sum, g) => sum + g.paket.length, 0);
    const totalArtikel = DAFTAR_ARTIKEL.reduce((sum, g) => sum + g.artikel.length, 0);
    const totalTopik = DAFTAR_TOPIK.reduce((sum, g) => sum + g.topik.length, 0);

    let activeTab = "semua";
    let activeBidang = "ALL";
    const expandedBidang = new Set();

    function renderTopicCardHTML(t) {
        return `
          <div class="topic-card">
            <div class="topic-name">${t.judul}</div>
            <div class="topic-links">
              <a href="./${t.folder}/Materi/1.html">Materi</a>
              <a href="./${t.folder}/Exercise/1.html">Dasar</a>
              <a href="./${t.folder}/SNBT/1.html">SNBT</a>
              <a href="./${t.folder}/HOTS/1.html">HOTS</a>
            </div>
          </div>
        `;
    }

    function renderCollectionBlock(heading, collections, itemsKey, unitLabel, query) {
        const filtered = collections.map(g => ({
            ...g,
            [itemsKey]: g[itemsKey].filter(item =>
                !query ||
                item.judul.toLowerCase().includes(query) ||
                g.kategori.toLowerCase().includes(query)
            )
        })).filter(g => g[itemsKey].length > 0);

        if (filtered.length === 0) return "";
        return `
          <div class="category-block">
            <h2 class="category-heading">${heading}</h2>
            <div class="collection-grid">
              ${filtered.map(g => `
                <div class="collection-card">
                  <div class="collection-head">
                    <div class="topic-name">${g.kategori}</div>
                    <span class="count-pill">${g[itemsKey].length} ${unitLabel}</span>
                  </div>
                  <div class="collection-links">
                    ${g[itemsKey].map(item => `<a href="./${g.folder}/${item.file}">${item.judul}</a>`).join("")}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `;
    }

    function renderControls(query) {
        const tabs = [
            { id: "semua", label: "Semua", count: totalArsip + totalArtikel + totalTopik },
            { id: "arsip", label: "Arsip Soal", count: totalArsip },
            { id: "artikel", label: "Artikel", count: totalArtikel },
            { id: "topik", label: "Topik Materi", count: totalTopik }
        ];

        let ctrlHTML = `
          <div class="rubric-tabs" role="tablist" aria-label="Filter Rubrik">
            ${tabs.map(tb => `
              <button type="button" class="rubric-tab ${!query && activeTab === tb.id ? "active" : ""}" data-tab="${tb.id}">
                <span>${tb.label}</span>
                <span class="tab-count">${tb.count}</span>
              </button>
            `).join("")}
          </div>
        `;

        if (!query && activeTab === "topik") {
            ctrlHTML += `
              <div class="bidang-chips" aria-label="Filter Bidang Topik">
                <button type="button" class="bidang-chip ${activeBidang === "ALL" ? "active" : ""}" data-bidang-chip="ALL">Semua Bidang</button>
                ${DAFTAR_TOPIK.map(g => `
                  <button type="button" class="bidang-chip ${activeBidang === g.bidang ? "active" : ""}" data-bidang-chip="${escapeHTML(g.bidang)}">${g.bidang} (${g.topik.length})</button>
                `).join("")}
              </div>
            `;
        }

        controlsContainer.innerHTML = ctrlHTML;
    }

    function renderTopics(filterText = "") {
        const rawQuery = filterText.trim();
        const query = rawQuery.toLowerCase();
        const isSearching = query.length > 0;
        renderControls(query);

        let html = "";
        const showArsip = isSearching || activeTab === "semua" || activeTab === "arsip";
        const showArtikel = isSearching || activeTab === "semua" || activeTab === "artikel";
        const showTopik = isSearching || activeTab === "semua" || activeTab === "topik";

        if (showArsip) {
            html += renderCollectionBlock("Arsip Soal Kompetisi &amp; Ujian", DAFTAR_ARSIP, "paket", "paket", query);
        }
        if (showArtikel) {
            html += renderCollectionBlock("Artikel &amp; Catatan Khusus", DAFTAR_ARTIKEL, "artikel", "artikel", query);
        }

        if (showTopik) {
            const bidangFilterActive = !isSearching && activeTab === "topik" && activeBidang !== "ALL";
            const topikGroups = DAFTAR_TOPIK
                .filter(grup => !bidangFilterActive || grup.bidang === activeBidang)
                .map(grup => ({
                    bidang: grup.bidang,
                    items: grup.topik.filter(t =>
                        !query ||
                        t.judul.toLowerCase().includes(query) ||
                        grup.bidang.toLowerCase().includes(query)
                    )
                }))
                .filter(g => g.items.length > 0);

            if (topikGroups.length > 0) {
                if (bidangFilterActive) {
                    const g = topikGroups[0];
                    html += `
                      <div class="category-block">
                        <h2 class="category-heading">${g.bidang} (${g.items.length} topik)</h2>
                        <div class="topic-grid">
                          ${g.items.map(renderTopicCardHTML).join("")}
                        </div>
                      </div>
                    `;
                } else {
                    const allExpanded = topikGroups.every(g => expandedBidang.has(g.bidang));
                    html += `
                      <div class="category-block">
                        <div class="section-header-row">
                          <h2 class="category-heading">Materi &amp; Bank Soal per Bidang</h2>
                          ${!isSearching ? `<button type="button" class="toggle-all-btn" data-toggle-all="${allExpanded ? "close" : "open"}">${allExpanded ? "Tutup Semua" : "Buka Semua"}</button>` : ""}
                        </div>
                        <div class="accordion-list">
                          ${topikGroups.map(g => {
                              const isOpen = isSearching || expandedBidang.has(g.bidang);
                              return `
                                <div class="bidang-accordion">
                                  <button type="button" class="bidang-toggle" aria-expanded="${isOpen}" data-bidang-toggle="${escapeHTML(g.bidang)}">
                                    <span>${g.bidang}</span>
                                    <span class="bidang-toggle-right">
                                      <span class="count-pill">${g.items.length} topik</span>
                                      <span class="bidang-chevron" aria-hidden="true">▾</span>
                                    </span>
                                  </button>
                                  ${isOpen ? `<div class="bidang-panel"><div class="topic-grid">${g.items.map(renderTopicCardHTML).join("")}</div></div>` : ""}
                                </div>
                              `;
                          }).join("")}
                        </div>
                      </div>
                    `;
                }
            }
        }

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
            <h2 class="category-heading">Daftar Soal & Materi yang Memuat "${escapeHTML(rawQuery)}" (${matchedPosts.length} ditemukan)</h2>
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

        listContainer.innerHTML = html || `<p style="color: var(--text-muted);">Tidak ditemukan topik maupun soal dengan kata kunci "${escapeHTML(rawQuery)}".</p>`;

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

    controlsContainer.addEventListener("click", e => {
        const tabBtn = e.target.closest("[data-tab]");
        if (tabBtn) {
            activeTab = tabBtn.dataset.tab;
            if (activeTab !== "topik") activeBidang = "ALL";
            if (searchInput && searchInput.value.trim()) searchInput.value = "";
            renderTopics("");
            return;
        }

        const chipBtn = e.target.closest("[data-bidang-chip]");
        if (chipBtn) {
            activeBidang = chipBtn.dataset.bidangChip;
            renderTopics(searchInput ? searchInput.value : "");
        }
    });

    listContainer.addEventListener("click", e => {
        const toggleBtn = e.target.closest("[data-bidang-toggle]");
        if (toggleBtn) {
            const bidang = toggleBtn.dataset.bidangToggle;
            if (expandedBidang.has(bidang)) {
                expandedBidang.delete(bidang);
            } else {
                expandedBidang.add(bidang);
            }
            renderTopics(searchInput ? searchInput.value : "");
            return;
        }

        const toggleAllBtn = e.target.closest("[data-toggle-all]");
        if (toggleAllBtn) {
            if (toggleAllBtn.dataset.toggleAll === "open") {
                DAFTAR_TOPIK.forEach(g => expandedBidang.add(g.bidang));
            } else {
                expandedBidang.clear();
            }
            renderTopics(searchInput ? searchInput.value : "");
        }
    });

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