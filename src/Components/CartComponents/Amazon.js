import React, { useState } from 'react';
import { Product } from '../BasicComponents/Data';
import SchedaProdotto from './SchedaProdotto';
import NavBianca from '../NavBianca';
import FooterBianco from '../FooterBianco';

function Amazon() {
	const [ cart, setCart ] = useState([]);

	const handleClick = (item) => {
		if (cart.indexOf(item) !== -1) return;
		setCart([ ...cart, item ]);
	};

	return (
		<React.Fragment>
			<NavBianca />
			<section className="amazon-container">
				{Product.map((item) => <SchedaProdotto key={item.id} item={item} handleClick={handleClick} />)}
			</section>
			<FooterBianco />
		</React.Fragment>
	);
}

export default Amazon;
