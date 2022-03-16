const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.json({"message": "pong" });
});

app.use(function(err, req, res, next ) {
  res.status(500).send(`Algo não está certo: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo porta 3000'));