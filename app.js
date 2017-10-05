var sentence = prompt('Ingrese el número de su tarjeta de crédito');

var isValidCard = function (sentence) {    //transformar la variable de entrada (sentence) en un array de numeros y darlo vuelta
  var array = Array.from(sentence); //transformar la variable de entrada "sentence" en un array
  var newArray = [];
  for (var i = 0; i < array.length; i++){
    var element = parseInt(array[i]);   //transformar el array compuesto de strings a numbers
    if (isNaN(element) === false) {        //condicion para que el usuario no ingrese espacios o letras
      newArray.push(element);
    } else {
      return alert ("Por favor ingrese un número válido");
      }
    }
    newArray.reverse();
    console.log(newArray)                    //invertir el orden del array de numbers
    for (var i = 1 ; i <newArray.length; i=i+2){  //ubicar los numeros en posición par y multiplicarlos por 2
      var doubleElement = newArray[i]*2;
      if ((doubleElement) >=10){
        newArray[i] = parseInt(doubleElement/10) + (doubleElement%10);   //sumar los digitos del resultado de la multiplicacion de los numeros en ubicacion par por 2 y cambiarlos en el array inverso
      }
      console.log(newArray[i])
    }
    var sum = 0;
    for (var i = 0; i < newArray.length; i++){   //sumar todos los numeros del newArray
      sum = sum + newArray[i];
    }
    console.log(sum)
    if (sum % 10 === 0){                       //verificar que el residuo de 10 de la suma de todos los números es 0
      return alert ("Tarjeta Válida");
    }
    else {
      return alert ("Tarjeta inválida")
    }
  }
  isValidCard(sentence);         //Llamar a la funcion
