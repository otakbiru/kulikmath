MathJax = {
   loader: { load: ['[tex]/color', '[tex]/cancel', '[tex]/enclose'] },
   tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      packages: { '[+]': ['color', 'cancel', 'enclose'] },
      macros: {
         degree: "{^\\circ}",
         dmn: "\\ \\middle\\vert\\ "
      }
   },
   options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"]
   }
};

function isinomor(awal) {
   let soalke = document.getElementsByClassName("nomor");
   for (let i = 0; i < soalke.length; i++) {
      soalke[i].innerHTML = awal + i;
   }
}
var persi = 2;
function lingtri() {
   window.open("https://idham.skom.id/idham/linktreematematikaidhamdaz.html?v=3", "_blank");
}
//nama class untuk tipe
var idtipe = ["standar", "snbt", "hots"];

//bentuk akar
var akar = [["/2022/04/exercise-zone-bentuk-akar.html", "/2022/04/exercise-zone-bentuk-akar-2.html", "/2023/12/exercise-zone-bentuk-akar-3.html"], ["/2022/04/sbmptn-zone-bentuk-akar.html"], ["/2022/04/hots-zone-bentuk-akar.html", "/2023/05/hots-zone-bentuk-akar-2.html"]];

//aljabar
var aljabar = [["/2023/01/exercise-zone-aljabar.html"], ["/2023/01/snbt-zone-aljabar.html"], ["/2020/03/olimpiade-zone-aljabar.html", "/2020/03/olimpiade-zone-aljabar-2.html", "/2023/04/hots-zone-aljabar-3.html", "/2023/11/hots-zone-aljabar-4.html", "/2024/02/hots-zone-aljabar-5.html", "/2024/03/hots-zone-aljabar-6.html"]];

//AM GM HM QM
var amgmhmqm = [["/2022/11/exercise-zone-am-gm-hm-qm.html"], [], ["/2022/11/hots-zone-am-gm-hm-qm.html"]];

//Aritmetika Sosial
var aritmesos = [[], [""], []];

//asimtot kurva
var asimtotkurva = [[], ["/2023/01/snbt-zone-asimtot-kurva.html"], ["/2023/01/hots-zone-asimtot-kurva.html"]];

//Aturan Pencacahan
var atupen = [["/2022/04/exercise-zone-aturan-pencacahan.html"], [], [""]];

//aturan cosinus
var atucos = [[], [], ["/2024/01/hots-zone-aturan-cosinus.html"]];

//Aturan Sinus
var aturansinus = [["/2023/11/exercise-zone-aturan-sinus.html"], [], ["/2023/11/hots-zone-aturan-sinus.html"]];

//balok
var balok = [["/2022/04/exercise-zone-balok.html"], ["/2022/04/sbmptn-zone-balok.html"], ["/2023/05/hots-zone-balok.html"]];

//barisan dan deret
var barder = [["/2022/04/exercise-zone-barisan-dan-deret_29.html"], ["/2022/04/sbmptn-zone-barisan-dan-deret.html"], ["/2022/04/hots-zone-barisan-dan-deret.html", "/2023/01/hots-zone-barisan-dan-deret-2.html"]];

//barisan dan deret aritmetika
var BarDerArit = [["/2022/04/exercise-zone-barisan-dan-deret.html", "/2022/04/exercise-zone-barisan-dan-deret_27.html", "/2022/04/exercise-zone-barisan-dan-deret_2.html", "/2022/04/exercise-zone-barisan-dan-deret_90.html", "/2022/05/exercise-zone-barisan-dan-deret.html"], ["/2022/04/sbmptn-zone-barisan-dan-deret-aritmetika.html"], ["/2022/04/hots-zone-barisan-dan-deret-aritmetika.html", "/2023/11/hots-zone-barisan-dan-deret-aritmetika-2.html"]];

//barisan dan deret geometri
var bardergeo = [["/2022/04/exercise-zone-barisan-dan-deret-geometri.html", "/2022/04/exercise-zone-barisan-dan-deret_28.html"], ["/2022/04/sbmptn-zone-barisan-dan-deret-geometri.html"], ["/2024/03/hots-zone-barisan-dan-deret-geometri.html"]];

//bangun ruang sisi lengkung
var barusile = [["/2022/04/exercise-zone-bangun-ruang-sisi-lengkung.html"], [], []];

