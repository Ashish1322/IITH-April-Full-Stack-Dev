
var page = 1;
var search = "Transformers"

function fetchMovies(query)
{
    fetch(`http://www.omdbapi.com/?s=${query}&page=${page}&apikey=1b4ecd2`)
    .then( res => res.json())
    .then( data => {
        console.log(data)
        // if Error is there
        if(data.hasOwnProperty("Error"))
        {
            let p = document.createElement("p")
            p.innerText = "No Movies Found"
            document.getElementById("box").append(p)
            return;
        }
        let movies = data["Search"]
        movies.forEach( (item) => {

                let div = document.createElement("div")
                div.classList.add("card")

                let img = document.createElement("img")
                img.src = item["Poster"]

                let p = document.createElement("p")
                p.innerText= item["Title"]

                div.append(img,p)

                document.getElementById("box").append(div)


        })
    })
    .catch(err => console.log("Error"))
}


function searchMovies()
{
    let query = document.getElementById("moviename").value
    search = query;
    // clear everying insdie the box
    document.getElementById("box").innerHTML = ""
    fetchMovies(query)
}

function NextPage()
{
    // clear everying insdie the box
    document.getElementById("box").innerHTML = ""
    page+=1;
    document.getElementById("pagenumber").innerText = page
    fetchMovies(search)
}

function PreviousPage()
{
    // clear everying insdie the box
    document.getElementById("box").innerHTML = ""
    if(page > 1)
    {
        page-=1
        document.getElementById("pagenumber").innerText = page
        fetchMovies(search)
    }

}

document.getElementById("next").addEventListener("click",NextPage)
document.getElementById("prev").addEventListener("click",PreviousPage)

document.getElementById("search").addEventListener("click",searchMovies)

fetchMovies("Transformers");