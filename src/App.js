import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
// import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	// const [cart, setCart] = useState([]);

	// Move addItem moved to ProductContext?
	// const addItem = item => {
	//	// add the given item to the cart
	//	// Just tack it on with the spread operator
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
/*****
<ProductContext.Provider value={{ products, addItem }}>
<CartContext.Provider value={{ cart }}>
	<Navigation cart={cart} />

	{ Routes }
	<Route exact path="/" component={products} />

	<Route
		path="/cart"
		render={() => <ShoppingCart cart={cart} />}
	/>
</CartContext.Provider>
</ProductContext.Provider>
***/