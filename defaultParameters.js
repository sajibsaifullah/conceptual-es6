
function add(x=0,y=0){
    console.log(x,y)
    const total = x+y;
    return total
}

console.log(add(5, 10))

/* 
when we put one parameter out of two parameters by unconsciously, we use default parameter to avoid NaN/error 
*/