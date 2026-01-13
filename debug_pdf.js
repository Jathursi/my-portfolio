
try {
    const pdf = require('pdf-parse');
    console.log('PDF Parse loaded successfully');
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'public/Jathursika (1).pdf');
    console.log('Reading file:', filePath);
    const buffer = fs.readFileSync(filePath);
    console.log('File read, size:', buffer.length);
    pdf(buffer).then(data => {
        console.log('PDF Parsed!');
        console.log(data.text.substring(0, 100));
    }).catch(e => console.error('Parse Error:', e));
} catch (e) {
    console.error('Load Error:', e);
}
