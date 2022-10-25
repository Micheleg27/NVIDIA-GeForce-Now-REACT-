import { Button } from './BasicComponents/Button';
import '../SASS/button.css';
import { FreeCard } from './BasicComponents/ListContainer';
import { PriorityCard } from './BasicComponents/ListContainer';
import { RTXCard } from './BasicComponents/ListContainer';

function CardAbbonamento() {

	return (
		<section className="container">
			<h2 className="text-light">SCEGLI UN PIANO ABBONAMENTO</h2>
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

                        <FreeCard  />

						<div className="ad-card-btn">
							<Button buttonSize="BTN--large" buttonStyle="BTN--secondary--outline">
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

						<div className="ad-price-option">
							<div className="tablinks ad-1mese ad-1mese-P" id="open">
								1 mese
							</div>
							<div className="tablinks ad-6mesi ad-6mesi-P">6 mesi</div>
						</div>

						<div id="seimesi" className="tabcontent ad-price">
							<p>
								49<sup>,99 € / 6 mesi</sup>
							</p>
							<div className="ad-text-content">
								<h3>MIGLIOR RAPPORTO QUALITà-PREZZO!</h3>
								<br />
								<span>Uguale 8,33 € / mese</span>
							</div>
						</div>

						<div id="unmese" className="tabcontent ad-price">
							<p>
								9<sup>,99 € / mese</sup>
							</p>
						</div>

                        <PriorityCard />

						<div className="ad-card-btn">
							<Button buttonSize="BTN--large" buttonStyle="BTN--primary--green">
								PARTECIPA
							</Button>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-6 col-lg-4">
					<div id="card-3080" className="card">
						<div className="ad-card-header-three">
							<h3>RTX 3080</h3>
						</div>

						<div className="ad-price-option">
							<div className="tabLinks ad-1mese ad-1mese-3080" id="openR">
								1 mese
							</div>
							<div className="tabLinks ad-6mesi ad-6mesi3080">6 mesi</div>
						</div>

						<div id="seimesi-RTX" className="tabContent tabcontent ad-price">
							<h3 className="AD-text">MASSIME PRESTAZIONI</h3>
							<p>
								99<sup>,99 € / 6 mesi</sup>
							</p>
							<div className="ad-text-content">
								<h3>MIGLIOR RAPPORTO QUALITÀ-PREZZO!</h3>
								<br />
								<span>Uguale 16,67 € / mese</span>
							</div>
						</div>

						<div id="unmese-RTX" className="tabContent ad-price">
							<h3 className="AD-text">MASSIME PRESTAZIONI</h3>
							<p>
								19<sup>,99 € / mese</sup>
							</p>
						</div>

                        <RTXCard />

						<div className="ad-card-btn">
							<Button buttonSize="BTN--large" buttonStyle="BTN--primary--green">
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
					<a href="#">Requisiti di sistema</a> per ulteriori dettagli.
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
					<a href="#">Termini di utilizzo di GeForce NOW</a> e i
					<a href="#">Termini di abbonamento a GeForce NOW</a> per ulteriori dettagli.
				</p>
			</footer>
		</section>
	);
}

export default CardAbbonamento;
