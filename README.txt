string de entrada = prompt("ingrese el n�mero de la tarjeta de cr�dito");

funcion isValidCard(string de entrada)
array = Convierte string a array de strings
newArray = arreglo vac�o
Recorrer array desde i=0; i= array.length; i++ para cambiar array[i] de string a numero

, siempre y array[i] no sea un vac�o o letras. 
Guardar array [i] en newArray.
Si el array[i] est� vac�o o contine letras, retorna error y la funci�n se detiene.
Si la funci�n continua, recorrer newArray desde i=1; i= newArray.length; i = i+2 para acceder a newArray[i] en la posici�n par.
newArray [i] * 2 = dobleElemento 
Comprobar si dobleElemento >= 10, si esto es verdadero sumar los 2 n�meros del resultado de la multiplicaci�n y guardarlos en newArray[i].



Recorrer newArray desde i=0, i=newArray.length, i++ 
Suma = suma de todos los newArray[i]
Si suma % 10 === 0
, el n�mero de la tarjeta es v�lida. Si no, el n�mero de la tarjeta es inv�lida.



Llamar a la funcion
.