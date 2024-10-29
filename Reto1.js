const mensajeCifrado =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^{()*~¡[$[{()¡[()?=[]`¬]()¿()[{;+[$__~()`~]=]+~";

const diccionario = {
  "?": "a",
  "[": "e",
  "~": "o",
  "+": "u",
  "¬": "ó",
  // "\": "i",
  "()": " ",
  "^": "m",
  "}": "q",
  "`": "c",
  "*": "p",
  "/": "l",
  "%": "b",
  "]": "n",
  "¿": "y",
  "{": "s",
  "=": "t",
  $: "r",
  "!": "j",
  "¡": "d",
  "#": "v",
  ";": "f",
  _: "z",
  "-": "h",
};
let mensajeDesencriptado = mensajeCifrado;
for (let simbolo in diccionario) {
  const letra = diccionario[simbolo];
  mensajeDesencriptado = mensajeDesencriptado.split(simbolo).join(letra);
  console.log(`Reemplazando "${simbolo}" con "${letra}"`);
}
console.log("Mensaje desencriptado:", mensajeDesencriptado);
