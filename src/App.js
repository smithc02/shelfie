import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			inventory: [
				
			]
		};
	}
componentDidMount(){
	Axios
		.get('/api/inventory')
		.then(res => {
			console.log('response',res);
			this.setState({inventory:res.data})
		})
}


	render() {

		let productDisplay = this.state.inventory.map((item, i) => {
			return (
				<Dashboard
					key={i}
					name={item.name}
					price={item.price}
					image={item.image}
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
