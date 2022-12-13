import React from "react";
import { Button } from '../BasicComponents/Button';

export function CarouselAcquista(){
    return(
        <React.Fragment>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						id="button"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="prev"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						id="button"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="next"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
					<button
						id="button"
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide="next"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					/>
				</div>

				<div className="carousel-inner ">
					<div className="carousel-item active dimensioni-carousel" id="div-size-gfn">
						<div className="container-text-giochi">
							<h3 className="h3-sect-giochi">Regalati un upgrade</h3>
							<span id="span-sect-gfn" className="span-sect-giochi">
								Gioca e crea con GeForce e NVIDIA Studio
							</span>
							<div className="mt-3">
								<Button buttonSize="BTN--medium">Esplora tutto</Button>
							</div>
						</div>

						<img
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/mfg/geforce-holiday22-eco-nv-gf-wmfg-1024-t@2x.jpg"
							alt=""
							className="img-sect-giochi"
						/>
						<img
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/mfg/geforce-holiday22-eco-nv-gf-wmfg-640-p@2x.jpg"
							alt=""
							className="img-sect-giochi-query"
						/>
					</div>

					<div className="carousel-item dimensioni-carousel" id="div-size-genshin">
						<div className="container-text-giochi">
							<h3 className="h3-sect-giochi">OLTRE LA VELOCITÀ</h3>
							<span className="span-sect-giochi">GeForce RTX serie 40</span>
							<div className="mt-3">
								<Button buttonSize="BTN--medium">Scopri di più</Button>
							</div>
						</div>

						<img
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/gtcf22/shop-emea/geforce-ada-40-series-nv-gf-wmfg-1024-t@2x.jpg"
							alt=""
							className="img-sect-giochi"
						/>
						<img
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/gtcf22/shop-emea/geforce-ada-40-series-nv-gf-wmfg-640-p@2x.jpg"
							alt=""
							className="img-sect-giochi-query"
						/>
					</div>

					<div className="carousel-item dimensioni-carousel" id="div-size-guildwars">
						<div className="container-text-giochi">
							<h3 className="h3-sect-giochi">Sali di livello con RTX</h3>
							<span className="span-sect-giochi">
								Ottieni Warhammer 40,000: Darktide - Imperial Edition con prodotti selezionati GeForce
								RTX Serie 30*
							</span>
							<div className="mt-3">
								<Button buttonSize="BTN--medium">Acquista ora</Button>
							</div>
						</div>

						<img
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/mfg/grd-warhammer-40k-darktide-nv-gf-wmfg-1024-t@2x.jpg"
							alt=""
							className="img-sect-giochi"
						/>
						<img
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/homepage/mfg/grd-warhammer-40k-darktide-nv-gf-wmfg-640-p@2x.jpg"
							alt=""
							className="img-sect-giochi-query"
						/>
					</div>
				</div>
			</div>
        </React.Fragment>
    )
}