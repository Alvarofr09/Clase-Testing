
// 1
function esPrimo(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  
// 2
function contarCaracteres(cadena) {
    return cadena.length;
  }

// 3
function reversaCadena(cadena) {
    return cadena.split('').reverse().join('');
  }

// 4
function filtrarPares(arreglo) {
    return arreglo.filter(num => num % 2 === 0);
  }

// 5
function contieneSubstring(cadena, substring) {
    return cadena.includes(substring);
  }


// 6
function longitudCadena(cadena) {
    return cadena.length;
  }
  

// 7
function division(a, b) {
    return a / b;
  }

// 8
function esMayorQueCien(num) {
    return num;
  }

  
// 9
function listaFrutas() {
    return ['manzana', 'banana', 'naranja'];
  }

// 10
function obtenerUsuarios() {
    return [{nombre: "Ana"}, {nombre: "Luis"}];
  }
  

// 11
function getConfiguracion() {
    return {modo: "activo", volumen: 11};
  }

  module.exports = { esPrimo, contarCaracteres, reversaCadena, filtrarPares, contieneSubstring, longitudCadena,  division, esMayorQueCien, listaFrutas, obtenerUsuarios, getConfiguracion };