import express  from "express";
const server = express();

var posts = [];
var id = 0;

server.use(express.json())

server.get("/articles",(req,res) => {
    return res.json(posts)
})

server.post("/articles", (req,res) => {
    posts.push({...req.body,id})
    id+=1
    res.json({success: true, message: "Article Saved"})
})

server.put("/articles", (req,res) => {
    const id = req.body.id;
    // check
    posts.forEach( (item,index) => {
        if(item.id == id)
        {
            posts[index] = {
                "title":req.body.title,
                "description" : req.body.description,
                "id": id
            }

            return res.status(200).json({success: true, message:"Article Updated"})
        }
    })

    return res.status(400).json({success: false, message:"Invalid Post Id"})
})

server.listen(8000, () => console.log("Server is Running on this Port") )