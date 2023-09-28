import {convertToXML, writeXMLToFile} from './xmlMethods.js';
import connectDB from './conection.js';
import queryDatabase from './dbMethods.js';

connectDB
  .authenticate()
  .then(() => console.log("-> connected to database"))
  .catch((error) => console.log(error));


async function main() {
    const dbResult = await queryDatabase(1); 
    console.log(dbResult);
    const xmlData = convertToXML(dbResult);
    writeXMLToFile(xmlData, 'output.xml');
  }
  
  main().catch((err) => {
    console.error(err);
  });