var n = new Array(3);
var mayor;
for(var i=0;i<=2;i++)
{
    n[i] = Math.floor(Math.random()*20) +1;
    console.log("N",i+1,": ",n[i]);
}
mayor = n[0];
for(var j=0;j<=2;j++)
{
    if(n[j]> mayor)
        mayor = n[j];

}
    console.log("El mayor es: ",mayor);

