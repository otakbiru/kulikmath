function pembagi(n) {
    if (n < 1)
        throw "Argument error";
    var small = [];
    var large = [];
    var end = Math.floor(Math.sqrt(n));
    for (let i = 1; i <= end; i++) {
        if (n % i == 0) {
            small.push(i);
            if (i * i != n)  // Don't include a square root twice
                large.push(n / i);
        }
    }
    large.reverse();
    return small.concat(large);
}

FaktorTerkecil = function(n) {
    if (isNaN(n) || !isFinite(n)) return NaN;  
    if (n==0) return 0;  
    if (n%1 || n*n<2) return 1;
    if (n%2==0) return 2;  
    if (n%3==0) return 3;  
    if (n%5==0) return 5;  
    var m = Math.sqrt(n);
    for (let i=7;i<=m;i+=30) {
     if (n%i==0)      return i;
     if (n%(i+4)==0)  return i+4;
     if (n%(i+6)==0)  return i+6;
     if (n%(i+10)==0) return i+10;
     if (n%(i+12)==0) return i+12;
     if (n%(i+16)==0) return i+16;
     if (n%(i+22)==0) return i+22;
     if (n%(i+24)==0) return i+24;
    }
    return n;
   }
   
   // Optimized version of FaktorTerkecil for Opera, Chrome, Firefox.
   // In these browsers, "i divides n" is much faster as
   // (q=n/i)==Math.floor(q)  than  n%i==0
   if (
       navigator.userAgent.indexOf('Opera')  !=-1
    || navigator.userAgent.indexOf('Chrome') !=-1
    || navigator.userAgent.indexOf('Firefox')!=-1 )
   {
    FaktorTerkecil = function(n) {
     if (isNaN(n) || !isFinite(n)) return NaN;   
     if (n==0) return 0;  
     if (n%1 || n*n<2) return 1;
     if (n%2==0) return 2;  
     if (n%3==0) return 3;  
     if (n%5==0) return 5;  
     var q, m = Math.sqrt(n);
     for (let i=7;i<=m;i+=30) {
      if ((q=n/i)==Math.floor(q))      return i;
      if ((q=n/(i+4))==Math.floor(q))  return i+4;
      if ((q=n/(i+6))==Math.floor(q))  return i+6;
      if ((q=n/(i+10))==Math.floor(q)) return i+10;
      if ((q=n/(i+12))==Math.floor(q)) return i+12;
      if ((q=n/(i+16))==Math.floor(q)) return i+16;
      if ((q=n/(i+22))==Math.floor(q)) return i+22;
      if ((q=n/(i+24))==Math.floor(q)) return i+24;
     }
     return n;
    }
   }
   
   // Optimized version for Internet Explorer avoids IE's 
   // "slow script" warning at 5000000 script statements
   // by grouping 48 divisibility checks into a single statement
   
   if (navigator.userAgent.indexOf('MSIE')!=-1)
   {
    FaktorTerkecil = function(n){
     if (isNaN(n)) return NaN;  
     if (n==0) return 0;  
     if (!isFinite(n) || n%1 || n*n<2) return 1;
     if (n%2==0) return 2;  
     if (n%3==0) return 3;  
     if (n%5==0) return 5;  
     if (n%7==0) return 7;  
     var m = Math.sqrt(n);
     for (let i=11;i<=m;i+=210) {
      if (n%i && n%(i+2) && n%(i+6) && n%(i+8)&& n%(i+12)&& n%(i+18)&& n%(i+20)&& n%(i+26)
      && n%(i+30) && n%(i+32) && n%(i+36) && n%(i+42) && n%(i+48) && n%(i+50) && n%(i+56)
      && n%(i+60) && n%(i+62) && n%(i+68) && n%(i+72) && n%(i+78) && n%(i+86)
      && n%(i+90) && n%(i+92) && n%(i+96) && n%(i+98) && n%(i+102)&& n%(i+110)&& n%(i+116)
      && n%(i+120)&& n%(i+126)&& n%(i+128)&& n%(i+132)&& n%(i+138)&& n%(i+140)&& n%(i+146)
      && n%(i+152)&& n%(i+156)&& n%(i+158)&& n%(i+162)&& n%(i+168)&& n%(i+170)&& n%(i+176)
      && n%(i+180)&& n%(i+182)&& n%(i+186)&& n%(i+188)&& n%(i+198)&& n%(i+200)
      ) continue;
      for (let j=0;j<210;j+=2) {if (n%(i+j)==0) return i+j; }
     }
     return n;
    }
   }
   
   // function cekPrima(n) returns:
   // - false if n is NaN or not a finite integer
   // - true  if n is prime
   // - false otherwise
   
   cekPrima = function(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
    if (n==FaktorTerkecil(n)) return true;
    return false;
   }
