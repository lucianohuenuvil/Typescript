console.log("Buenos Días");
var estado = true;
var nivel = 50;
var nombre = "Pedro";
var apellido = "Perez";
console.log(estado);
console.log("El nivel es: " + nivel);
console.log("Buenos días " + nombre + " " + apellido);
console.log("Hola: " + nombre + " " + apellido);
for (var i_1 = 0; i_1 < 10; i_1++) {
    //console.log(i);
}
//Definiendo arreglos
var arreglo = [1, 2, 3, 4, 5, 6, 7];
for (var i_2 = 0; i_2 < arreglo.length; i_2++) {
    console.log(arreglo[i_2]);
}
var arreglo2 = ["Pedro", "Juan", "Diego", "María"];
for (var i_3 = 0; i_3 < arreglo2.length; i_3++) {
    console.log(arreglo2[i_3]);
}
//for each
for (var _i = 0, arreglo2_1 = arreglo2; _i < arreglo2_1.length; _i++) {
    var aux = arreglo2_1[_i];
    console.log(aux);
}
//Condiciones
var num = 10;
if (num % 2 == 0) {
    console.log("Número par");
}
else {
    console.log("Número impar");
}
// Def arreglos
var lista = new Array(4);
for (var i = 0; i < lista.length; i++) {
    lista[i] = i * 3;
    console.log(lista[i]);
}
var nombres = new Array("Carolina", "Juan", "María", "Miguel");
var numeros = [1, 2, 3, 4];
numeros.forEach(function (value) {
    console.log(value);
});
var persona = {
    nombre: "Pedro",
    apellido: "Fuentes",
    hablar: function () { }
};
persona.hablar = function () {
    console.log("Buenos días " + persona.nombre);
};
persona.hablar();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: " + this.nombre + ", apellido: " + this.apellido + ", edad: " + this.edad);
    };
    return Persona;
}());
var perso1;
perso1 = new Persona('Carolina', 'Torres', 40);
perso1.imprimir();
