import List from './List';
import { INFORMAZIONI, RISORSE, SUPPORTO, LISTA_F_B, FREE, PRIORITY, RTX, InformazioniSullAzienda, Seguici, NotizieEdEventi } from './Data';

export const ListFooter = () => {
	return (
		<div>
			<div className='row text-md-left'>
				<div className="col-md-6 col-lg-4 col-xl-4 mx-auto mt-3 ad-flex">
					<List Links={INFORMAZIONI} title="INFORMAZIONI" />
				</div>
				<div className="col-md-6 col-lg-4 col-xl-3 mx-auto mt-3 ad-flex">
					<List Links={RISORSE} title="RISORSE" />
				</div>
				<div className="col-xmd-6 col-lg-4 col-xl-3 mx-auto mt-3 ad-flex">
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

export const ListFooterST = () => {
	return (
		<div>
			<div className='row text-md-left'>
				<div className="col-md-6 col-lg-4 col-xl-4 mx-auto mt-3 ad-flex">
					<List Links={InformazioniSullAzienda} title="InformazioniSullAzienda" />
				</div>
				<div className="col-md-6 col-lg-4 col-xl-3 mx-auto mt-3 ad-flex">
					<List Links={Seguici} title="Seguici" />
				</div>
				<div className="col-xmd-6 col-lg-4 col-xl-3 mx-auto mt-3 ad-flex">
					<List Links={NotizieEdEventi} title="NotizieEdEventi" />
				</div>
			</div>
		</div>
	);
};