import React from 'react';
import { ListFooterBianco } from './BasicComponents/ListContainer';

export default function FooterBianco() {
	return (
		<div className="d-flex justify-content-center bg-light">
			<div className="AD-content">
				<div className="ad-logo">
					<svg className="ad-nvidia-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 407.8 1000 184.4">
						<title>NVIDIA</title>
						<g>
							<path d="M987.1 555.7v-2.8h1.7c0.9 0 2.3 0.1 2.3 1.2 0 1.2-0.7 1.5-1.8 1.5H987.1M987.1 557.6h1.2l2.8 4.8h3l-3.1-5c1.5-0.1 2.9-0.8 2.9-3 0-2.7-1.8-3.5-4.9-3.5h-4.4v11.5h2.6L987.1 557.6M1000 556.7c0-6.8-5.2-10.7-11.1-10.7 -5.8 0-11.1 3.9-11.1 10.7 0 6.8 5.2 10.7 11.1 10.7S1000 563.5 1000 556.7M996.8 556.7c0 4.9-3.6 8.2-7.9 8.2l0 0c-4.4 0-7.9-3.3-7.9-8.2 0-4.9 3.6-8.2 7.9-8.2C993.2 548.6 996.8 551.9 996.8 556.7z" />
							<path d="M593.2 442.7v121.1h34.2V442.7H593.2zM324.4 442.5v121.2h34.5v-94.1l26.9 0.1c8.8 0 15 2.2 19.2 6.7 5.4 5.7 7.6 15.1 7.6 32v55.3H446v-66.9c0-47.8-30.5-54.3-60.2-54.3C385.8 442.5 324.4 442.5 324.4 442.5zM648.3 442.7v121.1h55.4c29.5 0 39.2-4.9 49.6-15.9 7.4-7.7 12.1-24.7 12.1-43.3 0-17-4-32.2-11.1-41.7 -12.5-16.9-30.8-20.2-58.1-20.2H648.3zM682.2 469h14.7c21.3 0 35.1 9.5 35.1 34.4 0 24.8-13.7 34.4-35.1 34.4h-14.7V469zM544 442.7l-28.5 95.9 -27.3-95.9h-36.9l39 121.1h49.2l39.3-121.1H544zM781.4 563.7h34.2v-121h-34.2V563.7zM877.2 442.7l-47.7 121h33.7l7.6-21.3h56.5l7.2 21.3h36.6l-48.2-121H877.2zM899.4 464.8l20.7 56.6H878L899.4 464.8z" />
							<path d="M103.9 462.8v-16.6c1.6-0.1 3.3-0.2 4.9-0.2 45.6-1.4 75.4 39.1 75.4 39.1s-32.2 44.8-66.8 44.8c-5 0-9.4-0.8-13.4-2.2v-50.5c17.7 2.2 21.3 10 32 27.7l23.7-20c0 0-17.3-22.7-46.5-22.7C110 462.3 106.9 462.5 103.9 462.8M103.9 407.8v24.8c1.6-0.1 3.3-0.2 4.9-0.3 63.3-2.2 104.6 51.9 104.6 51.9s-47.4 57.7-96.7 57.7c-4.5 0-8.7-0.4-12.7-1.1v15.4c3.4 0.4 7 0.7 10.6 0.7 46 0 79.2-23.5 111.4-51.2 5.3 4.3 27.2 14.7 31.7 19.2 -30.6 25.6-101.9 46.3-142.3 46.3 -3.9 0-7.6-0.2-11.3-0.6v21.6h174.7V407.8H103.9zM103.9 527.8v13.1c-42.5-7.6-54.3-51.8-54.3-51.8s20.4-22.6 54.3-26.3v14.4c0 0 0 0-0.1 0 -17.7-2.2-31.7 14.5-31.7 14.5S80 519.6 103.9 527.8M28.4 487.2c0 0 25.2-37.1 75.5-41v-13.5C48.2 437.2 0 484.4 0 484.4s27.3 79 103.9 86.3v-14.4C47.7 549.2 28.4 487.2 28.4 487.2z" />
						</g>
					</svg>

					<div className="ad-global-footer-region">
						<a id="a" href="https://www.nvidia.com/en-us/geforce-now/location-selector/" target="_self">
							<span className="ad-global-footer__region__label">IT - ITALIA</span>
						</a>
					</div>
				</div>

				<ul className="list-unstyled list-inline ul-align">
					<li className="list-inline-item">
						<a id="a" href="https://www.nvidia.com/it-it/about-nvidia/privacy-policy/">
							Privacy Notice <span id="ad-span">|</span>
						</a>
					</li>
					<li className="list-inline-item">
						<a id="a" href="https://www.nvidia.com/it-it/about-nvidia/privacy-center/">
							Gestisci la privacy <span id="ad-span">|</span>
						</a>
					</li>
					<li className="list-inline-item">
						<a id="a" href="https://www.nvidia.com/it-it/about-nvidia/legal-info/">
							Legali <span id="ad-span">|</span>
						</a>
					</li>
					<li className="list-inline-item">
						<a id="a" href="https://www.nvidia.com/it-it/about-nvidia/accessibility/">
							Accessibilità <span id="ad-span">|</span>
						</a>
					</li>
					<li className="list-inline-item">
						<a id="a" href="https://www.nvidia.com/it-it/security/">
							Sicurezza dei prodotti <span id="ad-span">|</span>
						</a>
					</li>
					<li className="list-inline-item">
						<a id="a" href="https://www.nvidia.com/it-it/contact/">
							Contatti
						</a>
					</li>
				</ul>

				{/* <ListFooterBianco /> */}
				
				<div className="ad-copyright text-dark">
					<p>Copyright © 2022 NVIDIA Corporation</p>
				</div>
			</div>
		</div>
	);
}
