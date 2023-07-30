const fs = require("fs");

// console.log(process.argv[2]); // se voglio prendere input
// console.log(process.argv[3]); // se voglio prendere output

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile(inputUrl);

if (data) {
   
    const result = transformData(data);

    writeData(outputUrl, JSON.stringify(result));
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
    
    const rows = data.split(/\r?\n/);

       const header = rows.shift();

       const headerArray = header.split(',');
       const students = [];

       for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        
        const rowArray = row.split(',');

        const student = {};
        
        for (let j = 0; j < headerArray.length; j++) {
          const element = headerArray[j];
          
          let value = rowArray[j];

          
         if (value !== undefined) {
         value = value.trim();
         }

          // student[element] = value;

          if (!isNaN(value)) {
            value = parseFloat(value);
          } else if (value === 'true' || value === 'false'){
            value = value === 'true';
          }
          student[element] = value;
        }
        students.push(student);
       }
       console.log(header);
       console.log(headerArray);
       console.log(students);
       return JSON.stringify(students);


    // return JSON.stringify(rows);
  }
 








//1) creare una costante 'header' con la prima riga che AVRETE TOLTO a rows;
    //2) create una constante 'headerArray' splittando la stringa header sulle virgole;
    //3) crate un array chiamato students (vuoto);
    //4) ciclate sull'array rows;
        //4a) create una costante rowArray splittando la singola row sulle virgole;
        //4b) create un oggetto vuoto chiamato student;
        //4c) ciclate sull'headerArray;
            //4c1) per ogni elemento dell'headerArray aggiungo una proprietà all'oggetto student
                // student[headerArray[j]] = rowArray[j];
        //4d) aggiungo student a students
    //5) ritorno JSON.stringify di students


    //A1)tipizzare i valori nel json
    //A2)aggiungere un parametro alla applicazione che mi permette di indicare il carattere divisorio
    //A3)gestire la possibilità che nel csv ci siano degli spazi non voluti 



