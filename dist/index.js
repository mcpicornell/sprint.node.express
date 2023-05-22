"use strict";
const fs = require('fs');
// let countriesFile = fs.readFileSync('countries.txt','utf8');
// countriesFile = countriesFile.split('\n').forEach((element:any) => element.split(/[0-9]/))  
// console.log(countriesFile)
const countriesFile = fs.readFileSync('countries.txt', 'utf8');
const rows = countriesFile.split('\n');
const data = rows.map((row) => {
    const [country, population, area] = row.split(' ');
    return `${country},${population},${area}`;
});
const csvData = data.join('\n');
fs.writeFileSync('countries.csv', csvData, 'utf8');
console.log('Archivo CSV creado exitosamente.');
