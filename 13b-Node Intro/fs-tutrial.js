import {readFile,writeFile, unlink} from "fs"

// Read File
readFile("data.txt", "utf8" , (err,data) => {
    if(err)
        {
            console.log("Error while reading the file")
        }
    else 
    {
        console.log("Data",data)
    }
})

// Write File
writeFile("data2.txt","Hello this is the new file", (err) => {
    if(err) console.log("File is not created Successfully")
    else console.log("File is Created Successfully")
})


// Delete File
unlink("data2.txt", (err) => {
    if(err)
    {
        console.log("Error is ",err)
    }
    else 
    {
        console.log("File is deleted")
    }
})