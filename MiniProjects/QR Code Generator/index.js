/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// MODULES TO INSTALL
// 1. Inquirer.js
// 2. qr-image

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// inquirer.prompt(questions, answers) -> promise
inquirer
    .prompt([{    // object : { }
        message: "Type in your URL: ",
        name: "URL",
    }])
    .then((answers) => {
        const url = answers.URL;    // URL: name

        // QR 코드 이미지로 변환하기
        var qr_png = qr.image(url);

        // QR 코드 이미지 파일로 저장하기
        qr_png.pipe(fs.createWriteStream("QR_Code_Image.png"));

        // 텍스트 파일로 저장하기
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } 
        else {
        // Something else went wrong
        }
    });
