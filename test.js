const a = "hola";
let b = "";
const l = [];
for (let i = 0; i < a.length; ++i) {
  l.push(a.charCodeAt(i) + 65);
}

console.log(l);
for (let i = 0; i < l.length; ++i) {
  b += String.fromCharCode(l[i] - 65);
}
console.log(b);
