var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fs = require('fs');
// const inputPath = 'countries.txt';
// const outputPath = 'countries.csv';
// const fileContent = fs.readFileSync(inputPath, 'utf-8');
// const lines = fileContent.trim().split('\n');
// const headers = ['Country', 'Population', 'Area', 'Density'];
// type CountryData = [string, number, number, number];
// const data: CountryData[] = lines.map((line: string) => {
//   const values = line.trim().split(/\s+/);
//   const country = values.slice(0, -2).join(' ');
//   const population = parseFloat(values[values.length - 2].replace(/,/g, ''));
//   const area = parseFloat(values[values.length - 1].replace(/,/g, ''));
//   const density = population / area;
//   return [country, population, area, density] as CountryData;
// });
// let csvContent = [headers.join(','), ...data.map((row) => row.join(','))].join('\n');
// fs.writeFileSync(outputPath, csvContent, 'utf-8');
// console.log('Archivo CSV generado exitosamente.');
var inputPath = 'countries.txt';
var outputPath = 'countries.csv';
var fileContent = fs.readFileSync(inputPath, 'utf-8');
var lines = fileContent.trim().split('\n');
var headers = ['Country', 'Population', 'Area', 'Density'];
var data = lines
    .map(function (line) {
    var values = line.trim().split(/\s+/);
    var country = values.slice(0, -2).join(' ');
    var population = parseFloat(values[values.length - 2].replace(/,/g, ''));
    var area = parseFloat(values[values.length - 1].replace(/,/g, ''));
    var density = population / area;
    return [country, population, area, density];
})
    .filter(function (row) { return !isNaN(row[1]) && !isNaN(row[2]) && !isNaN(row[3]); }); // Filtrar filas con valores NaN
var csvContent = __spreadArray([headers.join(',')], data.map(function (row) { return row.join(','); }), true).join('\n');
fs.writeFileSync(outputPath, csvContent, 'utf-8');
console.log('Archivo CSV generado exitosamente.');
