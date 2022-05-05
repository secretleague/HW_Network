const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const public = path.join(__dirname, '/public');

let data = {
  name: 'Ivan'
};

const port = 3000;
const host = 'localhost';

app.use(express.static(public));

const jsonParser = bodyParser.json();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/api/name', (req, res) => {
	res.json(data);
});

app.post('/api/name', jsonParser, function (req, res) {
  data = req.body;
  res.json(data);
})

app.listen(port, host, () => {
	console.log(`Server started at ${host} port ${port}`);
});
