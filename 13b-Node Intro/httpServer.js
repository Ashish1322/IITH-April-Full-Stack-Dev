import {createServer} from "http"
import {readFile} from "fs"

const myserver = createServer( function (req,res)  {
    
    readFile(`html${req.url}`, (err,data) => {
        if(err)
        {
            res.write("Server Doesn't have any file : " + req.url)
        }
        else {
            res.write(data);
        }
        
        res.end();
    })
   
})

myserver.listen(5500)
