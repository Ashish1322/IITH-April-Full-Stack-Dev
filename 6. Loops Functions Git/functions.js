


// a-z, A-z, 0-9, _ : it cannot start from digit

// 1. Function with no arguments or paramters
// function printTable()
// {

//     var a = 10;
//     for( let i = 0 ; i <= 10 ; i+=1)
//     {
//         console.log(a, "X" , i , "=", a*i)
//     }

// }
// printTable()

// 2. Functions with Arguments
// function printTable(a,start,end)
// {

//     for( let i = start ; i <= end ; i+=1)
//     {
//         console.log(a, "X" , i , "=", a*i)
//     }

// }

// 3. Functions with default arguments
// function printTable(a,start=0,end=10)
// {

//     for( let i = start ; i <= end ; i+=1)
//     {
//         console.log(a, "X" , i , "=", a*i)
//     }

// }


// 4. Functions with return values
// function printTable(a,start=0,end=10)
// {
//     // write a function that will print the table and return the sum of all the values of the table;
//     var sum = 0;

//     for( let i = start ; i <= end ; i+=1)
//     {
//         console.log(a, "X" , i , "=", a*i)
//         sum += a*i;
//     }

//     return sum;
// }
// var result = printTable(2,0,4)
// console.log("the sum is ",result)

// 5. Anonymous Functions
// let t =  function (age) {
//     if (age >= 18) {
//         return true;
//     }
//     else {
//         return false
//     }
// }

// let result = t()
// console.log(result)



// Questions 1: I wanted to write a function that will take the age as agrument and return one boolean that user can drive or not

// function canDrive(age)
// {
//     if(age >= 18) {
//         return true;
//     }
//     else 
//     {
//         return false
//     }
// }

// let result = canDrive(12)
// console.log(result)

// Questions 2: Factorial of a number
// function getFactorial(a)
// {
//    let result  = 1;

//    while(a >= 1)
//    {
//         result = result * a;
//         a-=1;
//         return result;
//    }

   
// }

// console.log(getFactorial(5))

// Questions 3: isPalindrome

// function isPlanidrome(s)
// {
//     // write
//     let start = 0;
//     let end = s.length-1;

//     while(start <= end)
//     {
//         if(s[start] == s[end])
//         {
//             start += 1;
//             end -= 1;
//         }
//         else {
//             return false;
//         }
//     }
//     return true;

// }

