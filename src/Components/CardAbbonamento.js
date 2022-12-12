import { Button } from './BasicComponents/Button';
import '../SASS/button.css';
import { FreeCard } from './BasicComponents/ListContainer';
import { PriorityCard } from './BasicComponents/ListContainer';
import { RTXCard } from './BasicComponents/ListContainer';
import { Priority } from './Priority';
import { RTX } from './RTX';
import { Link, useNavigate } from 'react-router-dom';

function CardAbbonamento() {
	const navigate = useNavigate();
	return (
		<section className="container">
			<h2 className="text-light" id="">SCEGLI UN PIANO ABBONAMENTO</h2>
			<div className="row g-3">
				<div className="col-12 col-md-6 col-lg-4">
					<div className="card">
						<div className="ad-card-header">
							<h3>FREE</h3>
						</div>
						<div className="ad-price-option" />
						<div className="ad-price">
							<p>
								0<sup>,00 € / mese</sup>
							</p>
						</div>

						<FreeCard />

						<div className="ad-card-btn">
							<Button buttonSize="BTN--large" buttonStyle="BTN--secondary--outline" onClick={()=> navigate('/LogAbb')}>
								PARTECIPA
							</Button>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-6 col-lg-4">
					<div className="card">
						<div className="ad-card-header-two">
							<h3>PRIORITY</h3>
						</div>

						<Priority />

						<PriorityCard />

						<div className="ad-card-btn">
							<Button buttonSize="BTN--large" buttonStyle="BTN--primary--green" onClick={()=> navigate('/LogAbb')}>
								PARTECIPA
							</Button>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-12 col-lg-4">
					<div id="card-3080" className="card">
						<div className="ad-card-header-three">
							<h3>RTX 3080</h3>
						</div>

						<RTX />

						<RTXCard />

						<div className="ad-card-btn">
							<Button buttonSize="BTN--large" buttonStyle="BTN--primary--green" onClick={()=> navigate('/LogAbb')}>
								PARTECIPA
							</Button>
						</div>
					</div>
				</div>
			</div>

			<footer className="container">
				<p>
					*La prestazioni dipendono dal tipo di dispositivo, dalle impostazioni, dalla qualità della rete e
					non solo. Visita la pagina dei
					<Link to="#">Requisiti di sistema</Link> per ulteriori dettagli.
				</p>
				<p>
					La fatturazione per GeForce NOW inizia immediatamente dopo l'iscrizione a qualsiasi piano di
					abbonamento corrente.
				</p>
				<p>
					I piani di abbonamento a pagamento verranno fatturati su base mensile, semestrale o annuale, a
					seconda del piano selezionato, e si rinnoveranno automaticamente in base al ciclo di fatturazione
					previsto. Gli abbonamenti vengono annullati al momento della disdetta. Gli utenti possono disdire
					GeForce NOW in qualsiasi momento e continuare a giocare fino al termine del periodo di fatturazione
					corrente. Il costo dell'abbonamento viene addebitato interamente per tutto il periodo al momento
					dell'acquisto. Eventuali disdette sono effettive a partire dall'inizio del successivo periodo di
					fatturazione. Tutti i prezzi dei piani di abbonamento sono soggetti a tasse e imposte, dove
					previste. Le prestazioni del servizio e l'accesso ai giochi variano in base alle funzionalità
					Internet e/o ad altri ritardi del servizio. GeForce NOW utilizza GPU di livello server e altri
					componenti di sistema. Gli utenti potrebbero riscontrare una differenza nelle prestazioni rispetto
					all'uso di una GeForce RTX 3080 di livello consumer. Consulta i dettagli sui requisiti di sistema
					per la compatibilità specifica del dispositivo. Il servizio GeForce NOW non è disponibile in tutte
					le aree geografiche. Consulta i
					<Link to="#">Termini di utilizzo di GeForce NOW</Link> e i
					<Link to="#">Termini di abbonamento a GeForce NOW</Link> per ulteriori dettagli.
				</p>
			</footer>
		</section>
	);
}

export default CardAbbonamento;
