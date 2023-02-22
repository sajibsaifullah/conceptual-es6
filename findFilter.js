const numbers = [12, 32, 25, 75, 13, 54, 97, 25];

// const x = numbers.find(n => n >= 50)

const x = numbers.filter(n => n >= 500)

console.log(x)


/* 
=> .find ---> if does not match condition, it returns 'undefined'
=> .filter ---> if does not match condition, it returns []=> (empty array)
*/






