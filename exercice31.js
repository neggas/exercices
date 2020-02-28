
function h(n)
{
    let sum = 0;
    for(let i = 1; i<= n; i++)
    {
        sum += 1/i;
    }

    return sum;
}

n = 1;
a = 3;

while(h(n) < a){
    n++;
}

console.log(n);