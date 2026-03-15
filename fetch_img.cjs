const https = require('https');
const urls = [
  'https://ibb.co/gMR4T0qG',
  'https://ibb.co/nVWpLVs',
  'https://ibb.co/d0nbxBWc',
  'https://ibb.co/0jktb9hg',
  'https://ibb.co/gZBvBvjg',
  'https://ibb.co/4RvdPXdD'
];

urls.forEach(url => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      const match = data.match(/<meta property="og:image" content="([^"]+)"/);
      if (match) console.log(match[1]);
      else console.log("Not found for " + url);
    });
  });
});
