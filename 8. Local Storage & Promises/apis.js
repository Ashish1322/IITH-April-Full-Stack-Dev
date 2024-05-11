var a = fetch("https://jsonplaceholder.typicode.com/todos/")
a
.then( (res) => {
    let data = res.json();
    data
    .then( (mydata) => console.log(mydata))
    .catch( (err) => console.log(err))
} )
.catch( (err) => console.log(err))

