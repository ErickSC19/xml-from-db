import {convertToXML, writeXMLToFile} from './xmlMethods.js';
import readline from 'readline';
import connectDB from './conection.js';
import queryDatabase from './dbMethods.js';

async function main() {
  try {
    await connectDB.authenticate();
    console.log("->   connected to database");
  } catch (error) {
    console.error(error);
    return;
  }

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    let runs = true;
    while (runs) {
      const opt = await askQuestion(rl, '-> Type 1 to select the entry to transform in XML.\n-> Type 2 to exit. \n R:');

      switch (opt) {
        case "1":
          const n = await askQuestion(rl, '-> Give a number for an entry id:');
          const dbResult = await queryDatabase(n); 
          if (dbResult) {
            console.log(dbResult);
            const xmlData = convertToXML(dbResult);
            writeXMLToFile(xmlData, 'output.xml');
            console.log('---File created successfully--- \n');
          }
          break;
        case "2":
          runs = false;
          console.log(`-> Bye. \n ------------`);
          rl.close();
          break;
        default:
          console.log(`-> there is no such option`);
          break;
      }
      
    }
  }
  
  async function askQuestion(rl, question) {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  main().catch((err) => {
    console.error(err);
  });