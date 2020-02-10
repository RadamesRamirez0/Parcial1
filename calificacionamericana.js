//Convierte la calificacion en sistema decimal a sistema americano.
var n = Math.floor(Math.random() *10)+1;
console.log("Sacaste:",n)

if(n>9)
    console.log("A");
else
    if(n>8)
        console.log("B");
    else
        if(n>7)
            console.log("C");
        else
            if(n>6)
                console.log("D");
            else
                if(n>5)
                    console.log("E");
                else
                    console.log("F");
