import { SupportoCard } from './SupportoCard';
import { SupportoCard2 } from './SupportoCard2';

export function SupportoCardContainer() {
	return (
		<section className="section-support">
			<div className="container-support">
				<div className="container-support-card">
					<SupportoCard
						link={'https://status.geforcenow.com/'}
						img={
							'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg'
						}
						title={'Stato del servizio'}
						paragraph={'Visualizza lo stato del servizio e dei server GeForce NOW in tutto il mondo.'}
					/>

					<SupportoCard
						link={'https://www.nvidia.com/it-it/geforce-now/download/'}
						img={
							'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/support/icon-download.svg'
						}
						title={'Scarica App'}
						paragraph={"Scarica l'ultima versione dell'App GeForce NOW per tutti i tuoi dispositivi."}
					/>

					<SupportoCard
						link={'/FAQ'}
						img={'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg'}
						title={'FAQ'}
						paragraph={'Trova le risposte alle domande più frequenti su GeForce NOW.'}
					/>
				</div>

				<div className="container-support-card" id="container-due">
					<SupportoCard2
						link="/RequisitiDiSistema"
						img={
							'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg'
						}
						title={'Requisiti di sistema'}
						paragraph={'Scopri i requisiti internet e di sistema per giocare con GeForce NOW.'}
					/>

					<SupportoCard2
						link={'https://www.nvidia.com/en-us/geforce/forums/gfn-beta-updates/20/'}
						img={'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/support/icon-forum.svg'}
						title={'Forum'}
						paragraph={
							'Entra in contatto con la community per discutere degli ultimi giochi, delle novità, di consigli e soluzioni.'
						}
					/>

					<SupportoCard2
						link={
							'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/geforce-geforce-now-mobile-qsg-mac-itIT.pdf'
						}
						img={
							'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/support/icon-quick-start-guide.svg'
						}
						title={'Guida rapida'}
						paragraph={'Scopri come iniziare subito a giocare con GeForce NOW su PC e Mac.'}
					/>

					<SupportoCard2
						link="/SupportoTecnico"
						img={'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/support/technical-support.svg'}
						title={'Supporto Tecnico'}
						paragraph={
							'Trova le risposte alle domande e ai problemi più frequenti. La nostra knowledge base è disponibile ogni giorno a tutte le ore.'
						}
					/>
				</div>
			</div>
		</section>
	);
}
