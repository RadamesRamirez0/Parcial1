function factorial(n)//factorial de n numero
{
    var f=1;
    for(var i=1;i<=n;i++)
    {
        f*=i;
    }
    return f;
}
function cos(n,x)//repeticiones,x.
{
    var s=1;
    for(var i=1;i<n;i++)
    {
        if((i*2)%4==0)
            s+=Math.pow(x,i*2)/factorial(i*2);
        else
            s-=Math.pow(x,i*2)/factorial(i*2);
    }
    return s;
}
function ln(n,x)//cuantas,x.
{
    var ln=0;
    for(i=1;i<=n;i++)
    {
        ln+=1/i*Math.pow((x-1)/x,i);
    }
    return ln;
}
function seno(n,x)//cuantas, x.
{
    var seno=x;
    for(var i=1;i<=n;i++)
    {
        if(i%2==0)
            seno+=Math.pow(x,2*i+1)/factorial(2*i+1);
        else
            seno-=Math.pow(x,2*i+1)/factorial(2*i+1);
    }
    return seno;
    
}
//console.log(cos(15,1));
//console.log(ln(100,5));
//console.log(seno(10,1));
