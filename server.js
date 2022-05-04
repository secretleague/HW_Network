const express = require('express');
const path = require('path');
const app = express();
const public = path.join(__dirname, 'public');

const port = 3000;
const host = 'localhost';

app.use(express.static(public));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, host, () => {
	console.log(`Server started at ${host} port ${port}`);
});