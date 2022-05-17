import {Low, JSONFile} from 'lowdb';
import { join, dirname } from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
// const express = require('express');
import bodyParser from 'body-parser';
// const bodyParser = require('body-parser');
// const path = require('path');
const app =  express();
// const lowDb = require('lowdb');
// const FileSync = require("lowdb/adapters/FileSync");
// const db = lowDb(new FileSync('db.json'));

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = join(__dirname, '/public');



const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();
db.data ||= { posts: {} };
const {posts} = db.data;

const port = 3000;
const host = 'localhost';

app.use(express.static(pub));//????

const jsonParser = bodyParser.json();//что такое body parser?

app.set('views', './views');// Для чего эти два сета?
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');//почему рендерим тут index? Если отрендерит и js и css
});

 app.get('/api/name', (req, res) =>  {
	// res.json(data);
	 const resData = db.data;
	console.log(resData);
	res.json(resData);
});

app.post('/api/name', jsonParser, function (req, res) {
  const reqData = req.body;
  res.json(reqData);
  db.data.posts = reqData;
  db.write();
})



app.listen(port, host, () => {
	console.log(`Server started at ${host} port ${port}`);
});


