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

    filmlerQutusu.appendChild(kart);
  });
}

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