var tandfull = ["+","-"];
var pakso1 = [100,20,50,10];
var pakja1 = [String.raw`2(<em>p</em> + <em>q</em>)`,String.raw`2<em>p</em> + <em>q</em>`,String.raw`<em>p</em> + 2<em>q</em>`,String.raw`<em>p</em> + <em>q</em>`];
var no1 = [ac(4)];
no1[1]=pakja1[no1[0]];
pakja1.splice(no1[0],1)

var no2 = [acan(10,20),acan(10,20),acan(2,6)];
var pakja2 = [];
for (let i = 0; i < 5; i++) {
    pakja2[i]=String.raw`<m>${i+2}\sqrt3</m>`
}
no2[3]=pakja2[no2[2]-2];
pakja2.splice(no2[2]-2,1);

 var no3=ac(5);
 var pakso3 = [String.raw`<m class="pb">\dfrac1{\sqrt{10}}</m>`,String.raw`<m class="pb">\dfrac2{\sqrt{10}}</m>`,String.raw`<m class="pb">\dfrac{10}{\sqrt{10}}</m>`,String.raw`<m class="pb">\dfrac{20}{\sqrt{10}}</m>`,String.raw`<m class="pb">\dfrac{30}{\sqrt{10}}</m>`];
 var pakja3 = [String.raw`<m>\dfrac1{10}\sqrt{10}</m>`,String.raw`<m>\dfrac15\sqrt{10}</m>`,String.raw`<m>\sqrt{10}</m>`,String.raw`<m>2\sqrt{10}</m>`,String.raw`<m>3\sqrt{10}</m>`]

 var no4=[ac(5)];
var pakso4 = [String.raw`\sqrt2\times\sqrt{10}`,String.raw`2\sqrt2\times\sqrt{10}`,String.raw`3\sqrt2\times\sqrt{10}`,String.raw`2\sqrt2\times2\sqrt{10}`,String.raw`2\sqrt2\times3\sqrt{10}`];
var pakja4 = [String.raw`2\sqrt5`,String.raw`4\sqrt5`,String.raw`6\sqrt5`,String.raw`8\sqrt5`,String.raw`12\sqrt5`];
no4[1]=pakja4[no4[0]];
pakja4.splice(no4[0],1);

 var no5=[ac(5)];
 var pakso5 = [String.raw`sin &alpha;`,String.raw`tan &alpha;`,String.raw`cot &alpha;`,String.raw`sec &alpha;`,String.raw`csc &alpha;`];
 var pakja5 = [String.raw`<m>\dfrac45</m>`,String.raw`<m>\dfrac43</m>`,String.raw`<m>\dfrac34</m>`,String.raw`<m>\dfrac53</m>`,String.raw`<m>\dfrac54</m>`];
 no5[1]=pakja5[no5[0]];
pakja5.splice(no5[0],1);
 
var no6=[ac(5)];
var pakso6 = [String.raw`0`,String.raw`\dfrac12`,String.raw`\dfrac12\sqrt2`,String.raw`\dfrac12\sqrt3`,String.raw`1`];
var pakja6 = [String.raw`1`,String.raw`<m>\dfrac12\sqrt3</m>`,String.raw`<m>\dfrac12\sqrt2</m>`,String.raw`<m>\dfrac12</m>`,String.raw`0`];
no6[1]=pakja6[no6[0]];
pakja6.splice(no6[0],1);

var no7=[ac(5)];
var pakso7 = [3,6,9,12,15];
var pakja7 = [String.raw`<m>\sqrt6</m>`,String.raw`<m>2\sqrt6</m>`,String.raw`<m>3\sqrt6</m>`,String.raw`<m>4\sqrt6</m>`,String.raw`<m>5\sqrt6</m>`];
no7[1]=pakja7[no7[0]];
pakja7.splice(no7[0],1);

var no8=[ac(5)];
var pakso8 = [315,300,270,240,225];
var pakja8 = [String.raw`<m>\dfrac12\sqrt2</m>`,String.raw`<m>\dfrac12</m>`,String.raw`0`,String.raw`<m>-\dfrac12</m>`,String.raw`<m>-\dfrac12\sqrt2</m>`];
no8[1]=pakja8[no8[0]];
pakja8.splice(no8[0],1);

var no9=acan(4,8);
var no10=[acan(3,9),acan(3,9),acan(3,9),acan(2,10)];
var no11=[acan(2,100),acan(2,4)];
var no12=[acan(2,999),acan(2,999),acan(2,5)];
var no13=[acan(2,9),acan(2,9)];
var no14=[acan(1,177)];
no14[1]=acan(no14[0]+1,179)-no14[0];
var no15=2*acan(1,100)
 
