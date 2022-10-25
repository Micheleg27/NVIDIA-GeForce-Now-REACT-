import List from './List';
import { INFORMAZIONI, RISORSE, SUPPORTO, LISTA_F_B, FREE, PRIORITY, RTX } from './Data';

export const ListFooter = () => {
	return (
		<div className="row text-md-left">
			<div className="row">
				<div className="col-xmd-6 col-md-5 col-xl-4 mx-auto mt-3">
					<List Links={INFORMAZIONI} title="INFORMAZIONI" />
				</div>
				<div className="col-xmd-6 col-md-5 col-xl-4 mx-auto mt-3">
					<List Links={RISORSE} title="RISORSE" />
				</div>
				<div className="col-xmd-6 col-md-5 col-xl-4 mt-3 margin-left">
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
		<div>
			<List Links={FREE}  />
		</div>
	);
};

export const PriorityCard = () => {
	return (
		<div>
			<List Links={PRIORITY}  />
		</div>
	);
};

export const RTXCard = () => {
	return (
		<div>
			<List Links={RTX}  />
		</div>
	);
};