//basis bilangan
var basisbilangan = [["/2023/01/exercise-zone-basis-bilangan.html"], [], ["/2023/01/hots-zone-basis-bilangan.html"]];

//bilangan real
var bilanganReal = [[], [], ["/2024/10/hots-zone-bilangan-real.html"]];

//bilangan asli
var bilas = [[], [], ["/2022/04/hots-zone-bilangan-asli-bilangan-bulat.html", "/2023/02/hots-zone-bilangan-asli-bilangan-bulat.html", "/2024/03/hots-zone-bilangan-asli-bilangan-bulat.html"]];

//bilangan bulat
var bilbul = [["/2022/04/exercise-zone-bilangan-bulat.html"], ["/2023/01/snbt-zone-bilangan-bulat.html"], ["/2022/04/hots-zone-bilangan-bulat.html", "/2022/12/hots-zone-bilangan-bulat-2.html", "/2023/03/hots-zone-bilangan-bulat-3.html", "/2023/05/hots-zone-bilangan-bulat-4.html", "/2024/01/hots-zone-bilangan-bulat-5.html"]];

//bilangan pecahan
var bilpec = [["/2022/04/exercise-zone-bilangan-pecahan.html"], ["/2024/01/snbt-zone-bilangan-pecahan.html"], ["/2022/04/hots-zone-bilangan-pecahan.html", "/2023/11/hots-zone-bilangan-pecahan-2.html"]];

//bilangan prima
var bilanganprima = [[], [], ["/2023/01/hots-zone-bilangan-prima.html"]];

//bilangan kompleks
var bilKomp = [[], [], [""]]
//bunga majemuk
var bungamajemuk = [[], [], ["/2023/04/hots-zone-bunga-majemuk.html"]];

//bunga Tunggal
var bungaTunggal = [["/2024/03/exercise-zone-bunga-tunggal.html"], [], []];

//Cauchy Schwarz
var causch = [[], [], ["2023/03/hots-zone-cauchy-schwarz.html"]];

var calonsoal = [[""], [], []]
//deret geometri tak hingga
var dergeotahi = [["/2022/04/exercise-zone-deret-geometri-tak-hingga.html"], ["/2022/04/sbmptn-zone-deret-geometri-tak-hingga.html"], []];

//deret teleskopik
var dertel = [[], [], ["/2023/10/hots-zone-deret-teleskopik.html"]];

//desil
var desil = [["/2022/05/exercise-zone-desil.html"], [], []];

//determinan matriks
var deter = [["/2022/05/exercise-zone-determinan-matriks.html", "/2022/12/exercise-zone-determinan-matriks-2.html"], ["/2022/12/sbmptn-zone-determinan-matriks.html"], []];

//diagram lingkaran 
var diagling = [["/2022/05/exercise-zone-diagram-lingkaran.html"], [], []];

//dilatasi
var dilat = [["/2022/05/exercise-zone-dilatasi.html"], [], []];

//distribusi binomial
var DistBinom = [[], [], ["/2025/03/hots-zone-distribusi-binomial.html"]];

//evaluasi GMOM September 2024
var evalgmomsep24 = [[], [], ["/2024/10/soal-dan-pembahasan-evaluasi-gmom.html"]];

//faktorial
var fakt = [["/2022/05/exercise-zone-faktorial.html"], [], ["/2023/01/hots-zone-faktorial.html"]];

//Faktor Positif
var faktorPositifSoal = [[], [], ["/2024/03/hots-zone-faktor-positif.html"]];

//floor function
var floorfunc = [[], [], ["/2023/03/hots-zone-floor-function.html"]];

//frekuensi harapan
var frekhar = [["/2022/05/exercise-zone-frekuensi-harapan.html"], [], ["/2022/05/hots-zone-frekuensi-harapan.html"]];

//fungsi
var fung = [["/2022/05/exercise-zone-fungsi.html", "/2022/05/exercise-zone-fungsi-2.html"], ["/2022/05/sbmptn-zone-fungsi.html", "/2022/05/sbmptn-zone-fungsi-2.html"], ["/2022/05/hots-zone-fungsi.html", "/2023/12/hots-zone-fungsi-2.html"]];

//fungsi komposisi
var fungkom = [["/2022/05/exercise-zone-fungsi-komposisi.html", "/2022/05/exercise-zone-fungsi-komposisi-2.html"], ["/2022/05/sbmptn-zone-fungsi-komposisi.html"], []];

