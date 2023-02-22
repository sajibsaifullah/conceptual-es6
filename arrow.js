/* 
=> hoisting----> call a function before declaring
=> fn declaration: function show(){}
=> fn expression:  const add = function(){}
=> fn expression does not hoist
=> implicit return----> when fn in one line
*/

// show()

// function show (){
//     console.log('hello world')
// }

// var add = function(){
//     console.log('hello world')
// }
// add()

// const add = function(x,y){
//     return x+y
// }

// const add = (x,y) => x+y
// const add = (x,y) => {
//     const total = x+y;
//     return total
// }

// console.log(add(3,4))


// const showName = name => console.log(name)

// showName('mehedy')
// hello()
// const hello = () =>console.log('hello world')




