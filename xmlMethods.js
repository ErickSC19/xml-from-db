import builder from 'xmlbuilder' 
import fs from 'fs';

export function convertToXML(data) {
  const product = builder.create('product');
  product.ele('id', data.id);
  product.ele('name', data.name);
  product.ele('price', data.price);
  product.ele('count', data.count);
  
  return product.end({ pretty: true });
}

export function writeXMLToFile(xmlData, filePath) {
  fs.writeFileSync(filePath, xmlData, 'utf-8');
}