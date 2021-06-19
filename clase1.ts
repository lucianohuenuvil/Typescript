console.log("Buenos Días");

let estado: boolean = true;
let nivel: number = 50;
let nombre: string = "Pedro";
let apellido: string = "Perez";

console.log(estado);
console.log("El nivel es: "+nivel);
console.log("Buenos días "+nombre+ " " +apellido );

console.log(`Hola: ${nombre} ${apellido}`)

for(let i=0; i<10; i++)
{
    //console.log(i);
}

//Definiendo arreglos
let arreglo: number[] = [1,2,3,4,5,6,7];
for(let i=0; i<arreglo.length; i++)
{
    console.log(arreglo[i]);
}

let arreglo2: string[] = ["Pedro","Juan","Diego","María"];
for(let i=0; i<arreglo2.length; i++)
{
    console.log(arreglo2[i]);
}

//for each
for(let aux of arreglo2){
    console.log(aux)
}

//Condiciones
var num = 10;
if(num%2==0){
    console.log("Número par");
}
else{
    console.log("Número impar");
}


// Def arreglos
var lista:number[]=new Array(4)
for(var i=0; i<lista.length; i++){
    lista[i]=i*3
    console.log(lista[i])
}


var nombres:string[]=new Array("Carolina","Juan","María","Miguel")

let numeros = [1,2,3,4];

numeros.forEach(function (value){
    console.log(value);
});

var persona = {
    nombre:"Pedro",
    apellido:"Fuentes",
    hablar: function(){}  
}

persona.hablar = function(){
    console.log("Buenos días "+persona.nombre)
}

persona.hablar()





class Persona {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido
        this.edad = edad
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre}, apellido: ${this.apellido}, edad: ${this.edad}`);
    }
}

let perso1: Persona;
perso1 = new Persona('Carolina','Torres',40);
perso1.imprimir();