//fungsi kuadrat
var fungkuad = [["/2022/11/exercise-zone-fungsi-kuadrat.html", "/2024/03/exercise-zone-fungsi-kuadrat-2.html"], [], ["/2023/04/hots-zone-fungsi-kuadrat.html"]];

//fungsi naik dan turun
var fungnatu = [["/2022/05/exercise-zone-fungsi-naik-dan-turun.html"], [], []];

//Garis singgung lingkaran
var gasingling = [["/2022/05/exercise-zone-garis-singgung-lingkaran.html"], ["/2022/05/sbmptn-zone-garis-singgung-lingkaran.html"], []];

//Geometri Bidang Datar
var geombida = [[], [], ["/2022/11/hots-zone-geometri-bidang-datar.html", "/2023/11/hots-zone-geometri-bidang-datar-2.html"]];

//grafik fungsi trigonometri
var grafutri = [["/2023/02/exercise-zone-grafik-fungsi-trigonometri.html"], [], []];

//himpunan
var himp = [["/2022/05/exercise-zone-himpunan.html"], [], ["/2022/05/hots-zone-himpunan.html"]];

//hubungan garis dan lingkaran
var hubgarling = [["/2022/05/exercise-zone-hubungan-garis-dan.html"], [], []];

//induksi matematika
var indma = [["/2022/05/exercise-zone-induksi-matematika.html"], [], []];

//invers matriks
var inmat = [["/2022/05/exercise-zone-invers-matriks.html", "/2022/12/exercise-zone-invers-matriks-2.html"], ["/2022/12/sbmptn-zone-invers-matriks.html"], []];

//integral lipat
var intlipat = [["/2022/05/exercise-zone-integral-lipat.html"], [], []];

//integral tak tentu
var inttat = [["/2022/05/exercise-zone-integral-tak-tentu.html"], [""], []];

//integral tentu
var integraltentu = [["/2023/01/exercise-zone-integral-tentu.html", "/2023/01/exercise-zone-integral-tentu-2.html"], ["/2023/01/snbt-zone-integral-tentu.html", "/2023/01/snbt-zone-integral-tentu-2.html"], ["/2023/01/hots-zone-integral-tentu.html"]];

//integral trigonometri tak tentu
var inttritat = [[""], [], []];

//invers fungsi
var invfung = [["/2023/01/exercise-zone-invers-fungsi.html"], ["/2023/02/snbt-zone-invers-fungsi.html"], []];

//jajar genjang
var jajgen = [["/2025/03/exercise-zone-jajar-genjang.html"], [], []];

//jarak, kecepatan dan percepatan
var jarakkecepatanpercepatan = [[], [], ["/2023/01/hots-zone-jarak-kecepatan-dan-percepatan.html"]];

//kesebangunan
var keseb = [["/2023/02/exercise-zone-kesebangunan.html"], [], ["/2023/02/hots-zone-kesebangunan.html"]];

//kesebangunan pada segitiga
var kesebseg = [["/2023/02/exercise-zone-kesebangunan-pada-segitiga.html"], [], []];

//koefisien binomial
var koefbinom = [[], [], ["/2023/11/hots-zone-koefisien-binomial.html"]];

//kombinasi dengan pengulangan
var kombdengpeng = [[], [], ["/2023/03/hots-zone-kombinasi-dengan-pengulangan.html"]];

//koordinat kutub
var koorku = [["/2022/05/exercise-zone-koordinat-kutub.html"], [], []];

//KTOM 2015 JUNI
var ktom201506 = [[], [], [""]]

//kuartil
var kuar = [[""], [], []];

//kubus
var kubus = [["/2022/11/exercise-zone-kubus.html"], ["/2023/02/snbt-zone-kubus.html"], [""]];

//laju perubahan
var laper = [["/2023/02/exercise-zone-laju-perubahan.html"], [], []];

//limas
var limas = [[""], [], []];

//limit
var limit = [["/2022/10/exercise-zone-limit.html", "/2022/10/exercise-zone-limit-2.html", "/2022/05/exercise-zone-limit-3.html", "/2022/05/exercise-zone-limit-4.html"], ["/2022/11/sbmptn-zone-limit.html", "/2022/11/sbmptn-zone-limit-fungsi-aljabar-2.html"], ["/2022/11/hots-zone-limit-fungsi-aljabar.html"]];

