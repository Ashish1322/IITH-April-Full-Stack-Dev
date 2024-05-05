// for in :  Iterate over an object and gives the every key of object one by one
// for of  : Iterate over an array and gives the every value of array one by one
// forEach : Higer order function applied on the array

// iterate or traverse : going to the every element of the array one by one
// var a = [6,7,8,9,78]
// for(let i = 0 ; i < a.length ; i+=1)
// {
//     console.log("Index is ", i, "Value is ", a[i])
// }

// for(let value of a)
// {
//     console.log(value)
// }


// var b = {
//    "name" : "Ashish",
//    "age": 21,
//    "gender":"male",
// }
// for(let value in b)
// {
//     console.log(value,b[value])
// }


// Higher Order Functions:  Which takes the functions in arguments
// a,b : callback functions
// function hello(a,b)
// {
//     a()
//     b()
// }

// function first()
// {
//     console.log("HI")
// }

// function second()
// {
//     console.log("Hello")
// }

// hello(first,second)

// let values = [7,8,9,9,10,20]

// values.forEach(function (value,index) {
//     console.log(value,index)
// })