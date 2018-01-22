var sentence = prompt('Ingrese el número de su tarjeta de crédito');

var isValidCard = function(sentence) {
  // transformar la variable de entrada (sentence) en un array de números y darlo vuelta
  var array = Array.from(sentence);
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    // transformar el array compuesto de strings a numbers
    var element = parseInt(array[i]);
    // condición para que el usuario no ingrese espacios o letras
    if (isNaN(element) === false) {
      newArray.push(element);
    } else {
      return alert('Por favor ingrese un número válido');
    }
  }
  // invertir el orden del array de numbers
  newArray.reverse();
  for (var i = 1 ; i < newArray.length; i = i + 2) {
    // ubicar los números en posición par y multiplicarlos por 2
    var doubleElement = newArray[i] * 2;
    if ((doubleElement) >= 10) {
      // sumar los digitos del resultado de la multiplicacion de los números en ubicacion par por 2 y cambiarlos en el array inverso
      newArray[i] = parseInt(doubleElement / 10) + (doubleElement % 10);
    } else {
      newArray[i] = doubleElement;
    }
  }
  var sum = 0;
  for (var i = 0; i < newArray.length; i++) {
    // sumar todos los numeros del newArray
    sum = sum + newArray[i];
  }
  // verificar que el residuo de 10 de la suma de todos los números es 0
  if (sum % 10 === 0) {
    return alert('Tarjeta Válida');
  } else {
    return alert('Tarjeta inválida');
  }
};
// Llamar a la función
isValidCard(sentence);
