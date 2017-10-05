# Tarjeta-de-credito
Usar un prompt para pedir al usuario el número de su tarjeta de crédito, con esto tendremos un string de entrada

Crear la funcion isValidCard (string de entrada)
Conviertir el string a array de strings para poder manipular cada caracter 
Recorrer el array de strings desde la posición 0, hasta el largo del array y cambiar todos sus elementos de string a número, siempre y cuando no haya un vacío o letras
Guardar los elementos en una nueva variable que sea un array vacío
Si existe algín vacío o letras, retornar error y detener la función
Si la función continua, recorrer el nuevo arreglo de números desde la posción 1, hasta el largo del array pero avanzando de 2 en 2 para acceder a los elementos en la posición par
Crear una variable que corresponda a cada elemento en posición par multiplicado por 2 
Comprobar si la variable anterior es mayor o igual a 10, si esto es verdadero sumar los 2 números del resultado de la multiplicación y reemplazarlos en el array de números.
Recorrer el array de números desde la posición 0, hasta el largo del array y avanzando de 1 en 1 para sumar todos los elementos del array de números
Si el módulo de 10 de la suma anterior es igual a 0, el número de la tarjeta es válida. Si no, el número de la tarjeta es inválida.

Llamar a la funcion para que se ejecute
