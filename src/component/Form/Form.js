import React, { Component } from 'react';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			price: 0,
			imgurl: ''
		};
		
	}
	

	handleCancel = () => {
		this.setState({ name: ''})
		this.setState({price: 0})
		this.setState({imgurl:''})
		window.location.reload()
	};

	render() {
		console.log(this.state)
		return (
			<div>
				Form
				<button className="add-to-inventory">Add</button>
				<input
					className="image-url"
					placeholder="Image-URL"
					value={this.state.value}
					onChange={e => this.setState({ imgurl: e.target.value })}
				/>
				<input
					className="product-name"
					placeholder="Product"
					value={this.state.value}
					onChange={e => this.setState({ name: e.target.value })}
				/>
				<input
					className="price"
					type='number'
					placeholder="Price"
					value={this.state.value}
					onChange={e => this.setState({ price: e.target.value })}
					
					
				/>
				<button className="cancel" onClick={() => this.handleCancel()}>
					cancel
				</button>
			</div>
		);
	}
}
export default Form;