//limit tak hingga
var limtahi = [["/2022/10/exercise-zone-limit-tak-hingga.html", "/2022/10/exercise-zone-limit-tak-hingga-2.html"], ["/2022/10/sbmptn-zone-limit-tak-hingga.html"], ["/2022/10/hots-zone-limit-tak-hingga.html"]];

//limit trigonometri 
var limtri = [["", ""], ["", ""], ["/2024/01/hots-zone-limit-trigonometri.html"]];

//lingkaran
var lingk = [["/2023/01/exercise-zone-lingkaran.html"], ["/2023/02/snbt-zone-lingkaran.html"], ["/2023/01/hots-zone-lingkaran.html", "//"]];

//LMNas SMA Ke-28
var lmnas28sma = [[], [], ["/2024/10/penyisihan-lmnas-ugm-sma-ke-28.html", ""]];

//logaritma
var linksoallogaritma = [["/2022/06/exercise-zone-logaritma.html", "/2023/02/exercise-zone-logaritma-2.html", "/2022/05/exercise-zone-logaritma-3.html", "/2022/05/exercise-zone-logaritma-4.html"], ["/2023/02/snbt-zone-logaritma.html"], ["/2023/01/hots-zone-logaritma.html"]];

//logika matematika
var logi = [["/2022/07/exercise-zone-logika-matematika.html"], [""], ["/2023/11/hots-zone-logika-matematika.html"]];

//luas daerah di bawah kurva
var luda = [["/2019/02/luas-daerah-di-bawah-kurva-soal-dan.html"], ["/2020/10/sbmptn-zone-luas-daerah-di-bawah-kurva.html"], []];

//matriks
var matr = [["/2022/11/exercise-zone-matriks.html", "/2022/11/exercise-zone-matriks-2.html", "/2022/11/exercise-zone-matriks-3.html", "/2022/12/exercise-zone-matriks-4.html", "/2022/12/exercise-zone-matriks-5.html", "/2022/05/exercise-zone-matriks-6.html"], ["/2022/12/sbmptn-zone-matriks.html"], ["/2023/11/hots-zone-matriks.html"]];

//makimum dan minimum
var maksmin = [["/2022/11/exercise-zone-maksimum-dan-minimum.html"], ["/2022/11/sbmptn-zone-maksimum-dan-minimum.html"], ["/2022/11/hots-zone-maksimum-dan-minimum.html"]];

//modulo
var modulo = [[], [], ["/2023/04/hots-zone-modulo.html", "/2024/03/hots-zone-modulo-2.html"]];

//nilai mutlak
var nilaimutlak = [["/2022/11/exercise-zone-nilai-mutlak.html"], ["/2024/01/snbt-zone-nilai-mutlak.html"], ["/2022/11/hots-zone-nilai-mutlak.html"]];

//pangkat
var pangk = [["/2022/06/exercise-zone-pangkat-eksponen.html", "/2022/05/exercise-zone-pangkat-eksponen-2.html", "/2022/06/exercise-zone-pangkat-eksponen-3.html", "/2024/03/exercise-zone-pangkat-eksponen-4.html"], ["/2022/06/sbmptn-zone-pangkat-eksponen.html"], ["/2022/11/hots-zone-pangkat-eksponen.html", "/2023/10/hots-zone-pangkat-eksponen-2.html", "/2026/05/hots-zone-eksponen-pangkat-3.html"]];

//panjang vektor
var panvek = [["/2023/02/exercise-zone-panjang-vektor.html"], [], []];

//peluang
var peluang = [["h/2022/11/exercise-zone-peluang.html", "/2022/12/exercise-zone-peluang-2.html"], ["/2020/09/sbmptn-zone-peluang.html"], ["/2020/09/hots-zone-peluang.html", "/2023/11/hots-zone-peluang-2.html"]];

//peluang distribusi binomial
var peldistbin = [["/2021/01/exercise-zone-peluang-distribusi.html"], [], []];

//perbandingan
var perband = [[], [], ["/2023/11/hots-zone-perbandingan.html"]];

//perbandingan berbalik nilai
var perbberni = [["/2023/01/exercise-zone-perbandingan-berbanding.html"], [], ["/2023/01/hots-zone-perbandingan-berbalik-nilai.html"]];

