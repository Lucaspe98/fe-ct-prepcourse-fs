/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arregloPadre = [];
   for (let elemento in objeto) {
      let subArreglo = [];
      subArreglo.push(elemento);
      subArreglo.push(objeto[elemento]);
      arregloPadre.push(subArreglo);
   }
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   function contarLetrasRepetidas(texto) {
      let letraContador = {};
      
      for (let i = 0; i < texto.length; i++) {
         let letra = texto[i];
         if (letraContador[letra]) {
            letraContador[letra]++;
         } else {
            letraContador[letra] = 1;
         }
      }
   
   // Ordenar el objeto por las claves (letras) en orden alfabético
      let letrasOrdenadas = Object.keys(letraContador).sort();
   
   // Crear un nuevo objeto con las letras ordenadas y sus contadores correspondientes
      let resultado = {};
      for (let letra of letrasOrdenadas) {
         resultado[letra] = letraContador[letra];
      }
      return resultado;
   }
   const resultado = contarLetrasRepetidas(string);
   return resultado;
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculaString = [];
   let minusculaString = [];
   let stringArray = string.split('');
   for (let i = 0; i < string.length; i++) {
      if(string[i] === string[i].toUpperCase()) {
         mayusculaString.push(string[i]);
      }else{
         minusculaString.push(string[i]);
      }
   }
   return mayusculaString.join('') + minusculaString.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   // con esta funcion damos vuelta cada palabra 
   let inverso = function(string){
      let stringInverso = [];
      string.split("");
      for(let i = string.length -1 ; i >= 0 ; i--){
         stringInverso.push(string[i]);
      }
      return stringInverso.join("");
   };

   // con esta funcion recorremos cada palabra de la frase 
   let stringEspejo = [];
   let fraseArray = frase.split(' ');
   for (let i = 0; i < fraseArray.length; i++) {
      fraseArray[i] = inverso(fraseArray[i]);
      stringEspejo.push(fraseArray[i]);
   }
   return stringEspejo.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let espejo = function(num){
      let stringInverso = [];
      let string = num + '';
      string.split("");
      for(let i = string.length -1 ; i >= 0 ; i--){
         stringInverso.push(string[i]);
      }
      return parseFloat(stringInverso.join(""));
      
   };

   if (numero === espejo(numero)) {
      return "Es capicua";
   }else{
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringArray = string.split('');
   for (let i = 0; i < stringArray.length; i++){
      if(stringArray[i] === 'a'){
         stringArray.splice(i,1);
      };
      if(stringArray[i] === 'b'){
         stringArray.splice(i,1);
      };
      if(stringArray[i] === 'c'){
         stringArray.splice(i,1);
      };
   }
   return stringArray.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   function ordenarPorLongitud(array) {
      return array.sort((a, b) => a.length - b.length);
  }
  let arregloOrdenado = ordenarPorLongitud(arrayOfStrings);
  return arregloOrdenado;
}

      
   

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   function elementosEnComun(arreglo1, arreglo2) {
      return arreglo1.filter(elemento => arreglo2.includes(elemento));
  }
  let arregloEnComun = elementosEnComun(array1, array2);
  return arregloEnComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
