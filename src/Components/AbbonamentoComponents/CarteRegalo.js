import {Button} from '../BasicComponents/Button';

function CarteRegalo() {
	return (
		<section className="container text-light">
			<img
				className="ad-card-img"
				src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/gfn-giftcard-nv-gf-wmfg-1024-t@2x.jpg"
				alt="card-immagine"
			/>
			<img
				className="card-query"
				src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-now/memberships/gfn-giftcard-nv-gf-wmfg-640-p@2x.jpg"
				alt=""
			/>
			<div className="text">
				<h2>CARTE ABBONAMENTO REGALO</h2>
				<div className="text-p">
					<p>
						Sblocca il PC gaming ad alte prestazioni su tutti i tuoi dispositivi con GeForce NOW. Gioca con
						le attesissime nuove uscite, i giochi F2P più popolari e centinaia di giochi che già possiedi
						con RTX ON.
					</p>
					<p>Attiva l'abbonamento o regala il potente PC gaming a una persona speciale.</p>
				</div>
				<Button buttonSize="BTN--medium">
					<a id="ad-link-btn" href="#">
						SCOPRI DI PIù
					</a>
				</Button>
			</div>
		</section>
	);
}

export default CarteRegalo;
