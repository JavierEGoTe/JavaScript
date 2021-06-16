//alert("variables");

var variable1 = 'soy la variable 1';
console.log(variable1);
variable1 = 1212;
console.log(variable1);

//let variable2 = 'soy la variable 2';
//let solo vive dentro de los corchetes donde se declaro
const variable2 = 'Variable 2';
console.log(variable2);
/*variable2 = 10;
console.log(variable2);*/

let nueva_variable2 = 'Mi nueva variable';
console.log(nueva_variable2);

function varTest(){
    var x = 31;
    if (true){
        var x = 71;
        console.log(x);
    }
    console.log(x);
}

//varTest();

function letTest(){
    let x = 31;
    if (true){
        let x = 71;
        console.log(x);
    }
    console.log(x);
}

const nuevaFuncion = () => {
    var x = 31;
    if (true){
        var x = 71;
        console.log(x);
    }
    console.log(x);
}
nuevaFuncion();
//letTest();

const nombre = 'Javier Esteban';
const apellidos = 'Gómez Tejeda';

console.log('Hola, mi nombre es ' + nombre + ' mis apellidos son ' + apellidos);

console.log(`Hola mi nombre es ${nombre} y mis apellidos son ${apellidos}`);

const arreglo = [1,2,3,4,5];
console.log(arreglo);