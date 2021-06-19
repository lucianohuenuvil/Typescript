var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.pi = 3.14;
        this.radio = radio;
    }
    Circulo.prototype.CalculoPerimetro = function () {
        var calculo = 2 * this.pi * this.radio;
        console.log("Perimetro: " + calculo);
    };
    Circulo.prototype.CalculoArea = function () {
        var calculo = this.radio * this.radio * this.pi;
        console.log("\u00C1rea: " + calculo);
    };
    return Circulo;
}());
var rectangulo = /** @class */ (function () {
    function rectangulo(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }
    rectangulo.prototype.CalculoPerimetro = function () {
        var perimetroLargo = this.largo * 2;
        var perimetroAncho = this.ancho * 2;
        var perimetro = perimetroAncho + perimetroLargo;
        console.log("Perimetro: " + perimetro);
    };
    rectangulo.prototype.CalculoArea = function () {
        var calculo = this.largo * this.ancho;
        console.log("Area: " + calculo);
    };
    return rectangulo;
}());
var triangulo = /** @class */ (function () {
    function triangulo(altura, base) {
        this.altura = altura;
        this.base = base;
    }
    triangulo.prototype.CalculoPerimetro = function () {
        var lados = this.base * 3;
        console.log("Perimetro: " + lados);
    };
    triangulo.prototype.CalculoArea = function () {
        var calculo = (this.base * this.altura) / 2;
        console.log("Area: " + calculo);
    };
    return triangulo;
}());
var Figura1;
Figura1 = new Circulo(5);
Figura1.CalculoArea();
Figura1.CalculoPerimetro();
var Figura2;
Figura2 = new triangulo(10, 2);
Figura2.CalculoArea();
Figura2.CalculoPerimetro();
var Figura3;
Figura3 = new rectangulo(10, 2);
Figura3.CalculoArea();
Figura3.CalculoPerimetro();
