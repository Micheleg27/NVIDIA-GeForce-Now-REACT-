import List from './List';
import { INFORMAZIONI, RISORSE, SUPPORTO, LISTA_F_B } from './Data';

export const ListFooter = () => {
	return (
		<div className="row text-md-left">
			<div className="d-flex">
				<div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
					<List Links={INFORMAZIONI} title="INFORMAZIONI" />
				</div>
				<div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
					<List Links={RISORSE} title="RISORSE" />
				</div>
				<div className="col-xmd-6 col-lg-2 col-xl-2 mx-auto mt-3">
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