import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
	constructor() {
		super();
		this.state = {
			inventory: [{name:'',price:0,image:''}]
		};
	}
	render() {
		const { inventory } = this.state;

		let productDisplay = this.state.inventory.map((item, i) => {
			return (
				<Dashboard
					key={i}
					name={inventory.name}
					price={inventory.price}
					image={inventory.image}
				/>
			);
		});

		return (
			<div className="App">
				<Header />
				{productDisplay}
				<Form />
			</div>
		);
	}
}

export default App;
