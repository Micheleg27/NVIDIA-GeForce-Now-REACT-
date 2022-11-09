import { Button } from "../BasicComponents/Button";

function ScaricaCloudGaming() {
	return (
		<div classNameNameName="cl-container">
			<div classNameName="text-container">
				<p id="p-cl-container">
					GeForce NOW è pronto: vieni e gioca! <br />
					Inizia a giocare direttamente dal browser supportato o scarica l'app GeForce NOW per un'esperienza
					ottimale.
				</p>
				<h2 id="h2-cl-container">App native</h2>
				<h3>La migliore esperienza complessiva</h3>
			</div>

			<div className="d-flex justify-content-center" id="cl-logo-container">
				<div className="d-flex" id="cl-container-mobile">
					<div className="cl-img-container">
						<div>
							<img
								id="img-icon"
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-windows-pc-190x80.svg "
								width="100px"
								alt="pc-img"
							/>
							<h2 className="cl-h2-logo">PC Windows</h2>
							<p className="cl-p-logo">Desktop e laptop</p>
							<div className="cl-btn-container">
								<Button buttonSize={'BTN--medium'}>
									Download
								</Button>
							</div>
						</div>
					</div>

					<div className="cl-img-container">
						<div>
							<img
								id="img-icon"
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-mac-os-190x80.svg"
								width="100px"
								alt="pc-img"
							/>
							<h2 className="cl-h2-logo">Mac OS</h2>
							<p className="cl-p-logo">iMac, MacBook e Mac Pro</p>
							<div className="cl-btn-container">
								<Button buttonSize={'BTN--medium'}>
									Download
								</Button>
							</div>
						</div>
					</div>

					<div className="cl-img-container">
						<div>
							<img
								id="img-icon"
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-android-190x80.svg"
								width="100px"
								alt="smartphone-img"
							/>
							<h2 className="cl-h2-logo">Android</h2>
							<p className="cl-p-logo">Telefono e tablet</p>
							<img
								id="playstore"
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/download/button-play-store%20cta.png"
								alt="android-img"
							/>
						</div>
					</div>
				</div>

				<div className="d-flex gap-div" id="cl-container-mobile">
					<div className="cl-img-container">
						<div>
							<img
								id="img-icon"
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-android-tv-190x80.svg"
								width="100px"
								alt="android-img"
							/>
							<h2 className="cl-h2-logo">Android TV</h2>
							<p className="cl-p-logo">Chromecast con Google TV, Sony TV e altro</p>
							<img
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/download/button-play-store%20cta.png"
								alt="android-img"
							/>
						</div>
					</div>

					<div className="cl-img-container">
						<div>
							<img
								id="img-icon"
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-lg-tv-190x80.svg"
								width="100px"
								alt="tv-img"
							/>
							<h2 className="cl-h2-logo">Smart TV</h2>
							<p className="cl-p-logo">Modelli 2021/2022 selezionati</p>
							<img
								id="img-icon"
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/download/Logo-B-White.png"
								width="150px"
								style={{marginBottom: '10px'}}
								alt="samsung-png"
							/>
							<img
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/download/LG_Content_Store_Logo-Edit-V3.svg"
								width="150px"
								alt="tv-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ScaricaCloudGaming;
