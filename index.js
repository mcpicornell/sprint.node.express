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
var inputPath = 'countries.txt';
var outputPath = 'countries.csv';
var fileContent = fs.readFileSync(inputPath, 'utf-8');
var lines = fileContent.trim().split('\n');
var headers = ['Country', 'Population', 'Area', 'Density'];
var data = lines.map(function (line) {
    var values = line.trim().split(/\s+/);
    var country = values.slice(0, -2).join(' ');
    var population = parseFloat(values[values.length - 2].replace(/,/g, ''));
    var area = parseFloat(values[values.length - 1].replace(/,/g, ''));
    var density = population / area;
    return [country, population, area, density];
});
// Filtrar la fila "Country,NaN,NaN,NaN"
var filteredData = data.filter(function (row) { return !isNaN(row[1]) && !isNaN(row[2]) && !isNaN(row[3]); });
// Ordenar por densidad en orden descendente
filteredData.sort(function (a, b) { return b[3] - a[3]; });
var csvContent = __spreadArray([headers.join(',')], filteredData.map(function (row) { return row.join(','); }), true).join('\n');
fs.writeFileSync(outputPath, csvContent, 'utf-8');
