const express = require('express');

var app = express();


app.get('/', (req, res) => {
	res.send('Hi there');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
