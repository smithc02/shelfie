require('dotenv').config();
const { json } = require('body-parser');
const express = require('express');
const massive = require('massive');
const app = express();
const controller = require('./controller');

app.use(json());

massive(process.env.CONNECTION_STRING)
	.then(dbInstance => {
		// console.log(dbInstance)
		app.set("db", dbInstance);
	})
	.catch(err => console.log(err));

app.get("/api/inventory", controller.getInventory);
app.post('/api/inventory/:id', controller.create)

const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
