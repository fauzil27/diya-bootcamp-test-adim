let nasabah = [2, 3, 3, 7, 1, 2, 2, 1, 5, 2];
let kasir1 = nasabah[0];
let kasir2 = nasabah[1];
let kasir3 = nasabah[2];
for (let i = 3; i < nasabah.length; i++) {
  if (kasir1 <= kasir2 && kasir1 <= kasir3) {
    kasir1 += nasabah[i];
  } else if (kasir2 <= kasir1 && kasir2 <= kasir3) {
    kasir2 += nasabah[i];
  } else if (kasir3 <= kasir1 && kasir3 <= kasir2) {
    kasir3 += nasabah[i];
  }
}
let kasirterlama = kasir1;
if (kasirterlama < kasir2) {
  kasirterlama = kasir2;
} else if (kasirterlama < kasir3) {
  kasirterlama = kasir3;
}
console.log(kasirterlama);
