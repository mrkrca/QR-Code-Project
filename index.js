
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
        message: "Enter URL here: ",
        name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); //Good Test

    fs.appendFile("Url.txt", url, + "\n",(err)=>{
        if(err) throw err;

    console.log("File is saved! <3");

      
    });


    
  })
  .catch((error) => {
    if (error.isTtyError) {
    
    } else {
      
    }
  });
