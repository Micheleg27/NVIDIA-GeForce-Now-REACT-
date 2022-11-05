import { Button } from './BasicComponents/Button';
import '../SASS/button.css';

function CaroselloHome() {
	return (
		<section>
			<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button
						id="button"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						id="button"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
				</div>
				<div class="carousel-inner" id="carousel-id-new">
					<div class="carousel-item active">
						<div id="fortnite-banner" />
						<div class="sv-text position-absolute">
							<h3>Fornite: Pronti Per La Battaglia</h3>
							<span>Prestazioni GeForce Reali</span>
							<div class="sv-scopri-button">
							</div>
							<Button type="button" buttonSize="BTN--medium" buttonStyle="btn--primary--green" >
                                Scopri di più
                            </Button>
						</div>
					</div>
					<div class="carousel-item">
						<div id="video-header">
							<video id="video-dimension" autoPlay loop muted>
								<source
									src="https://images.nvidia.com/aem-dam/Solutions/gfn/webassets/overview/geforce-now-3080-tier-hero-feb-22-update-2560x770.webm"
									type="video/webm"
								/>
								<source
									src="https://images.nvidia.com/aem-dam/Solutions/gfn/webassets/overview/geforce-now-3080-tier-hero-feb-22-update-2560x770.mp4"
									type="video/mp4"
								/>
							</video>
						</div>
						<div class="sv-text position-absolute">
							<h3>Il futuro è ora</h3>
							<span>Potenza Classe GeForce RTX 3080</span>
							<div class="sv-scopri-button">
								<a href="#">SCOPRI DI PIU</a>
							</div>
                            <Button type="button" buttonSize="BTN--medium" buttonStyle="btn--primary--green" >
                                Registrati Ora
                            </Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CaroselloHome;
