function fetchData()
{
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then( res => res.json())
    .then( res => {
        let data = res.data
        data.forEach( (item) => {
            let image = item["image"]
            let name = item["phone_name"]

            let div = document.createElement("div")
            div.classList.add("card")
            let img = document.createElement("img")
            img.src = image
            let p = document.createElement("p")
            p.innerText = name

            div.append(img,p)

            document.getElementById("main").append(div)

        })

       
    })
    .catch(err => console.log(err))

}

fetchData()


