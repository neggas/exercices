
const p = 0.9;



function f(x)
{
    return Math.pow(p,x)-(1/x);
}

var r = 1;
while(f(r+1) > f(r))
{   
    r++;
  
}
console.log(r);


