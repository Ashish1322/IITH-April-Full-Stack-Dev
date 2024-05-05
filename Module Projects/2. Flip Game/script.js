var images  = [
    {
        "src" : "img/1.png",
        "name" : "burger",
        "show": false
    },
    {
        "src" : "img/2.png",
        "name" : "burger",
        "show": false
    },
    {
        "src" : "img/3.png",
        "name" : "penut",
        "show": false
    },
    {
        "src" : "img/4.png",
        "name" : "penut",
        "show": false
    },
    {
        "src" : "img/5.png",
        "name" : "plane",
        "show": false
    },
    {
        "src" : "img/6.png",
        "name" : "plane",
        "show": false
    },
    {
        "src" : "img/7.png",
        "name" : "shake",
        "show": false
    },
    {
        "src" : "img/8.png",
        "name" : "shake",
        "show": false
    },
    {
        "src" : "img/9.png",
        "name" : "pizza",
        "show": false
    },
    {
        "src" : "img/10.png",
        "name" : "pizza",
        "show": false
    },
    {
        "src" : "img/11.png",
        "name" : "home",
        "show": false
    },
    {
        "src" : "img/12.png",
        "name" : "home",
        "show": false
    },


]

var score = 0;

function displayData()
{
    let mybox = document.getElementById("box")
    mybox.innerHTML = ""

    images.forEach( function(value,index) {
        
        if(value["show"] == true)
        {
            // create an image and add the source
            let myimg = document.createElement("img")
            myimg.src = value["src"]

            // append this image to the box
            mybox.append(myimg)
        }
        else {
            // create one div : <div class="blackbox"> </div>
            let mydiv = document.createElement("div") // <div></div>
            mydiv.classList.add("blackbox") // <div class="blackbox"> </div>
            mydiv.addEventListener("click",function () {
                flipImage(index)
            })
            // append this blackbox to the box
            mybox.append(mydiv)
        }

    })
}

var first = -1;
var second = -1; 

function flipImage(index)
{
   
    if(first == -1)
    {
        images[index]["show"] = true
        displayData();
        first = index;
        playTurnAudio();
    
    }
    else if (second == -1)
    {
        images[index]["show"] = true
        displayData();
        second = index;
        playTurnAudio();
        setTimeout(compareImages,1000)
       
    }

   
}

function compareImages()
{
    
    if(images[first]["name"] == images[second]["name"])
    {
        score += 10;

        first = -1;
        second = -1;

        document.getElementById("score").innerText = score
        playMatchAudio();
    }
    else 
    {
        
        images[first]["show"] = false
        images[second]["show"] = false
        displayData();
      
        first = -1;
        second = -1;

        playNotMatchAudio();

    }
}


function resetGame()
{
    score = 0;
    document.getElementById("score").innerText = score

    first = -1;
    second = -1;

    images.forEach( function (item,index)  {
        if(item["show"] == true)
        {
            images[index]["show"] = false;
        }
    })

    displayData();

}

function playTurnAudio()
{
    let audio = document.getElementById("turn")
    audio.play()
}

function playMatchAudio()
{
    let audio = document.getElementById("match")
    audio.play()
}

function playNotMatchAudio()
{
    let audio = document.getElementById("nomatch")
    audio.play()
}


document.getElementById("reset").addEventListener("click",resetGame)

displayData()