interface Figura {
    CalculoPerimetro():void;
    CalculoArea():void;
}


class Circulo implements Figura{
    protected radio: number;
    protected pi = 3.14;


    constructor(radio:number ){
        this.radio = radio;

    }

    CalculoPerimetro(){
        let calculo = 2*this.pi*this.radio;
        console.log(`Perimetro: ${calculo}`);
    }

    CalculoArea(){
        let calculo = this.radio*this.radio*this.pi
        console.log(`Área: ${calculo}`);
    }
}


class rectangulo implements Figura{
    protected largo: number;
    protected ancho: number;


    constructor(largo:number,ancho:number  ){
        this.largo = largo;
        this.ancho = ancho;

    }

    CalculoPerimetro(){
        let perimetroLargo = this.largo*2;
        let perimetroAncho = this.ancho*2;
        let perimetro = perimetroAncho + perimetroLargo;
        console.log(`Perimetro: ${perimetro}`);
    }

    CalculoArea(){
        let calculo = this.largo*this.ancho;
        console.log(`Area: ${calculo}`);
    }
}


class triangulo implements Figura{
    protected altura: number;
    protected base: number;


    constructor(altura:number, base:number ){
        this.altura = altura;
        this.base = base;

    }

    CalculoPerimetro(){
        let lados = this.base*3;
        console.log(`Perimetro: ${lados}`);
    }

    CalculoArea(){
        let calculo = (this.base*this.altura)/2;
        console.log(`Area: ${calculo}`);
    }
}



let Figura1: Circulo;
Figura1 = new Circulo(5);
Figura1.CalculoArea();
Figura1.CalculoPerimetro();


let Figura2: triangulo;
Figura2 = new triangulo(10,2);
Figura2.CalculoArea()
Figura2.CalculoPerimetro()


let Figura3: rectangulo;
Figura3 = new rectangulo(10,2);
Figura3.CalculoArea();
Figura3.CalculoPerimetro();
