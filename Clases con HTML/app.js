const btnrec = document.getElementById("btnrec");
const btntri = document.getElementById("btntri");
const btncuad = document.getElementById("btncuad");

class Rectangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura;
    }
}


class Triangulo{
    constructor(base,altura){
        this.base=base;
        this.altura=altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}

class Cuadrado{
    constructor(base){
        this.base=base;
    }
    area(){
        return this.base*this.base;
    }
}


btnrec.addEventListener('click',()=>{
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;
    
    let rect = new Rectangulo(base,altura);

    document.getElementById("Resultados").innerHTML = "Area del Rectangulo: "+ rect.area();
});
btntri.addEventListener('click',()=>{
    let base=document.getElementById("base").value;
    let altura=document.getElementById("altura").value;

    let tri = new Triangulo(base,altura);

    document.getElementById("Resultados").innerHTML = "Area del Triangulo: "+ tri.area();
});
btncuad.addEventListener('click',()=>{
    let base=document.getElementById("base").value;
    
    let cuad = new Cuadrado(base);

    document.getElementById("Resultados").innerHTML = "Area del Cuadrado: "+ cuad.area();
});


