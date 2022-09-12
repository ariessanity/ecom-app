const fs = require("fs");

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//writing files
fs.writeFile("./docs/blog1.txt", "hello world", () => {
  console.log("file was writtern");
});

//directories

if (!fs.existsSync("./assests")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("created");
  });
} else {
  fs.rmdir("./assests", (err) => {
    //remove dir
    if (err) {
      console.log(err);
    }
    console.log("deleted");
  });
}

//deleting files

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}



///////////////////////////////////////////////
//streams.js

const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => {
//     console.log('new chunk');
//     console.log(chunck);

//     writeStream.write('\n new chunk \n')        //write the chunk in a new file blog4.txt
//     writeStream.write(chunk)
// })



//piping              
readStream.pipe(writeStream);
