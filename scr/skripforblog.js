<script>
MathJax={
    loader: {load: [&#39;[tex]/color&#39;,&#39;[tex]/cancel&#39;,&#39;[tex]/enclose&#39;]},
    tex: {
       inlineMath: [[&#39;$&#39;, &#39;$&#39;], [&#39;\\(&#39;, &#39;\\)&#39;]],
       packages: {&#39;[+]&#39;: [&#39;color&#39;,&#39;cancel&#39;,&#39;enclose&#39;]},
       macros: {
          degree: &quot;{^\\circ}&quot;,
          dmn: &quot;\\ \\middle\\vert\\ &quot;
       }
    },
    options:{
       skipHtmlTags: [&quot;script&quot;,&quot;noscript&quot;,&quot;style&quot;,&quot;textarea&quot;,&quot;pre&quot;,&quot;code&quot;]
    }
};

function isinomor(awal){
   let soalke = document.getElementsByClassName(&quot;nomor&quot;);
   for(let i=0;i&lt;soalke.length;i++){
      soalke[i].innerHTML = awal+i;
   }
}

//nama class untuk tipe
var idtipe=[&quot;standar&quot;,&quot;sbmptn&quot;,&quot;hots&quot;];

//bentuk akar
var akar = [[&quot;/2020/03/exercise-zone-bentuk-akar.html&quot;],[&quot;/2020/03/sbmptn-zone-bentuk-akar.html&quot;],[&quot;/2020/03/olimpiade-zone-bentuk-akar.html&quot;]];

//aljabar
var alj = [[&quot;/2020/03/exercise-zone-aljabar.html&quot;],[&quot;/2020/10/sbmptn-zone-aljabar.html&quot;],[&quot;/2020/03/olimpiade-zone-aljabar.html&quot;,&quot;/2020/03/olimpiade-zone-aljabar-2.html&quot;]];

//asimtot kurva
var asim = [[],[&quot;/2017/05/asimtot-kurva-soal-dan-pembahasan.html&quot;],[&quot;/2020/10/hots-zone-asimtot-kurva.html&quot;]];

//Aturan Pencacahan
var atupen = [[&quot;/2022/04/exercise-zone-aturan-pencacahan.html&quot;],[],[]];

//balok
var balok = [[&quot;/2022/04/exercise-zone-balok.html&quot;],[&quot;/2022/04/sbmptn-zone-balok.html&quot;],[]];

//barisan dan deret
var barder = [[&quot;/2021/01/exercise-zone-barisan-dan-deret.html&quot;],[&quot;/2020/10/sbmptn-zone-barisan-dan-deret.html&quot;],[&quot;/2019/02/barisan-dan-deret-soal-dan-pembahasan.html&quot;]];

//barisan dan deret aritmetika
var BarDerArit = [[&quot;/2022/04/exercise-zone-barisan-dan-deret.html&quot;,&quot;/2022/04/exercise-zone-barisan-dan-deret_27.html&quot;,&quot;/2022/04/exercise-zone-barisan-dan-deret_2.html&quot;,&quot;/2022/04/exercise-zone-barisan-dan-deret_90.html&quot;],[&quot;/2022/04/sbmptn-zone-barisan-dan-deret-aritmetika.html&quot;],[&quot;/2022/04/hots-zone-barisan-dan-deret-aritmetika.html&quot;]];

//barisan dan deret geometri
var bardergeo = [[&quot;/2018/09/barisan-dan-deret-geometri-soal-dan.html&quot;,&quot;/2022/03/exercise-zone-barisan-dan-deret-geometri.html&quot;],[&quot;/2020/10/sbmptn-zone-barisan-dan-deret-geometri.html&quot;],[]];

//bangun ruang sisi lengkung
var barusile = [[&quot;/2022/04/exercise-zone-bangun-ruang-sisi-lengkung.html&quot;],[],[]];

//basis bilangan
var babil = [[&quot;/2020/08/exercise-zone-basis-bilangan.html&quot;],[],[&quot;/2022/03/hots-zone-basis-bilangan.html&quot;]];

//bilangan asli
var bilas = [[],[],[&quot;/2020/09/hots-zone-bilangan-asli.html&quot;]];

//bilangan bulat
var bilbul = [[&quot;/2022/03/exercise-zone-bilangan-bulat.html&quot;],[],[&quot;/2017/07/bilangan-bulat-soal-dan-pembahasan.html&quot;]];

//bilangan pecahan
var bilpec = [[&quot;/2018/02/bilangan-pecahan-soal-dan-pembahasan.html&quot;],[],[&quot;/2021/04/hots-zone-bilangan-pecahan.html&quot;]];

//bilangan prima
var bilpri = [[],[],[&quot;/2018/09/bilangan-prima-soal-dan-pembahasan.html&quot;]];

//deret geometri tak hingga
var dergeotahi = [[&quot;/2019/02/deret-geometri-tak-hingga-soal-dan.html&quot;],[&quot;/2021/01/sbmptn-zone-deret-geometri-tak-hingga.html&quot;],[]];

//deret teleskopik
var dertel = [[],[],[&quot;/2018/10/deret-teleskopik-soal-dan-pembahasan.html&quot;]];

//determinan matriks
var deter = [[&quot;/2021/11/exercise-zone-determinan-matriks.html&quot;],[],[]];

//dilatasi
var dilat = [[&quot;/2020/09/exercise-zone-dilatasi.html&quot;],[],[]];

//faktorial
var fakt = [[&quot;/2018/01/faktorial-soal-dan-pembahasan.html&quot;],[],[&quot;/2021/01/hots-zone-faktorial.html&quot;]];

//frekuensi harapan
var frekhar = [[&quot;/2020/08/exercise-zone-frekuensi-harapan.html&quot;],[],[&quot;/2021/01/hots-zone-frekuensi-harapan.html&quot;]];

//fungsi
var fung = [[&quot;/2020/03/exercise-zone-fungsi.html&quot;,&quot;/2020/11/exercise-zone-fungsi-2.html&quot;],[&quot;/2018/10/fungsi-soal-dan-pembahasan.html&quot;,&quot;/2019/03/fungsi-2-soal-dan-pembahasan.html&quot;],[&quot;/2020/09/hots-zone-fungsi.html&quot;]];

//fungsi komposisi
var fungkom = [[&quot;/2020/03/exercise-zone-fungsi-komposisi.html&quot;,&quot;/2020/10/exercise-zone-fungsi-komposisi-2.html&quot;],[&quot;/2017/11/fungsi-komposisi-soal-dan-pembahasan.html&quot;],[]];

//fungsi naik dan turu
var fungnatu = [[&quot;/2020/08/exercise-zone-fungsi-naik-dan-turun.html&quot;],[],[]];

//Garis singgung lingkaran
var gasingling = [[&quot;/2021/02/exercise-zone-garis-singgung-lingkaran.html&quot;],[&quot;/2017/05/garis-singgung-lingkaran-soal-dan.html&quot;],[]];

//grafik fungsi trigonometri
var grafutri = [[&quot;/2020/09/exercise-zone-grafik-fungsi-trigonometri.html&quot;],[],[]];

//himpunan
var himp = [[&quot;/2019/08/himpunan-soal-dan-pembahasan.html&quot;],[],[&quot;/2020/10/hots-zone-himpunan.html&quot;]];

//hubungan garis dan lingkaran
var hubgarling = [[&quot;/2021/02/exercise-zone-hubungan-garis-dan.html&quot;],[],[]];

//invers matriks
var inmat = [[&quot;/2020/10/exercise-zone-invers-matriks.html&quot;],[],[]];

//integral lipat
var intlipat = [[&quot;/2021/01/exercise-zone-integral-lipat.html&quot;],[],[]];

//integral tak tentu
var inttat = [[&quot;/2020/09/exercise-zone-integral-tak-tentu.html&quot;],[],[]];

//integral tentu
var intten = [[&quot;/2020/03/exercise-zone-integral-tentu.html&quot;,&quot;/2020/03/exercise-zone-integral-tentu-2.html&quot;],[&quot;/2020/03/sbmptn-zone-integral-tentu.html&quot;,&quot;/2020/03/sbmptn-zone-integral-tentu-2.html&quot;],[&quot;/2020/03/olimpiade-zone-integral-tentu.html&quot;]];

//invers fungsi
var invfung = [[&quot;/2020/03/exercise-zone-invers-fungsi.html&quot;],[&quot;/2020/08/sbmptn-zone-invers-fungsi.html&quot;],[]];

//kesebangunan
var keseb = [[&quot;/2021/01/exercise-zone-kesebangunan.html&quot;],[],[]];

//kesebangunan pada segitiga
var kesebseg = [[&quot;/2021/02/exercise-zone-kesebangunan-pada-segitiga.html&quot;],[],[]];

//kubus
var kubus = [[&quot;/2020/08/exercise-zone-kubus.html&quot;],[&quot;/2020/08/sbmptn-zone-kubus.html&quot;],[&quot;&quot;]];

//laju perubahan
var laper = [[&quot;/2019/11/laju-perubahan-soal-dan-pembahasan.html&quot;],[],[]];

//limit
var limit = [[&quot;/2020/02/exercise-zone-limit.html&quot;,&quot;/2020/02/exercise-zone-limit-2.html&quot;,&quot;/2020/10/exercise-zone-limit-3.html&quot;],[&quot;/2020/02/sbmptn-zone-limit.html&quot;,&quot;/2020/03/sbmptn-zone-limit-2.html&quot;],[&quot;/2020/02/olimpiade-zone-limit.html&quot;]];

//limit tak hingga
var limtahi = [[&quot;/2020/09/exercise-zone-limit-tak-hingga.html&quot;],[&quot;/2019/09/limit-tak-hingga-2-soal-dan-pembahasan.html&quot;],[&quot;/2018/04/limit-tak-hingga-soal-dan-pembahasan.html&quot;]];

//lingkaran
var ling = [[&quot;/2021/01/exercise-zone-lingkaran.html&quot;],[&quot;/2020/09/sbmptn-zone-lingkaran.html&quot;],[&quot;/2020/09/hots-zone-lingkaran.html&quot;]];

//logaritma
var loga = [[&quot;/2019/12/exercise-zone-logaritma.html&quot;,&quot;/2020/02/exercise-zone-logaritma-2.html&quot;,&quot;/2020/08/exercise-zone-logaritma-3.html&quot;],[&quot;/2020/02/sbmptn-zone-logaritma.html&quot;],[&quot;/2020/10/hots-zone-logaritma.html&quot;]];

//logika matematika
var logi = [[&quot;/2020/09/exercise%20zone%20logika%20matematika.html&quot;],[],[]];

//luas daerah di bawah kurva
var luda = [[&quot;/2019/02/luas-daerah-di-bawah-kurva-soal-dan.html&quot;],[&quot;/2020/10/sbmptn-zone-luas-daerah-di-bawah-kurva.html&quot;],[]];

//matriks
var matr = [[&quot;/2020/09/exercise-zone-matriks.html&quot;,&quot;/2020/09/exercise-zone-matriks-2.html&quot;,&quot;/2020/10/exercise-zone-matriks-3.html&quot;,&quot;/2017/11/matriks-soal-dan-pembahasan.html&quot;,&quot;/2021/09/exercise-zone-matriks-5.html&quot;,&quot;/2021/09/exercise-zone-matriks-6.html&quot;],[&quot;/2020/09/sbmptn-zone-matriks.html&quot;],[]];

//makimum dan minimum
var maksmin = [[&quot;/2020/09/exercise-zone-maksimum-dan-minimum.html&quot;],[&quot;/2020/09/sbmptn-zone-maksimum-dan-minimum.html&quot;],[&quot;/2020/09/hots-zone-maksimum-dan-minimum.html&quot;]];

//pangkat
var pangk = [[&quot;/2020/03/exercise-zone-pangkat-eksponen.html&quot;,&quot;/2020/09/exercise-zone-pangkat-eksponen-2.html&quot;],[&quot;/2020/03/sbmptn-zone-pangkat-eksponen.html&quot;],[&quot;/2020/03/olimpiade-zone-pangkat-eksponen.html&quot;]];

//panjang vektor
var panvek = [[&quot;/2020/03/exercise-zone-panjang-vektor.html&quot;],[],[]];

//peluang
var peluang = [[&quot;/2020/09/exercise-zone-peluang.html&quot;,&quot;/2017/05/peluang-soal-dan-pembahasan.html&quot;],[&quot;/2020/09/sbmptn-zone-peluang.html&quot;],[&quot;/2020/09/hots-zone-peluang.html&quot;]];

//peluang distribusi binomial
var peldistbin = [[&quot;/2021/01/exercise-zone-peluang-distribusi.html&quot;],[],[]];

//perbandingan berbalik nilai
var perbberni = [[&quot;/2021/02/exercise-zone-perbandingan-berbanding.html&quot;],[],[]];

//perbandingan senilai
var perbse = [[&quot;/2019/11/perbandingan-senilai-direct-proportion.html&quot;],[],[]];

//permutasi dan kombinasi
var permukom = [[&quot;/2020/03/exercise-zone-permutasi-dan-kombinasi.html&quot;,&quot;/2020/09/exercise-zone-permutasi-dan-kombinasi-2.html&quot;],[&quot;/2020/09/sbmptn-zone-permutasi-dan-kombinasi.html&quot;],[&quot;/2020/10/hots-zone-permutasi-dan-kombinasi.html&quot;]];

//persegi panjang
var perpan = [[&quot;/2018/11/persegi-panjang-soal-dan-pembahasan.html&quot;],[],[]];

//persamaan
var persamaan = [[&quot;/2020/10/exercise-zone-persamaan.html&quot;],[],[&quot;/2020/10/hots-zone-persamaan.html&quot;]];

//persamaan bentuk akar
var persbenak = [[&quot;/2021/05/exercise-zone-persamaan-bentuk-akar.html&quot;],[],[&quot;/2018/11/persamaan-bentuk-akar-soal-dan.html&quot;]];

//persegi
var persegi = [[],[],[&quot;/2017/12/persegi-soal-dan-pembahasan.html&quot;]];

//persamaan eksponen
var persek = [[&quot;/2020/09/exercise-zone-persamaan-eksponen.html&quot;],[&quot;/2020/03/sbmptn-zone-persamaan-eksponen.html&quot;],[&quot;/2020/09/olimpiade-zone-persamaan-eksponen.html&quot;]];

//persamaan garis normal
var persgano = [[&quot;/2019/11/persamaan-garis-normal-soal-dan.html&quot;],[],[]];

//persamaan garis singgung
var persgasi = [[&quot;/2020/09/exercise-zone-persamaan-garis-singgung.html&quot;],[&quot;/2020/03/sbmptn-zone-persamaan-garis-singgung.html&quot;],[&quot;/2020/09/olimpiade-zone-persamaan-garis-singgung.html&quot;]];

//persamaan kuadrat
var perskuad = [[&quot;/2020/07/exercise-zone-persamaan-kuadrat.html&quot;],[&quot;/2020/07/sbmptn-zone-persamaan-kuadrat.html&quot;,&quot;/2020/07/sbmptn-zone-persamaan-kuadrat-2.html&quot;],[&quot;/2020/07/olimpiade-zone-persamaan-kuadrat.html&quot;]];

//persamaan lingkaran
var persling = [[&quot;/2020/03/exercise-zone-persamaan-lingkaran.html&quot;],[],[]];

//persamaan trigonometri
var perstrig = [[&quot;/2020/08/exercise-zone-persamaan-trigonometri.html&quot;,&quot;/2020/08/exercise-zone-persamaan-trigonometri-2.html&quot;],[&quot;/2020/08/sbmptn-zone-persamaan-trigonometri.html&quot;],[&quot;/2020/08/olimpiade-zone-persamaan-trigonometri.html&quot;]]

//pertidaksamaan bentuk akar
var pertbenak = [[],[&quot;/2018/10/pertidaksamaan-bentuk-akar-soal-dan.html&quot;],[]]

//persamaan nilai mutlak satu variabel
var PNMSV= [[&quot;/2020/08/exercise-zone-persamaan-nilai-mutlak.html&quot;,&quot;/2021/01/exercise-zone-persamaan-nilai-mutlak.html&quot;,&quot;/2019/09/persamaan-nilai-mutlak-soal-dan.html&quot;],[],[]];

//poligon (suku banyak)
var poli = [[],[],[&quot;/2019/05/poligon-segi-banyak-soal-dan-pembahasan.html&quot;]];

//program linear
var prolin = [[&quot;/2018/03/program-linier-program-linear-soal-dan.html&quot;],[],[]];

//\ertidaksamaan linear satu variabel
var PtLSV = [[&quot;/2020/10/exercise-zone-pertidaksamaan-linear.html&quot;],[],[]];

//pertidaksamaan nilai mutlak satu variabel
var PtNMSV = [[&quot;/2020/03/exercise-zone-pertidaksamaan-nilai.html&quot;,&quot;/2020/09/exercise-zone-pertidaksamaan-nilai.html&quot;],[&quot;/2020/03/sbmptn-zone-pertidaksamaan-nilai-mutlak.html&quot;],[]];

//refleksi
var refl = [[&quot;/2020/08/exercise-zone-refleksi-pencerminan.html&quot;],[&quot;/2020/09/sbmptn-zone-refleksi-pencerminan.html&quot;],[]];

//rotasi
var rot = [[&quot;/2020/10/exercise-zone-rotasi.html&quot;],[],[]];

//segitiga
var segitiga = [[&quot;/2020/09/exercise-zone-segitiga.html&quot;],[&quot;/2020/09/sbmptn-zone-segitiga.html&quot;],[&quot;/2020/09/hots-zone-segitiga.html&quot;]];

//segitiga siku-siku
var segsik = [[&quot;/2017/06/segitiga-soal-dan-pembahasan.html&quot;],[],[]];

//sistem persamaan
var sisper = [[&quot;/2020/08/exercise-zone-sistem-persamaan.html&quot;],[&quot;/2020/09/sbmptn-zone-sistem-persamaan.html&quot;],[&quot;/2020/09/hots-zone-sistem-persamaan.html&quot;]];

//sistem pertidaksamaan linear dua variabel
var SPtLDV = [[&quot;/2020/09/exercise-zone-sistem-pertidaksamaan.html&quot;],[],[]];

//suku banyak (polinom)
var sukban = [[&quot;/2018/02/suku-banyak-polinom-soal-dan-pembahasan.html&quot;,&quot;/2019/07/suku-banyak-polinom-2-soal-dan.html&quot;],[],[&quot;/2020/09/hots-zone-suku-banyak-polinom.html&quot;]];

//tabung (silinder)
var tabu = [[&quot;&quot;],[],[]];

//translasi
var tran = [[&quot;/2020/09/exercise-zone-translasi.html&quot;],[],[]];
//transformasi geometri
var trangeo = [[&quot;/2020/08/exercise-zone-transformasi-geometri.html&quot;],[&quot;/2017/11/transformasi-geometri-soal-dan.html&quot;],[]];

//trigonometri
var trig = [[&quot;/2020/03/exercise-zone-trigonometri.html&quot;],[&quot;/2017/05/trigonometri-soal-dan-pembahasan.html&quot;],[&quot;/2020/09/hots-zone-trigonometri.html&quot;]];

//turunan fungsi trigonometri
var turfungtri = [[&quot;/2020/08/exercise-zone-turunan-fungsi.html&quot;,&quot;/2020/09/exercise-zone-turunan-fungsi.html&quot;],[&quot;/2020/08/sbmptn-zone-turunan-fungsi-trigonometri.html&quot;],[]];

//turunan
var turu = [[&quot;/2020/03/exercise-zone-turunan-derivative.html&quot;,&quot;/2020/10/exercise-zone-turunan-derivative-2.html&quot;],[&quot;/2020/03/sbmptn-zone-turunan-derivative.html&quot;],[&quot;/2020/10/hots-zone-turunan.html&quot;]];

//vektor
var vek = [[&quot;/2018/03/vektor-soal-dan-pembahasan.html&quot;],[&quot;/2020/09/sbmptn-zone-vektor.html&quot;],[&quot;/2020/10/hots-zone-vektor.html&quot;]];

//volume benda putar
var volbp = [[&quot;/2018/09/volume-benda-putar-soal-dan-pembahasan.html&quot;],[],[]]

//fungsi soal untuk mengatur tipe dan navigasi. materi diisi dengan nama variabel sesuai dengan materi yang diinginkan di atas. tipesoal diisi 1 untuk tipe standar, 2 untuk tipe sbmptn, dan 3 untuk tipe hots. halaman diisi angka sesuai halaman ke berapa
function soal(materi, tipesoal, halaman)  {
      for (let i = 0; i &lt; 3; i++) {
         if (materi[i].length &gt; 0) {
           document.getElementById(idtipe[i]).classList.replace(&quot;w3-hide&quot;, &quot;w3-show&quot;);
            document.getElementById(idtipe[i]).setAttribute(&quot;href&quot;, materi[i][0]);
         }
      }
      var navi = document.getElementsByClassName(&quot;navi&quot;);
      if (materi[tipesoal - 1].length &gt; 1) {
         for (let i = 0; i &lt; navi.length; i++) {
            navi[i].classList.replace(&quot;w3-hide&quot;, &quot;w3-show&quot;);
            for (let j = 0; j &lt; materi[tipesoal - 1].length; j++) {
                navi[i].innerHTML += `<a class='w3-bar-item w3-button' href='${materi[tipesoal - 1][j]}'>${(j + 1)}</a>`;
            }
            navi[i].getElementsByTagName(&quot;a&quot;)[halaman - 1].removeAttribute(&quot;href&quot;);
            navi[i].getElementsByTagName(&quot;a&quot;)[halaman - 1].classList.add(&quot;w3-green&quot;);
         }
      }
      isinomor((halaman - 1) * 10 + 1);
   }

document.addEventListener(&#39;DOMContentLoaded&#39;, function () {
    let listmatematika = document.getElementsByTagName(&quot;m&quot;);
    if(listmatematika.length&gt;0){
        for(let i=0;i&lt;listmatematika.length;i++){
            listmatematika[i].setAttribute(&#39;id&#39;,&#39;rendermtk&#39;);
            let tempatmtk = document.getElementById(&#39;rendermtk&#39;);
            katex.render(tempatmtk.innerHTML, tempatmtk, {
                throwOnError: false
            });
            listmatematika[i].setAttribute(&#39;id&#39;,&#39;&#39;);
        }
    }
}, false);
  </script>