import List from './List';
import { INFORMAZIONI, RISORSE, SUPPORTO } from './Data';

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
