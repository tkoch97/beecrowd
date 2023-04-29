const n = 3.14159;
const raio = 100.64;

function calcDaArea (n, raio) {
  const area = n * Math.pow(raio,2); //math.pow serve para elevar um número a potência desejada, no nosso caso, ao quadrado.
  const result = area.toFixed(4)
  return result;
}

console.log(calcDaArea(n, raio))