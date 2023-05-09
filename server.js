/* eslint-disable no-console */
const http = require('http');
const {
  getName,
  getBirth,
  getPlaceBirth,
  getAddress,
} = require('./module/biodata');

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
            <h5>Nama: ${getName('Fajri Muhammad Tio')}</h5>
            <h5>Tempat Lahir: ${getPlaceBirth('Lawang Agung')}</h5>
            <h5>Tanggal Lahir: ${getBirth('6 Januari 2000')}</h5>
            <h5>Alamat: ${getAddress('Jl.Depati Parbo Kota Sungai Penuh')}</h5>
         `);
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h4>Page not Found</h4>');
  }
});

const users = {
  name: 'Fajri Muhammad Tio',
  tmpLahir: 'Lawang Agung',
  tglLahir: '6 Januari 2000',
  alamat: 'Jl.Depati Parbo Kota Sungai Penuh',
};

// view in console
console.log(`Nama: ${getName(users.name)}`);
console.log(`Tempat Lahir: ${getPlaceBirth(users.tmpLahir)}`);
console.log(`Tanggal Lahir: ${getBirth(users.tglLahir)}`);
console.log(`Alamat: ${getAddress(users.alamat)}`);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
