import React from 'react';
import { Product } from '../BasicComponents/Data';
import SchedaProdotto from './SchedaProdotto';
import NavBianca from '../NavBianca';
import FooterBianco from '../FooterBianco';
import { NavNeraCart } from './NavNeraCart';
import { CarouselAcquista } from './CarouselAcquista';

function Amazon({ handleClick }) {
	return (
		<React.Fragment>
			<NavBianca />
			<NavNeraCart />
			<CarouselAcquista/>
			<div className="container">
				<section className="amazon-container text-center">
					{Product.map((item) => <SchedaProdotto key={item.id} item={item} handleClick={handleClick} />)}
				</section>
			</div>
			<FooterBianco />
		</React.Fragment>
	);
}

export default Amazon;