//perbandingan senilai
var perbse = [["/2019/11/perbandingan-senilai-direct-proportion.html"], [], []];

//permutasi dan kombinasi
var permukom = [["/2022/11/exercise-zone-permutasi-dan-kombinasi.html", "/2022/12/exercise-zone-permutasi-dan-kombinasi-2.html", ""], ["/2023/11/snbt-zone-permutasi-dan-kombinasi.html"], ["/2023/02/hots-zone-permutasi-dan-kombinasi.html", "/2023/11/hots-zone-permutasi-dan-kombinasi-2.html", ""]];

//permutasi siklik
var permutasisiklik = [[], [], ["/2023/11/hots-zone-permutasi-siklik-siklis.html"]];

//persegi panjang
var perpan = [["/2023/02/exercise-zone-persegi-panjang.html"], [], ["/2023/02/hots-zone-persegi-panjang.html"]];

//persamaan
var persamaan = [["/2020/10/exercise-zone-persamaan.html"], [], ["/2020/10/hots-zone-persamaan.html"]];

//persamaan bentuk akar
var persbenak = [["/2021/05/exercise-zone-persamaan-bentuk-akar.html"], [], ["/2018/11/persamaan-bentuk-akar-soal-dan.html"]];

//persamaan diferensial
var persdif = [[""], [], []];

//persegi
var persegi = [[], [], ["/2017/12/persegi-soal-dan-pembahasan.html"]];

//persamaan eksponen
var persek = [["/2023/10/exercise-zone-persamaan-eksponen.html", "/2024/03/exercise-zone-persamaan-eksponen-2.html"], ["/2020/03/sbmptn-zone-persamaan-eksponen.html"], ["/2023/05/hots-zone-persamaan-eksponen.html"]];

//persamaan garis lurus
var persgalu = [["/2023/12/exercise-zone-persamaan-garis-lurus.html"], [], []];

//persamaan garis normal
var persgano = [["/2019/11/persamaan-garis-normal-soal-dan.html"], [], []];

//persamaan garis singgung
var persgasi = [["/2020/09/exercise-zone-persamaan-garis-singgung.html"], ["/2020/03/sbmptn-zone-persamaan-garis-singgung.html"], ["/2020/09/olimpiade-zone-persamaan-garis-singgung.html"]];

//persamaan kuadrat
var perskuad = [["/2022/12/exercise-zone-persamaan-kuadrat.html", "/2023/11/exercise-zone-persamaan-kuadrat-2.html"], ["/2023/10/snbt-zone-persamaan-kuadrat.html", "/2023/10/snbt-zone-persamaan-kuadrat-2.html"], ["/2022/12/hots-zone-persamaan-kuadrat.html", "/2023/11/hots-zone-persamaan-kuadrat-2.html"]];

//persamaan lingkaran
var persling = [["/2020/03/exercise-zone-persamaan-lingkaran.html"], [], []];

//persamaan logaritma
var perslog = [[], ["https://matematikaidhamdaz.blogspot.com/2023/07/snbt-zone-persamaan-logaritma.html"], []];

//Persamaan nilai mutlak
var persNilaiMutlak = [[], [], ["/2022/12/hots-zone-persamaan-nilai-mutlak.html"]];

//persamaan trigonometri
var perstrig = [["/2020/08/exercise-zone-persamaan-trigonometri.html", "/2020/08/exercise-zone-persamaan-trigonometri-2.html"], ["/2020/08/sbmptn-zone-persamaan-trigonometri.html"], ["/2024/10/hots-zone-persamaan-trigonometri.html"]]

//pertidaksamaan bentuk aljabar
var pertbenal = [["/2023/10/exercise-zone-pertidaksamaan-bentuk.html", "/2023/10/exercise-zone-pertidaksamaan-bentuk_29.html"], ["/2023/10/snbt-zone-pertidaksamaan-bentuk-aljabar.html"], ["/2023/10/hots-zone-pertidaksamaan-bentuk-aljabar.html"]];

//pertidaksamaan bentuk akar
var pertbenak = [[], ["/2018/10/pertidaksamaan-bentuk-akar-soal-dan.html"], []]

// pertidaksamaan logaritma
var pertlog = [[""], [], []];

//persamaan nilai mutlak satu variabel
var PNMSV = [["/2020/08/exercise-zone-persamaan-nilai-mutlak.html", "/2021/01/exercise-zone-persamaan-nilai-mutlak.html", "/2019/09/persamaan-nilai-mutlak-soal-dan.html"], [], []];

