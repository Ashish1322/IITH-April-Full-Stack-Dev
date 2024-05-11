// Create a Promise : 1%
const myPormsie = new Promise( function (resolve,reject) {
    
    setTimeout( () => {
        resolve(56);
    }, 5000)
})


// how to consume a promise : 99%
myPormsie
.then( (data) => {console.log("Promsie si Fullfileed",data)} )
.catch( () => {console.log("Promise is Rejected")})

console.log("HI")