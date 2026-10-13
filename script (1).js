// ===== 1) FİLM BAZASI =====
// t: ad, y: il, m: dəqiqə, g: janrlar, i: istəklər, w: kiminlə
const janrAdlari = {
  ro: "Romantik", ak: "Aksiyon", ko: "Komediya", dr: "Dram",
  an: "Animasiya", ma: "Macəra", ef: "Elmi-fantastika", tr: "Triller"
};

const istekAdlari = {
  c: "əhvalını qaldırmaq",
  k: "sakitləşmək",
  d: "diqqətini yayındırmaq",
  y: "ürəyini boşaltmaq"
};

const filmler = [
  { t: "Forrest Gump", y: 1994, m: 142, g: ["dr", "ro", "ko"], i: ["k", "y"], w: ["t", "s", "a"] },
  { t: "The Truman Show", y: 1998, m: 103, g: ["ko", "dr"], i: ["d", "k"], w: ["t", "d"] },
  { t: "Home Alone", y: 1990, m: 103, g: ["ko"], i: ["c", "d"], w: ["d", "a"] },
  { t: "Mrs. Doubtfire", y: 1993, m: 125, g: ["ko", "dr"], i: ["c", "y"], w: ["a", "d"] },
  { t: "Titanic", y: 1997, m: 195, g: ["ro", "dr"], i: ["y"], w: ["s", "t"] },
  { t: "The Shawshank Redemption", y: 1994, m: 142, g: ["dr"], i: ["k", "y"], w: ["t", "d"] },
  { t: "Good Will Hunting", y: 1997, m: 126, g: ["dr"], i: ["y", "k"], w: ["t", "d"] },
  { t: "Amélie", y: 2001, m: 122, g: ["ro", "ko"], i: ["c", "k"], w: ["t", "s"] },
  { t: "Spirited Away", y: 2001, m: 125, g: ["an", "ma"], i: ["k", "d"], w: ["t", "a"] },
  { t: "Up", y: 2009, m: 96, g: ["an", "ma", "dr"], i: ["y", "c"], w: ["a", "t"] },
  { t: "Inside Out", y: 2015, m: 95, g: ["an", "ko"], i: ["y", "c"], w: ["a", "t"] },
  { t: "The Lion King", y: 1994, m: 88, g: ["an", "dr"], i: ["y"], w: ["a"] },
  { t: "Jumanji", y: 1995, m: 104, g: ["ma", "ko"], i: ["d", "c"], w: ["a", "d"] },
  { t: "The Matrix", y: 1999, m: 136, g: ["ak", "ef"], i: ["d"], w: ["t", "d"] },
  { t: "Mission: Impossible", y: 1996, m: 110, g: ["ak", "tr"], i: ["d"], w: ["d", "t"] },
  { t: "Gladiator", y: 2000, m: 155, g: ["ak", "dr"], i: ["d", "y"], w: ["t", "d"] },
  { t: "Mad Max: Fury Road", y: 2015, m: 120, g: ["ak", "ma"], i: ["d"], w: ["d", "t"] },
  { t: "John Wick", y: 2014, m: 101, g: ["ak", "tr"], i: ["d"], w: ["d", "t"] },
  { t: "The Notebook", y: 2004, m: 123, g: ["ro", "dr"], i: ["y"], w: ["s", "t"] },
  { t: "Before Sunrise", y: 1995, m: 101, g: ["ro", "dr"], i: ["k"], w: ["s", "t"] },
  { t: "La La Land", y: 2016, m: 128, g: ["ro", "dr"], i: ["y", "k"], w: ["s", "t"] },
  { t: "The Intouchables", y: 2011, m: 112, g: ["ko", "dr"], i: ["c"], w: ["d", "a", "t"] },
  { t: "Paddington 2", y: 2017, m: 103, g: ["ko", "ma"], i: ["c", "k"], w: ["a", "t"] },
  { t: "Interstellar", y: 2014, m: 169, g: ["ef", "dr", "ma"], i: ["y", "d"], w: ["t", "d"] },
  { t: "Life Is Beautiful", y: 1997, m: 116, g: ["dr", "ko", "ro"], i: ["y"], w: ["t", "a"] },
  { t: "Ratatouille", y: 2007, m: 111, g: ["an", "ko"], i: ["c", "k"], w: ["a", "t", "s"] },
  { t: "Finding Nemo", y: 2003, m: 100, g: ["an", "ma"], i: ["c"], w: ["a"] },
  { t: "Knives Out", y: 2019, m: 130, g: ["tr", "ko"], i: ["d"], w: ["d", "a"] },
  { t: "Notting Hill", y: 1999, m: 124, g: ["ro", "ko"], i: ["c", "k"], w: ["s", "t"] },
  { t: "The Pursuit of Happyness", y: 2006, m: 117, g: ["dr"], i: ["y"], w: ["t", "a"] },
  { t: "Eternal Sunshine of the Spotless Mind", y: 2004, m: 108, g: ["ro", "ef", "dr"], i: ["y"], w: ["t", "s"] },
  { t: "Little Miss Sunshine", y: 2006, m: 101, g: ["ko", "dr"], i: ["c"], w: ["a", "d"] },
  { t: "Zootopia", y: 2016, m: 108, g: ["an", "ma", "ko"], i: ["c", "d"], w: ["a", "d"] }
];

