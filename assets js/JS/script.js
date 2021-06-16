var dato1 = 24; // se declaran las varibles
var dato2 = "Holaaaa";
var dato3 = "false";
var dato4 = "5.2345678996534567893456789988756789878687855757854564"; //para numeros muy randes se hace lo de la linea 19
var dato5 = true;
var dato6 = null;
var dato7 = "Hoy es un lindo dia";
var dato8 = 829;
var dato9 = "null";
var dato10 = false;

//SE imprimen en consola para que nos muestre el tipo de dato "typeof"
console.log('dato1', typeof(dato1));
console.log('dato2', typeof(dato2));
console.log('dato3', typeof(dato3));
//console.log('dato4', typeof(parseInt(dato4)), parsefloat(dato4)); parsefloat par numeros decimal y paseInt para numeros enteros
console.log(typeof(dato4), 'Parsefloat Decimales:', parseFloat(dato4).toPrecision(30));
console.log('dato5', typeof(dato5));
console.log('dato6', typeof(dato6));
console.log('dato7', typeof(dato7));
console.log('dato8', typeof(dato8));
console.log('dato9', typeof(dato9));
console.log('dato10', typeof(dato10));
console.log(typeof(dato11));//En consola aparece como undefined pues es una variable que no existe

//console.log(typeof(dato1));asi se escribe al inicio y luego de la sig manera
//console.log('dato1',typeof(dato));Asi lo escribimos para identificar los datos

var suma = parseInt(dato4) + dato8;
console.log('suma: ', suma);
