require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const app = express();
const products_controller = require('./controller');

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		app.set('db', dbInstance);
	})
	.catch(error => console.log(error));

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
