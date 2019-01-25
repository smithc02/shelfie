module.exports = {
	getInventory: (req, res, next) => {
		const dbInstance = req.app.get('db');

		dbInstance
			.get_inventory()
			.then(response => res.status(200).send(response))
			.catch(err => {
				console.log(err);
			});
		console.log(err);
	},
	create: (req, res, next) => {
		const dbInstance = req.app.get('db');
		const { name, price, image } = req.body;

		dbInstance
			.create_product([name, price, image])
			.then(() => res.sendStatus(200))
			.catch(err => {
				res.status(500).send({ errorMessage: 'something broke' });
			});
	}
};
