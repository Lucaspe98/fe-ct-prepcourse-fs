/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   let numeroAlCuadrado = Math.pow(num,2);
   return numeroAlCuadrado;
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   let numeroAlCubo = Math.pow(num, 3);
   return numeroAlCubo;
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   let numero = Math.pow(num, exponent);
   return numero;
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   let redondo = Math.round(num);
   return redondo;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   let arriba = Math.ceil(num);
   return arriba;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   let ramdom = Math.random();
   return ramdom;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
