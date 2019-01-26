import React from 'react';
import Product from '../Product/Product';

const Dashboard = props => {
	

	props.inventory.map((product, i) => {
		return (
			<Product
				key={i}
				name={product.name}
				price={product.price}
				image={product.image}
			/>
		);
	});

	return (
		<div>
			
		</div>
	);
};
export default Dashboard;
