// var a = [7,8,9,10], unordered
// var a = {
//    "math" : 7,
//    "science" : 8, 
//    "physics" : 9, 
//    "chemistry":10
// }
// console.log(a["physics"])
// console.log(a.physics)
var user = {
    "name" : "Ashish",
    "age": 21,
    "gender":"male",
    "address" : {
        "state" : "Punjab",
        "pin":"14124",
        "country" : "India"
    },
    "friends" : [
        {
        "name" : "Abhinav",
        "age": 34
        },
        {
            "name" : "Nishtha",
            "age": 24
        }
    ]
}
console.log(user["name"])
console.log(user["address"]["pin"])
console.log(user["friends"][0]["name"])
console.log(user.hasOwnProperty("friendss"))