//Radames Osvaldo Ramirez Diaz 2°C
// 21/02/2020
//Javascript: 2 funciones que devuelven series; la serie de euler y la serie de euler elevada a la x, con la funcion de factorial.
function factorial(n)//factorial de n numero
{
    var f=1;
    for(var i=1;i<=n;i++)
    {
        f*=i;
    }
    return f;
}
function ex(n,x)//cuantas,valor x
{
    var serie=1;
    for(var i=1;i<=n;i++)
    {
        serie+=Math.pow(x,i)/factorial(i);
    }
    return serie;
}
function e(n)//cuantas
{
    var serie=1;
    for(var i=1;i<=n;i++)
    {
        serie+=1/factorial(i);
    }
    return serie;
}


