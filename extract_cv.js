
const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const pdfPath = path.join(__dirname, '../Jathursika (1).pdf');

if (!fs.existsSync(pdfPath)) {
    console.error('PDF file not found at:', pdfPath);
    process.exit(1);
}

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    // Basic text cleanup
    console.log(JSON.stringify({ text: data.text }));
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
