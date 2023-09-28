import builder from 'xmlbuilder' 
import fs from 'fs';

export function convertToXML(data) {
  const root = builder.create('root')
  .ele('id', data.id)
  .ele('name', data.name)
  .ele('price', data.price)
  .ele('count', data.count);
  
  return root.end({ pretty: true });
}


export function writeXMLToFile(xmlData, filePath) {
  fs.writeFileSync(filePath, xmlData, 'utf-8');
}