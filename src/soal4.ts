let masukan = "23 maret 2000";
let bulan = [
  "jan",
  "feb",
  "mar",
  "apr",
  "mei",
  "jun",
  "jul",
  "agu",
  "sep",
  "okt",
  "nov",
  "des",
];
let tampung = "";
for (let i = 0; i < masukan.length; i++) {
  if (masukan[i] !== " ") {
    tampung += masukan[i];
  }
}
console.log(tampung);
