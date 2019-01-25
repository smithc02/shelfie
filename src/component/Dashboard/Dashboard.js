import React from 'react';
import Product from '../Product/Product';

const Dashboard = props => {
	return (
		<div>
			<Product />

			<p>
				{props.name}
			</p>
			<p>
				{props.price}
			</p>
			<p>
				{props.image}
			</p>
		</div>
	);
};
export default Dashboard;
