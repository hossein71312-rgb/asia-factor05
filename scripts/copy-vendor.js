const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'app', 'vendor');
fs.mkdirSync(out, { recursive: true });
const files = [
  ['node_modules/html2canvas/dist/html2canvas.min.js', 'html2canvas.min.js'],
  ['node_modules/jspdf/dist/jspdf.umd.min.js', 'jspdf.umd.min.js']
];
for (const [src, name] of files) {
  fs.copyFileSync(path.join(__dirname, '..', src), path.join(out, name));
  console.log('copied', name);
}