// ===== FİLM HAQQINDA ƏTRAFLI MƏLUMAT =====
// e: afişa əvəzi emoji, r: rejissor, a: aktyorlar, p: IMDb xalı (təxmini), s: qısa məzmun
const detallar = {
  "Forrest Gump": { e: "🍫", r: "Robert Zemeckis", a: "Tom Hanks, Robin Wright, Gary Sinise, Sally Field", p: 8.8, s: "Sadə, mehriban Forrest həyatı boyu təsadüfən Amerika tarixinin ən böyük hadisələrinin içində olur. Bir skamyada oturub həyatını danışır və hər şeydən çox sevdiyi qızı gözləyir." },
  "The Truman Show": { e: "📺", r: "Peter Weir", a: "Jim Carrey, Laura Linney, Ed Harris", p: 8.2, s: "Truman bilmir ki, bütün həyatı canlı yayımlanan televiziya şousudur. Ətrafındakı hər kəs aktyordur. Bir gün qəribə şeyləri hiss edib həqiqəti axtarmağa başlayır." },
  "Home Alone": { e: "🎄", r: "Chris Columbus", a: "Macaulay Culkin, Joe Pesci, Daniel Stern, Catherine O'Hara", p: 7.7, s: "Səkkiz yaşlı Kevin Milad bayramında ailəsi tərəfindən yanlışlıqla evdə unudulur. İki oğrunu evinə buraxmamaq üçün ağlasığmaz tələlər qurur." },
  "Mrs. Doubtfire": { e: "👵", r: "Chris Columbus", a: "Robin Williams, Sally Field, Pierce Brosnan", p: 7.1, s: "Boşandıqdan sonra uşaqlarını görə bilməyən ata qocalmış dayə qiyafəsinə girib öz evinə işə düzəlir. Komik və kövrək bir ailə hekayəsi." },
  "Titanic": { e: "🚢", r: "James Cameron", a: "Leonardo DiCaprio, Kate Winslet, Billy Zane", p: 7.9, s: "1912-ci ildə Titanik gəmisində yoxsul rəssam Jack ilə varlı ailədən olan Rose bir-birinə aşiq olur. Bu sevgi gəminin faciəsinin fonunda inkişaf edir." },
  "The Shawshank Redemption": { e: "🔓", r: "Frank Darabont", a: "Tim Robbins, Morgan Freeman, Bob Gunton", p: 9.3, s: "Günahsız yerə həbsxanaya düşən bankir Andy illər boyu ümidini itirmir. Dostu Red ilə dostluğu və qaçış planı filmin əsasını təşkil edir." },
  "Good Will Hunting": { e: "🧮", r: "Gus Van Sant", a: "Matt Damon, Robin Williams, Ben Affleck, Minnie Driver", p: 8.3, s: "Dahi riyaziyyatçı olan gənc Will keçmişinin yaralarından qaça bilmir. Psixoloq Sean ona özünü qəbul etməyi və açılmağı öyrədir." },
  "Amélie": { e: "🍓", r: "Jean-Pierre Jeunet", a: "Audrey Tautou, Mathieu Kassovitz", p: 8.3, s: "Parisdə yaşayan xəyalpərəst qız Amélie başqalarının həyatını gizlicə gözəlləşdirməyə qərar verir. Sonra öz xoşbəxtliyini axtarmağa başlayır." },
  "Spirited Away": { e: "🐉", r: "Hayao Miyazaki", a: "Səsləndirənlər: Rumi Hiiragi, Miyu Irino", p: 8.6, s: "Kiçik qız Chihiro valideynləri ilə birlikdə ruhlar aləminə düşür. Valideynlərini xilas etmək üçün orada çalışmalı olur." },
  "Up": { e: "🎈", r: "Pete Docter", a: "Səsləndirənlər: Ed Asner, Jordan Nagai, Christopher Plummer", p: 8.3, s: "Yaşlı kişi Carl evini minlərlə şarla göyə qaldırıb Cənubi Amerikaya yollanır. Gizli sərnişin kimi kiçik bir oğlan da onunla gedir." },
  "Inside Out": { e: "🧠", r: "Pete Docter", a: "Səsləndirənlər: Amy Poehler, Phyllis Smith, Bill Hader", p: 8.1, s: "Kiçik qızın beynində Sevinc, Kədər, Qorxu, Hirs və Nifrət yaşayır. Qız yeni şəhərə köçəndə duyğular çətin sınaqdan keçir." },
  "The Lion King": { e: "🦁", r: "Roger Allers, Rob Minkoff", a: "Səsləndirənlər: Matthew Broderick, Jeremy Irons, James Earl Jones", p: 8.5, s: "Gənc aslan Simba atasının ölümündə özünü günahlandırıb krallığından qaçır. Bir gün qayıdıb taxtını geri almalı olur." },
  "Jumanji": { e: "🎲", r: "Joe Johnston", a: "Robin Williams, Kirsten Dunst, Bonnie Hunt", p: 7.1, s: "İki uşaq qədim stolüstü oyun tapır. Oyunda hər zar atılanda vəhşi heyvanlar və təhlükələr real həyata çıxır." },
  "The Matrix": { e: "💊", r: "Lana və Lilly Wachowski", a: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss", p: 8.7, s: "Proqramçı Neo hər gün yaşadığı dünyanın simulyasiya olduğunu öyrənir. Gerçəkliyi seçib maşınlara qarşı mübarizəyə qoşulur." },
  "Mission: Impossible": { e: "🕵️", r: "Brian De Palma", a: "Tom Cruise, Jon Voight, Emmanuelle Béart", p: 7.1, s: "Casus Ethan Hunt komandasının məhv edilməsindən sonra təqsiri öz üzərinə götürməli olur. Xaini tapmaq üçün tək-tənha mübarizə aparır." },
  "Gladiator": { e: "⚔️", r: "Ridley Scott", a: "Russell Crowe, Joaquin Phoenix, Connie Nielsen", p: 8.5, s: "Xəyanətə uğrayan Roma generalı Maximus qladiator kimi kölə həyatına düşür. Ailəsinin qisasını almaq üçün Kolizeyə qalxır." },
  "Mad Max: Fury Road": { e: "🏜️", r: "George Miller", a: "Tom Hardy, Charlize Theron, Nicholas Hoult", p: 8.1, s: "Səhra qiyamətindən sonrakı dünyada Max və Furiosa zalım hökmdardan qaçır. Film demək olar ki, bütövlükdə yolda qovuşma səhnələrindən ibarətdir." },
  "John Wick": { e: "🐶", r: "Chad Stahelski", a: "Keanu Reeves, Michael Nyqvist, Alfie Allen", p: 7.4, s: "Keçmiş qatil John həyat yoldaşının ölümündən sonra yeganə yadigarı olan itini itirir. Qisas almaq üçün cinayət dünyasına qayıdır." },
  "The Notebook": { e: "💌", r: "Nick Cassavetes", a: "Ryan Gosling, Rachel McAdams, James Garner, Gena Rowlands", p: 7.8, s: "Yaşlı kişi dəftərdən xəstəxanadakı qadına yoxsul oğlanla varlı qızın böyük sevgi hekayəsini oxuyur." },
  "Before Sunrise": { e: "🚂", r: "Richard Linklater", a: "Ethan Hawke, Julie Delpy", p: 8.1, s: "Qatarda tanış olan iki gənc Vyanada bir gecə boyu gəzir və söhbət edir. Səhər açılanda ayrılmalı olacaqlarını bilirlər." },
  "La La Land": { e: "🎹", r: "Damien Chazelle", a: "Ryan Gosling, Emma Stone, John Legend", p: 8.0, s: "Los-Ancelesdə aktrisa olmaq istəyən Mia ilə caz pianoçusu Sebastian bir-birinə aşiq olur. Xəyalları sevgilərinə sınaq olur." },
  "The Intouchables": { e: "🦽", r: "Olivier Nakache, Éric Toledano", a: "François Cluzet, Omar Sy", p: 8.5, s: "Fəlic qalmış varlı kişi bələdçi kimi gənc işsiz oğlanı işə götürür. Fərqli dünyalardan olan iki nəfər əsl dost olur." },
  "Paddington 2": { e: "🐻", r: "Paul King", a: "Hugh Grant, Ben Whishaw (səs), Hugh Bonneville, Sally Hawkins", p: 7.8, s: "Ayı Paddington xalasının ad günü üçün qədim bir kitab almaq istəyir. Kitab oğurlanır və o, günahsız yerə həbsxanaya düşür." },
  "Interstellar": { e: "🚀", r: "Christopher Nolan", a: "Matthew McConaughey, Anne Hathaway, Jessica Chastain", p: 8.7, s: "Yer üzündə yaşam şəraiti pisləşir. Keçmiş pilot Cooper bəşəriyyətə yeni yurd tapmaq üçün qara dəliyin yanından keçən missiyaya yollanır." },
  "Life Is Beautiful": { e: "🌹", r: "Roberto Benigni", a: "Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini", p: 8.6, s: "Yəhudi ata müharibə dövründə həbs düşərgəsində oğluna hər şeyin oyun olduğunu deyir. Dəhşətdən onu qorumaq üçün xəyal qurur." },
  "Ratatouille": { e: "🐭", r: "Brad Bird", a: "Səsləndirənlər: Patton Oswalt, Lou Romano, Ian Holm", p: 8.1, s: "Parisdə yaşayan siçan Rémy aşpaz olmaq arzusundadır. Restoranın gənc işçisi ilə gizli tandem qurub məşhur mətbəxin sirrinə çevrilir." },
  "Finding Nemo": { e: "🐠", r: "Andrew Stanton", a: "Səsləndirənlər: Albert Brooks, Ellen DeGeneres, Alexander Gould", p: 8.2, s: "Balıq Marlin oğlu Nemonu axtarmaq üçün okeanı keçir. Yolda yaddaşı zəif Dory ilə tanış olur." },
  "Knives Out": { e: "🔍", r: "Rian Johnson", a: "Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis", p: 7.9, s: "Məşhur yazıçı ad günündən sonra ölü tapılır. Detektiv Benoit Blanc ailənin hər üzvünü şübhə altında saxlayır." },
  "Notting Hill": { e: "📚", r: "Roger Michell", a: "Hugh Grant, Julia Roberts", p: 7.2, s: "Londonda kitab mağazası sahibi dünya məşhuru olan aktrisa ilə tanış olur. Onların sevgisi iki fərqli həyat tərzinin sınağına çıxır." },
  "The Pursuit of Happyness": { e: "🏃", r: "Gabriele Muccino", a: "Will Smith, Jaden Smith, Thandiwe Newton", p: 8.0, s: "Evsiz qalan ata oğlu ilə birlikdə küçələrdə yaşayır. Birja brokeri olmaq üçün çətin təcrübə proqramından keçir." },
  "Eternal Sunshine of the Spotless Mind": { e: "🌌", r: "Michel Gondry", a: "Jim Carrey, Kate Winslet, Kirsten Dunst", p: 8.3, s: "Ayrılıqdan sonra qız sevgilisi haqqında xatirələrini sildirir. Oğlan da eyni şeyi etməyə qərar verir, amma bu, hər şeyi dəyişir." },
  "Little Miss Sunshine": { e: "🚐", r: "Jonathan Dayton, Valerie Faris", a: "Abigail Breslin, Steve Carell, Toni Collette, Greg Kinnear", p: 7.8, s: "Qəribə ailə kiçik qızı gözəllik müsabiqəsinə çatdırmaq üçün köhnə mikroavtobusla səfərə çıxır. Yolda hər kəs özünü kəşf edir." },
  "Zootopia": { e: "🐰", r: "Byron Howard, Rich Moore", a: "Səsləndirənlər: Ginnifer Goodwin, Jason Bateman, Idris Elba", p: 8.0, s: "Dovşan Judy polis olmaq istəyir. Şəhərdəki itkin heyvanların sirrini tülkü Nick ilə birlikdə açmağa çalışır." }
};

// ===== 2) SUALLAR: [yazı, kod] cütləri =====
const suallar = [
  {
    acar: "mood",
    sual: "Bu gün özünü necə hiss edirsən?",
    variantlar: [["Kədərliyəm 😔", "s"], ["Narahatam 😟", "n"], ["Darıxıram 🥱", "b"], ["Əsəbiyəm 😤", "a"], ["Yorğunam 😴", "y"], ["Xoşbəxtəm 😊", "h"]]
  },
  {
    acar: "istek",
    sual: "Sənə indi nə lazımdır?",
    variantlar: [["Məni sevindir 😄", "c"], ["Məni sakitləşdir 🌿", "k"], ["Diqqətimi yayındır 🎯", "d"], ["Qoy ağlayım 😢", "y"]]
  },
  {
    acar: "janr",
    sual: "Hansı növ filmləri sevirsən?",
    variantlar: [["Romantik 💕", "ro"], ["Aksiyon 💥", "ak"], ["Komediya 😂", "ko"], ["Dram 🎭", "dr"], ["Animasiya 🧸", "an"], ["Macəra 🗺️", "ma"], ["Elmi-fantastika 🚀", "ef"], ["Triller 🔪", "tr"]]
  },
  {
    acar: "dovr",
    sual: "Hansı dövrün filmləri?",
    variantlar: [["90-cı illər 📼", "90"], ["2000-ci illər 💿", "00"], ["2010-dan sonra 📱", "10"], ["Fərq etmir 🎲", "x"]]
  },
  {
    acar: "uzunluq",
    sual: "Filmin uzunluğu necə olsun?",
    variantlar: [["Qısa (110 dəqiqəyə qədər) ⏱️", "q"], ["Uzun olsa da olar 🍿", "x"]]
  },
  {
    acar: "kiminle",
    sual: "Kiminlə izləyəcəksən?",
    variantlar: [["Tək 🧍", "t"], ["Dostlarla 👯", "d"], ["Sevdiyimlə 💞", "s"], ["Ailə ilə 👨‍👩‍👧", "a"]]
  }
];

// Nəticədə neçə film göstərilsin (sonra 10 edəcəyik)
const NETICE_SAYI = 4;

// ===== 3) DƏYİŞƏNLƏR =====
let cari = 0;
const cavablar = {};

// ===== 4) HTML ELEMENTLƏRİ =====
const sualBolmesi = document.getElementById("sual-bolmesi");
const sualBasligi = document.getElementById("sual-basligi");
const variantlarQutusu = document.getElementById("variantlar");
const geriDuymesi = document.getElementById("geri-duymesi");
const neticeBolmesi = document.getElementById("netice-bolmesi");
const filmlerQutusu = document.getElementById("filmler");
const yenidenDuymesi = document.getElementById("yeniden-duymesi");
const zolaqDolu = document.getElementById("zolaq-dolu");
const novbeYazi = document.getElementById("novbe-yazi");
const stikerlerQutusu = document.getElementById("stikerler");

// ===== 5) ARXA FON STİKERLƏRİ =====
const stikerEmojileri = ["🍿", "🎬", "🕶️", "🎟️", "🎥", "⭐", "📽️", "🥤", "🎞️", "🍫", "👓", "🎭"];
const stikerRengleri = ["#ff2bd6", "#22e6ff", "#9a6bff", "#ffe14d"];

function stikerYarat() {
  const say = window.innerWidth < 600 ? 14 : 24;

  for (let i = 0; i < say; i++) {
    const s = document.createElement("span");
    s.className = "stiker";
    s.textContent = stikerEmojileri[i % stikerEmojileri.length];

    s.style.setProperty("--x", Math.random() * 94 + "%");
    s.style.setProperty("--y", Math.random() * 92 + "%");
    s.style.setProperty("--olcu", 22 + Math.random() * 30 + "px");
    s.style.setProperty("--muddet", 4 + Math.random() * 5 + "s");
    s.style.setProperty("--gecikme", -Math.random() * 6 + "s");
    s.style.setProperty("--bucaq", 6 + Math.random() * 18 + "deg");
    s.style.setProperty("--parilti", stikerRengleri[i % stikerRengleri.length]);

    stikerlerQutusu.appendChild(s);
  }
}

// ===== 6) SUALI GÖSTƏR =====
function sualGoster() {
  if (cari >= suallar.length) {
    neticeGoster();
    return;
  }

  const sual = suallar[cari];
  sualBasligi.textContent = sual.sual;
  variantlarQutusu.innerHTML = "";

  // İrəliləyiş zolağı
  novbeYazi.textContent = (cari + 1) + " / " + suallar.length;
  zolaqDolu.style.width = ((cari + 1) / suallar.length) * 100 + "%";

  sual.variantlar.forEach(function (variant) {
    const yazi = variant[0];
    const kod = variant[1];

    const duyme = document.createElement("button");
    duyme.className = "variant";
    duyme.textContent = yazi;

    duyme.addEventListener("click", function () {
      cavablar[sual.acar] = kod;
      cari++;
      sualGoster();
    });

    variantlarQutusu.appendChild(duyme);
  });

  geriDuymesi.style.display = cari > 0 ? "inline-block" : "none";
}

// ===== 7) XAL HESABLAMA =====
function xalHesabla(film) {
  let xal = 0;
  const sebebler = [];

  // İstək uyğundursa +6
  if (film.i.includes(cavablar.istek)) {
    xal += 6;
    sebebler.push("“" + istekAdlari[cavablar.istek] + "” istəyinə uyğundur");
  }

  // Janr uyğundursa +4
  if (film.g.includes(cavablar.janr)) {
    xal += 4;
    sebebler.push("sevdiyin janr: " + janrAdlari[cavablar.janr]);
  }

  // Dövr uyğundursa +3
  let dovr = "10";
  if (film.y < 2000) dovr = "90";
  else if (film.y < 2010) dovr = "00";

  if (cavablar.dovr !== "x" && dovr === cavablar.dovr) {
    xal += 3;
    sebebler.push("seçdiyin dövrün filmidir (" + film.y + ")");
  }

  // Uzunluq
  if (cavablar.uzunluq === "q") {
    if (film.m <= 110) {
      xal += 2;
      sebebler.push("qısadır (" + film.m + " dəq)");
    } else {
      xal -= 3;
    }
  }

  // Kiminlə
  if (film.w.includes(cavablar.kiminle)) {
    xal += 2;
    sebebler.push("seçdiyin şəkildə izləmək üçün uyğundur");
  }

  // Kiçik təsadüfilik ki, hər dəfə eyni nəticə çıxmasın
  xal += Math.random() * 0.5;

  return { film: film, xal: xal, sebebler: sebebler };
}

// ===== 8) NƏTİCƏNİ GÖSTƏR =====
function neticeGoster() {
  sualBolmesi.classList.add("gizli");
  neticeBolmesi.classList.remove("gizli");
  filmlerQutusu.innerHTML = "";

  const siralanmis = filmler
    .map(xalHesabla)
    .sort(function (a, b) { return b.xal - a.xal; })
    .slice(0, NETICE_SAYI);

  siralanmis.forEach(function (n, index) {
    const kart = document.createElement("div");
    kart.className = "film-kart";
    kart.style.setProperty("--sira", index); // kartlar ardıcıl gəlsin

    const janrlar = n.film.g.map(function (k) { return janrAdlari[k]; }).join(", ");
    const sebeb = n.sebebler.length ? n.sebebler.join(" · ") + "." : "Ümumi olaraq yaxşı seçimdir.";

    kart.innerHTML =
      '<div class="film-nomre">' + (index + 1) + "</div>" +
      '<div class="film-mətn">' +
        "<h3>" + n.film.t + "</h3>" +
        '<div class="film-melumat">' + n.film.y + " · " + n.film.m + " dəq · " + janrlar + "</div>" +
        '<div class="film-sebeb">' + sebeb + "</div>" +
      "</div>";

    // Karta klik edəndə film haqqında məlumat açılsın
    kart.tabIndex = 0;
    kart.setAttribute("role", "button");
    kart.addEventListener("click", function () { modalAc(n.film); });
    kart.addEventListener("keydown", function (e) {
      if (e.key === "Enter") modalAc(n.film);
    });

    filmlerQutusu.appendChild(kart);
  });
}

// ===== MODAL PƏNCƏRƏ (film haqqında məlumat) =====
const modal = document.getElementById("modal");
const modalIci = document.getElementById("modal-ici");

function modalAc(film) {
  const d = detallar[film.t] || { e: "🎬", r: "—", a: "—", p: 0, s: "Məlumat tezliklə əlavə olunacaq." };
  const janrlar = film.g.map(function (k) { return janrAdlari[k]; }).join(" · ");
  const saat = Math.floor(film.m / 60) + " saat " + (film.m % 60) + " dəq";
  const dolu = Math.round(d.p / 2);
  let ulduzlar = "";
  for (let i = 0; i < 5; i++) ulduzlar += i < dolu ? "★" : "☆";

  modalIci.innerHTML =
    '<div class="modal-afisa">' + d.e + "</div>" +
    '<div class="modal-yazi">' +
      "<h2>" + film.t + "</h2>" +
      '<div class="modal-meta">' + film.y + " · " + film.m + " dəq (" + saat + ") · " + janrlar + "</div>" +
      '<div class="modal-xal"><span class="xal-reqem">' + d.p.toFixed(1) + '</span> / 10 <span class="ulduzlar">' + ulduzlar + '</span><small>IMDb (təxmini)</small></div>' +
      '<p class="modal-s">' + d.s + "</p>" +
      '<dl class="modal-siyahi">' +
        "<dt>🎬 Rejissor</dt><dd>" + d.r + "</dd>" +
        "<dt>🎭 Aktyorlar</dt><dd>" + d.a + "</dd>" +
        "<dt>📅 İl</dt><dd>" + film.y + "</dd>" +
        "<dt>⏱️ Uzunluq</dt><dd>" + film.m + " dəqiqə</dd>" +
      "</dl>" +
    "</div>";

  modal.classList.remove("gizli");
  document.body.style.overflow = "hidden";
}

function modalBagla() {
  modal.classList.add("gizli");
  document.body.style.overflow = "";
}

document.getElementById("modal-bagla").addEventListener("click", modalBagla);
modal.addEventListener("click", function (e) {
  if (e.target === modal) modalBagla(); // kənara klik
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") modalBagla();
});

// ===== 9) DÜYMƏLƏR =====
geriDuymesi.addEventListener("click", function () {
  cari--;
  sualGoster();
});

yenidenDuymesi.addEventListener("click", function () {
  cari = 0;
  for (const acar in cavablar) {
    delete cavablar[acar];
  }
  neticeBolmesi.classList.add("gizli");
  sualBolmesi.classList.remove("gizli");
  sualGoster();
});

// ===== 10) BAŞLAT =====
stikerYarat();
sualGoster();