//poligon (suku banyak)
var poli = [[], [], ["/2023/05/hots-zone-poligon-segi-banyak.html"]];

//prinsip sarang merpati
var prinsipSarangMerpati = [[], [], ["/2024/03/hots-zone-prinsip-sarang-merpati.html"]];

//program linear
var prolin = [["/2022/11/exercise-zone-program-linier-program.html"], [], []];

//pertidaksamaan linear dua variabel
var ptldv = [["/2024/02/exercise-zone-pertidaksamaan-linear-dua.html"], [], []];

//Pertidaksamaan linear satu variabel
var PtLSV = [["/2020/10/exercise-zone-pertidaksamaan-linear.html"], [], []];

//pertidaksamaan nilai mutlak satu variabel
var PtNMSV = [["/2020/03/exercise-zone-pertidaksamaan-nilai.html", "/2020/09/exercise-zone-pertidaksamaan-nilai.html"], ["/2020/03/sbmptn-zone-pertidaksamaan-nilai-mutlak.html"], []];

//Rata-rata
var ratarataS = [["/2025/02/exercise-zone-rata-rata.html"], [], ["/2023/02/hots-zone-rata-ratarerata-mean.html"]];

//refleksi
var refl = [["/2020/08/exercise-zone-refleksi-pencerminan.html", "/2022/05/exercise-zone-refleksi-pencerminan-2.html"], ["/2020/09/sbmptn-zone-refleksi-pencerminan.html"], []];

//rotasi
var linksoalrotasi = [["/2022/12/exercise-zone-rotasi.html"], [], []];

//satuan waktu
var satuanwaktu = [["/2023/01/exercise-zone-satuan-waktu.html"], [], []];

//Segiempat siklik
var segiempatSiklikSoal = [["/2024/03/exercise-zone-segiempat-siklik.html"], [], []];

//segitiga
var segitiga = [["/2022/05/exercise-zone-segitiga.html"], ["/2023/02/snbt-zone-segitiga.html"], ["h/2023/02/hots-zone-segitiga.html", "/2023/01/hots-zone-segitiga.html", "/2024/01/hots-zone-segitiga-3.html"]];

//segitiga siku-siku
var segsik = [["/2017/06/segitiga-soal-dan-pembahasan.html"], [], []];

//sistem persamaan
var sisper = [["/2022/11/exercise-zone-sistem-persamaan-aljabar.html"], ["/2022/11/sbmptn-zone-sistem-persamaan-aljabar.html"], ["/2022/11/hots-zone-sistem-persamaan-aljabar.html", "/2022/11/hots-zone-sistem-persamaan-aljabar-2.html", "/2024/02/hots-zone-sistem-persamaan-aljabar-3.html"]];

//sistem persamaan linear-kuadrat
var sisperliku = [[], ["/2023/10/snbt-zone-sistem-persamaan-linear.html"], []];

//sistem persamaan trigonometri
var sispertrig = [[], [], ["/2024/04/hots-zone-sistem-persamaan-trigonometri.html"]];

//Skala
var skalasoal = [[], [], ["/2023/05/hots-zone-skala.html"]];

//KPK
var soalkpk = [["/2023/01/exercise-zone-kpk-kelipatan-persekutuan.html"], [], []];

//Sistem persamaan linear dua variabel
var spldv = [["/2022/05/exercise-zone-sistem-persamaan-linear.html", "/2024/01/exercise-zone-sistem-persamaan-linear.html"], [], ["/2023/01/hots-zone-sistem-persamaan-linear-dua.html"]];

//istem persamaan linear tiga variabel
var spltv = [[], [], ["/2023/05/hots-zone-sistem-persamaan-linear-tiga.html"]];

//sistem pertidaksamaan linear dua variabel
var SPtLDV = [["/2024/02/exercise-zone-sistem-pertidaksamaan.html"], [], []];

//statistika
var statistika = [[], [], ["/2023/02/hots-zone-statistika-statistic.html"]];

//sudut pusat dan sudut keliling
var sudpusudke = [[], [], ["/2024/01/hots-zone-sudut-pusat-dan-sudut-keliling.html"]];

