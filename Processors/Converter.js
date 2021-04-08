const FileSystem = require('fs');
const newLine = '\r\n';

let fields = ['Rail Car', 'Source', 'Event Date', 'Event Code', 'Event Location']


const convertToCSV = (equipments) => {

    FileSystem.stat('./csvs/equipment-raven-trip-events.csv', function (err, stat) {
        if (err) {
            console.log('The file does not exist, creating it');
            try {
                createFile();
                const csv = arrayToCSV(equipments);
                append(csv, false);
            } catch (err) {
                console.log(err);
            }
            console.log('Records appended to the file');
        } else {
            console.log('File exists, appending');
            try {
                const csv = arrayToCSV(equipments);
                append(csv, true);
            } catch (err) {
                console.log(err);
            }
            console.log('Records appended to the file');
        }
    });

};

const arrayToCSV = (equipments) => {
    csv = equipments.map(row => Object.values(row));
    return csv.join('\n');
  }

const createFile = () => {

    console.log('New file, writing headers');
    fields = fields + newLine;

    FileSystem.writeFile('./csvs/equipment-raven-trip-events.csv', fields, function (err) {
        if (err) throw err;
    });
}

const append = (csv, fileExists) => {
    
    if(fileExists){
        csv = newLine + csv;
    }
    FileSystem.appendFile('./csvs/equipment-raven-trip-events.csv', csv, function (err) {
        if (err) throw err;
    });
}


module.exports = { convertToCSV: convertToCSV }