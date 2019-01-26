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
			inventory: []
		};
	}
	componentDidMount() {
		Axios.get('/api/inventory')
			.then(res => {
				console.log('response', res);
				this.setState({ inventory: res.data });
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Dashboard 
				inventory ={this.state.inventory}
				/>

				<Form />
			</div>
		);
	}
}

export default App;
