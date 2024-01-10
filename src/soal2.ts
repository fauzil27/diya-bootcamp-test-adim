let noTlp = "00-44 48 5555 8361";
let getnumber = "";
let dash = 3;
for (let i = 0; i < noTlp.length; i++) {
  if (noTlp[i] !== " " && noTlp[i] !== "-") {
    getnumber += noTlp[i];
  }
  if (getnumber.length === dash) {
    getnumber += "-";
    dash += 4;
  }
}
let get = "";
if (getnumber[getnumber.length - 1] === "-") {
  get += getnumber.slice(0, getnumber.length - 2);
} else {
  get += getnumber;
}
console.log(get);
