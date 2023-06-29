import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { url } from 'inspector';
let input;
inquirer
    .prompt([{message: "Enter the input: ", name: "url"}])
    .then(answers=>{
        input = answers.url;
        var qr_svg = qr.image(input);
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));
        fs.appendFileSync('QRInputText.txt', input);
    })
    .catch(errors=>{
        if (errors) console.log("ERRORS: ", errors);
    });