//suku banyak (polinom)
var sukubanyak = [["/2024/07/exercise-zone-polinom-suku-banyak.html", "/2019/07/suku-banyak-polinom-2-soal-dan.html"], ["/2024/01/snbt-zone-suku-banyak-polinom.html"], ["/2023/01/hots-zone-suku-banyak-polinom.html", "/2023/01/hots-zone-suku-banyak-polinom-2.html", "/2024/10/hots-zone-suku-banyak-polinom-3.html"]];

//TANTANGAN
var tantangan = [["/2023/10/soal-tantangan.html"], [], []];

//tabung (silinder)
var tabu = [[""], [], []];

//teorema menelaus
var teomen = [[], [], ["/2023/10/hots-zone-teorema-menelaus.html"]];

//translasi
var linksoaltranslasi = [["/2020/09/exercise-zone-translasi.html"], [], []];
//transformasi geometri
var trangeo = [["/2020/08/exercise-zone-transformasi-geometri.html"], ["/2017/11/transformasi-geometri-soal-dan.html"], []];

//trapesium
var trapes = [[], [], ["/2023/04/hots-zone-trapesium.html"]];

//trigonometri
var trig = [["/2024/02/exercise-zone-trigonometri.html", "/2022/05/exercise-zone-trigonometri-2.html"], ["/2017/05/trigonometri-soal-dan-pembahasan.html"], ["/2020/09/hots-zone-trigonometri.html"]];

//trigonometri pada segitiga
var trigpas = [["/2022/05/exercise-zone-trigonometri-pada-segitiga.html"], [], ["/2023/11/hots-zone-trigonometri-pada-segitiga.html"]];

//turunan fungsi trigonometri
var turfungtri = [["/2020/08/exercise-zone-turunan-fungsi.html", "/2023/10/exercise-zone-turunan-fungsi_25.html"], ["/2020/08/sbmptn-zone-turunan-fungsi-trigonometri.html"], []];

//turunan
var turu = [["/2022/05/exercise-zone-turunan-derivative.html", "/2022/05/exercise-zone-turunan-derivative-2.html"], ["/2022/05/sbmptn-zone-turunan-derivative.html"], ["/2022/05/hots-zone-turunan-derivative.html"]];

//vektor
var vek = [["/2022/05/exercise-zone-vektor.html"], ["/2022/05/sbmptn-zone-vektor.html"], ["/2022/05/hots-zone-vektor.html"]];

//volume benda putar
var volbp = [["/2018/09/volume-benda-putar-soal-dan-pembahasan.html"], [], []]

//fungsi soal untuk mengatur tipe dan navigasi. materi diisi dengan nama variabel sesuai dengan materi yang diinginkan di atas. tipesoal diisi 1 untuk tipe standar, 2 untuk tipe sbmptn, dan 3 untuk tipe hots. halaman diisi angka sesuai halaman ke berapa
function soal(materi, tipesoal, halaman) {
   for (let i = 0; i < 3; i++) {
      if (materi[i].length > 0) {
         document.getElementById(idtipe[i]).classList.replace("w3-hide", "w3-show");
         document.getElementById(idtipe[i]).setAttribute("href", materi[i][0]);
      }
   }
   var navi = document.getElementsByClassName("navi");
   if (materi[tipesoal - 1].length > 1) {
      for (let i = 0; i < navi.length; i++) {
         navi[i].classList.replace("w3-hide", "w3-show");
         for (let j = 0; j < materi[tipesoal - 1].length; j++) {
            navi[i].innerHTML += `<a href="${materi[tipesoal - 1][j]}" class="w3-bar-item w3-button">${(j + 1)}</a>`;
         }
         navi[i].getElementsByTagName("a")[halaman - 1].removeAttribute("href");
         navi[i].getElementsByTagName("a")[halaman - 1].classList.add("w3-green");
      }
   }
   isinomor((halaman - 1) * 10 + 1);

}


function isihtml(elementId, html) {
   var element = document.getElementById(elementId);
   if (element) {
      element.innerHTML = html;
   }
}

//mengganti stringAwal dengan stringPengganti pada div dengan id divId
function gantiString(divId, stringAwal, stringPengganti) {
   var div = document.getElementById(divId);
   if (div) {
      div.innerHTML = div.innerHTML.replace(new RegExp(stringAwal, 'g'), stringPengganti);
   } else {
      console.log("Tidak ada elemen dengan ID: " + divId);
   }
}