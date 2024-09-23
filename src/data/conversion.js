
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');


const matchesPath = path.join(__dirname, 'matches.csv');
const deliveriesPath = path.join(__dirname, 'deliveries.csv');


function csvToObjectSync(filePath) {
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
     const writeStream = fs.createWriteStream(filePath.replace('.csv','.js'));
     writeStream.write(JSON.stringify(results, null, 2), 'utf-8')
    });
}


function convertAndWriteFilesSync() {
  csvToObjectSync(matchesPath);
  csvToObjectSync(deliveriesPath);
}

// convertAndWriteFilesSync();