var soalpg = [
    {"t":String.raw`Jika diketahui <e>log 2 = <em>p</em></e> dan <e>log 5 = <em>q</em>,</e> maka nilai dari <e>log ${pakso1[no1[0]]}</e> adalah ....`,"s":[no1[1],pakja1[0],pakja1[1],pakja1[2],`2<em>pq</em>`]},
    {"t":String.raw`Bentuk sederhana dari <m>{${no2[0]}\sqrt3+${no2[1]}\sqrt3-${no2[0]+no2[1]-no2[2]}\sqrt3}</m> = ....`,"s":[no2[3],pakja2[0],pakja2[1],pakja2[2],pakja2[3]]},
    {"t":String.raw`Bentuk ${pakso3[no3]}, jika dirasionalkan penyebutnya hasilnya adalah ....`,"s":[pakja3[0],pakja3[1],pakja3[2],pakja3[3],pakja3[4]]},
    {"t":String.raw`Hasil dari  adalah <m>{${pakso4[no4[0]]}}</m> adalah ....`,"s":[String.raw`<m>{${no4[1]}}</m>`,String.raw`<m>{${pakja4[0]}}</m>`,String.raw`<m>{${pakja4[1]}}</m>`,String.raw`<m>{${pakja4[2]}}</m>`,String.raw`<m>{${pakja4[3]}}</m>`]},
    {"t":String.raw`Jika <m>\cos \alpha =\dfrac35</m> dan &alpha; adalah sudut lancip, maka <e>${pakso5[no5[0]]} =</e> ....`,"s":[no5[1],pakja5[0],pakja5[1],pakja5[2],pakja5[3]]},
    {"t":String.raw`Jika <m>\sin \alpha =${pakso6[no6[0]]}</m> dan &alpha; adalah sudut lancip, maka <e>cos &alpha; =</e> ....`,"s":[no6[1],pakja6[0],pakja6[1],pakja6[2],pakja6[3]]},
    {"t":String.raw`Dalam ∆ABC diketahui <e><em>a</em> = ${pakso7[no7[0]]} cm,</e> <e>&angle;<em>A</em> = 60°,</e> dan <e>&angle;<em>B</em> = 45°,</e> maka <em>b</em> adalah ....`,"s":[no7[1],pakja7[0],pakja7[1],pakja7[2],pakja7[3]]},
    {"t":String.raw`Nilai dari <e>cos ${pakso8[no8[0]]}°</e> adalah ....`,"s":[no8[1],pakja8[0],pakja8[1],pakja8[2],pakja8[3]]}
]
var soalising =[
    {"t":String.raw`<e><sup>2</sup>log ${Math.pow(2,no9)} =</e> ....`,"s":no9},
    {"t":String.raw`<e><sup>2</sup>log ${no10[0]} &sdot; <sup>${no10[0]}</sup>log ${no10[1]} &sdot; <sup>${no10[1]}</sup>log ${no10[2]} &sdot; <sup>${no10[2]}</sup>log ${Math.pow(2,no10[3])} =</e> ....`,"s":no10[3]},
    {"t":String.raw`Jika <e><em>a</em> = 4,</e> <e><em>b</em> = 3,</e> dan <e><em>c</em> = 2,</e> nilai dari <m class="pb">\dfrac{a^{${no11[0]}}\cdot b^${no11[1]}}{c^{${2*no11[0]}}}</m> adalah ....`,"s":Math.pow(3,no11[1])},
    {"t":String.raw`<m>\dfrac{2^{${no12[0]}}\cdot2^{${no12[1]}}}{2^{${no12[0]+no12[1]-no12[2]}}}=</m> ....`,"s":Math.pow(2,no12[2])},
    {"t":String.raw`Rini membeli 3 benda A dan 4 benda B dengan membayar Rp${3*no13[0]+4*no13[1]}.000,00. Sementara Anis menbeli 6 benda A dan 2 benda B dengan membayar Rp${6*no13[0]+2*no13[1]}.000,00. Harga yang harus dibayarkan jika Latif membeli sebuah benda A dan sebuah benda B adalah ....<br><b>Catatan:</b> Tidak perlu menulis Rp, tanda koma, dan tanda titik. Jika jawabannya adalah <b>Rp1.234,00</b> maka kamu cukup mengetik <b>1234</b>`,"s":1000*(no13[0]+no13[1])},
    {"t":String.raw`Diketahui ∆ABC dengan <e>&angle;A = ${no14[0]}°,</e> sudut <e>&angle;C = ${no14[1]}°,</e> maka &angle;B adalah ....°`,"s":180-(no14[0]+no14[1])},
    {"t":String.raw`Diketahui ∆ABC siku-siku di C. Jika <e>panjang sisi BC = ${no15} cm</e> dan <e>besar &angle;BAC = 30°,</e> panjang sisi AB adalah ....`,"s":no15/2}
]