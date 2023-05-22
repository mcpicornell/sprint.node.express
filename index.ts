const fs = require('fs')

const inputPath = 'countries.txt';
const outputPath = 'countries.csv';

const fileContent = fs.readFileSync(inputPath, 'utf-8');
const lines = fileContent.trim().split('\n');

const headers = ['Country', 'Population', 'Area', 'Density'];

type CountryData = [string, number, number, number];

const data: CountryData[] = lines
  .map((line: string) => {
    const values = line.trim().split(/\s+/);

    const country = values.slice(0, -2).join(' ');
    const population = parseFloat(values[values.length - 2].replace(/,/g, ''));
    const area = parseFloat(values[values.length - 1].replace(/,/g, ''));

    const density = population / area;

    return [country, population, area, density] as CountryData;
  })
  .filter((row: CountryData) => !isNaN(row[1]) && !isNaN(row[2]) && !isNaN(row[3])); 

let csvContent = [headers.join(','), ...data.map((row) => row.join(','))].join('\n');

fs.writeFileSync(outputPath, csvContent, 'utf-8');

console.log('Archivo CSV generado exitosamente.');