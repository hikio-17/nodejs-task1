/* eslint-disable no-console */
const http = require('http');
const {
  getName,
  getBirth,
  getPlaceBirth,
  getAddress,
} = require('./module/biodata');

// Create object user
const user = {
  name: 'Fajri Muhammad Tio',
  tmpLahir: 'Lawang Agung',
  tglLahir: '6 Januari 2000',
  alamat: 'Jl.Depati Parbo Kota Sungai Penuh',
};

const server = http.createServer((req, res) => {
  const path = req.url;
  // view in browser
  switch (path) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h3>Learn NodeJs with Pesilat</h3>');
      break;
    case '/biodata':
      res.writeHead(200, { 'Content-Type': 'text/html ' });
      res.end(`
      <ul>
        <li><b>Nama:</b> ${getName(user.name)}</li>
          <li><b>Tempat Lahir:</b> ${getPlaceBirth(user.tmpLahir)}</li>
          <li><b>Tanggal Lahir:</b> ${getBirth(user.tglLahir)}</li>
          <li><b>Alamat:</b> ${getAddress(user.alamat)}</li>
      </ul>      
      `);
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h4>Page not Found</h4>');
  }
});

// view in console
console.log(`Nama: ${getName(user.name)}`);
console.log(`Tempat Lahir: ${getPlaceBirth(user.tmpLahir)}`);
console.log(`Tanggal Lahir: ${getBirth(user.tglLahir)}`);
console.log(`Alamat: ${getAddress(user.alamat)}`);

// SETUP SERVER
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
