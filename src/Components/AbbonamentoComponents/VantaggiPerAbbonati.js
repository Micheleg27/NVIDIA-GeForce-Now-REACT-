import { Title } from "../Title";

function VantaggiPerAbbonati() {
	return (
		<section className="vantaggi-abbonamenti text-light"> 
			<div className="container">
				<div className="title">
					<h2>VANTAGGI PER GLI ABBONATI</h2>
					<p>
						Quale abbonamento GeForce NOW è più adatto a te? Tutti gli utenti possono tranquillamente
						provare il PC gaming con un abbonamento gratuito. In alternativa, è possibile abbonarsi a un
						piano a pagamento per un'esperienza migliorata. Tutti i nostri abbonamenti a pagamento
						includono:
					</p>
				</div>

				<div className="fps">
					<div>
						<img
							className="fps-logo"
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/memberships/faster-frame-rate-icon.svg"
							alt="fps-logo"
						/>
					</div>
					<div>
						<h3>RISOLUZIONI PIÙ ELEVATE, FRAME RATE PIÙ VELOCI</h3>
						<p>
							Streaming direttamente dalle GPU GeForce RTX dal cloud per la massima qualità in tutti i
							giochi più recenti.
						</p>
					</div>
				</div>
				<div className="rtx-on">
					<div>
						<h3>RTX ON</h3>
						<p>
							Giocare su PC non è mai stato così entusiasmante con le fedeltà grafica del ray-tracing in
							tempo reale e le prestazioni straordinarie di IA e shading programmabile. Scopri il
							ray-tracing qui sotto.
						</p>
					</div>
					<div>
						<img
							className="rtx-logo"
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/memberships/icon-nvidia-rtx-d.png"
							alt="rtx-logo"
						/>
					</div>
				</div>
				<div className="accesso-veloce">
					<div>
						<img
							className="accesso-veloce-logo"
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/icon-instant-access-dl.png"
							alt="joypad-logo"
						/>
					</div>
					<div>
						<h3>ACCESSO PIÙ VELOCE AI SERVER DI GIOCO</h3>
						<p>
							Accedi ai tuoi giochi più velocemente e salta in testa alla coda quando inizi una partita.
						</p>
					</div>
				</div>
				<div className="durata-estesa">
					<div>
						<h3>DURATA ESTESA DELLE SESSIONI</h3>
						<p>Gioca per ore senza interruzioni: più libertà, più gloria, più tempo per giocare.</p>
					</div>
					<div>
						<img
							className="durata-estesa-logo"
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/icon-extended-play-dl.png"
							alt="video-logo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default VantaggiPerAbbonati;
