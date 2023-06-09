const fs = require('fs')

const inputPath = 'countries.txt';
const outputPath = 'countries.csv';

const fileContent = fs.readFileSync(inputPath, 'utf-8');
const lines = fileContent.trim().split('\n');

const headers = ['Country', 'Population', 'Area', 'Density'];

type CountryData = [string, number, number, number];

const data: CountryData[] = lines.map((line: string) => {
  const values = line.trim().split(/\s+/);

  const country = values.slice(0, -2).join(' ');
  const population = parseFloat(values[values.length - 2].replace(/,/g, ''));
  const area = parseFloat(values[values.length - 1].replace(/,/g, ''));

  const density = population / area;

  return [country, population, area, density] as CountryData;
});

// Filtrar la fila "Country,NaN,NaN,NaN"
const filteredData = data.filter((row) => !isNaN(row[1]) && !isNaN(row[2]) && !isNaN(row[3]));

// Ordenar por densidad en orden descendente
filteredData.sort((a, b) => b[3] - a[3]);

const csvContent = [headers.join(','), ...filteredData.map((row) => row.join(','))].join('\n');

fs.writeFileSync(outputPath, csvContent, 'utf-8');