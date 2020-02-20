import React, {useContext} from 'react';

// Components
import Product from './Product';

// Context
import {ProductContext} from '../contexts/ProductContext';

const Products = () => {
	//When we do this, useContext is going to return value passed by our ProductContext Provider value prop. 
	//In our case we're getting back an object with two properties. A products property and a addItem property. 
	//We can go ahead and destructure those.
	const {products, addItem} = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
