import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import ShoppingCart from './components/ShoppingCart';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

function App() {
	const [products] = useState(data);

	// Moved addItem to ProductContext
	// const addItem = item => {
	//	setCart ([...cart, item ]);
	// };

	return (
		<div className="App">
			<ProductProvider>
				<CartProvider>
					<Navigation />

					<Route exact path="/" component={products} />

					<Route
						path="/cart"
						render={() => <ShoppingCart />}
					/>

				</CartProvider>
			</ProductProvider>

		</div>
	);
}

export default App;
