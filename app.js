const fs = require("fs");

// console.log(process.argv[2]); // se voglio prendere input
// console.log(process.argv[3]); // se voglio prendere output

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile(inputUrl);

if (data) {
   
    const result = transformData(data);

    writeData(outputUrl, result);
}

try {
  data = fs.readFileSync("./input/students.csv", "utf8");
} catch (err) {
  console.error(err.message);
}

if (data) {
  data = data + "\npippo,pluto,paperino"

  try {
    fs.writeFileSync('./output/joke.txt', data);
    
  } catch (err) {
    console.error(err.message);
  }
}


function readFile(url) {
    try {
        const data = fs.readFileSync(url, "utf8");  
        return data;              //impacchettiamo le funzioni sopra per leggere e scrivere in un'unica funzione
      } catch (err) {                                            // se riesce a leggere try non passa dal catch e se non riesce a leggere manda mess di erorre
        console.error(err.message);
        return null;
      }
}

function writeData(url, data) {
    try {
        fs.writeFileSync(url, data);
        
      } catch (err) {
        console.error(err.message);
      }
}

function transformData(data) {
    
    const rows = data.split('\n');
}