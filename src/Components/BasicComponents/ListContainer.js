import List from './List';
import { INFORMAZIONI, RISORSE, SUPPORTO, LISTA_F_B, FREE, PRIORITY, RTX } from './Data';
import { findByLabelText } from '@testing-library/react';

export const ListFooter = () => {
	return (
		<div className="text-md-left m-3">
			<div className="row">
				<div className="col-md-4 col-lg-4 col-xl-4 mt-3 ad-flex">
					<List Links={INFORMAZIONI} title="INFORMAZIONI" />
				</div>
				<div className="col-md-4 col-lg-4 col-xl-3 mt-3 ad-flex">
					<List Links={RISORSE} title="RISORSE" />
				</div>
				<div className="col-xmd-4 col-lg-4 col-xl-3 mt-3 ad-flex">
					<List Links={SUPPORTO} title="SUPPORTO" />
				</div>
			</div>
		</div>
	);
};

export const ListFooterBianco = () => {
	return (
		<div>
			<List Links={LISTA_F_B} />
		</div>
	);
};

export const FreeCard = () => {
	return (
		<div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
			<List Links={FREE}  />
		</div>
	);
};

export const PriorityCard = () => {
	return (
		<div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
			<List Links={PRIORITY}  />
		</div>
	);
};

export const RTXCard = () => {
	return (
		<div style={{display:'flex', alignItems:'center', justifyContent:'center' }}>
			<List Links={RTX}  />
		</div>
	);
};



