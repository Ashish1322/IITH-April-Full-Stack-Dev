console.log("Conditions")

// var age = 21;
// var gender = "female"
// if (age >= 17 && gender == "female") 
// {
//     console.log("Female You can Drive")
// }
// else if (age >= 18 && gender == "male")
// {
//     console.log("Male you can drive")
// }
// else 
// {
//     console.log("You cannot Drive")
// }


// var a = 20

// if(a == 1)
// {
//     console.log("one")
// }
// else if (a==2)
// console.log("two")
// else if (a==3)
// console.log("three")
// else if (a==4)
// console.log("Four")
// else if (a==5)
// console.log("Five")
// else if (a==6)
// console.log("Six")
// else if (a==7)
// console.log("Seven")
// else
// console.log("Not Supported")


// var a = 1;
// switch(a)
// {
//     case 1:
//         console.log("one")
//         break
//     case 2:
//         console.log("two")
//         break
//     case 9:
//         console.log("nine")
//         break
//     default:
//         console.log(a)
// }

// stone paper scissors
var comp = "paper"
var user = "scissors"

if(comp == user)
{
    console.log("Draw")
}
else if (comp == "stone" && user == "paper")
{
    console.log("User Won the Game")
}
else if (comp == "stone" && user == "scissors")
{
    console.log("Computer Won the Game")
}
else if (comp == "paper" && user == "scissors")
{
    console.log("User Won the Game")
}
else if (comp == "paper" && user =="stone")
{
    console.log("Computer Won the Game")
}
else if (comp == "scissors" && user=="stone")
{
    console.log("User won the game")
}
else if (comp == "scissors" && user == "paper")
{
    console.log("Computer Won the Game")
}
else 
{
    console.log("Values are not Correct")
}