import React from 'react';
import { Link } from 'react-router-dom';

function SystemRequired() {
	return (
		<section>
			<div className="container ad-position">
				<div>
					<div className="row text-md-left align-items-center">
						<div className="col-md-6 col-lg-4 col-xl-4 mx-auto mt-3 ad-flex">
							<img
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								data-src-desktop="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								data-src-desktop-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								data-src-laptop="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								data-src-laptop-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								data-src-tablet="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								data-src-tablet-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								data-src-mobile="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								data-src-mobile-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-sys-req.svg"
								className="responsive-image lazyloaded gf-games img-system"
								alt="icon-sys-req"
								title="Requisiti di sistema"
								data-analytics=""
								style={{ width: '80px' }}
							/>
							<div className="row">
								<Link
									id="a-due"
									to="https://www.nvidia.com/it-it/geforce-now/system-reqs/"
								>
									Scopri Di Più
								</Link>
								<br />
								<h3 className="text-light">Requisiti di Sistema</h3>
							</div>
						</div>

						<div className="col-md-6 col-lg-4 col-xl-3 mx-auto mt-3 ad-flex">
							<img
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								data-src-desktop="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								data-src-desktop-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								data-src-laptop="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								data-src-laptop-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								data-src-tablet="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								data-src-tablet-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								data-src-mobile="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								data-src-mobile-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-faqs.svg"
								className="responsive-image lazyloaded gf-games img-system"
								alt="icon-faqs"
								title="FAQ "
								data-analytics=""
								style={{ width: '80px' }}
							/>
							<div className="row">
								<Link id="a-due" to="https://www.nvidia.com/it-it/geforce-now/faq/">
									Scopri Di Più
								</Link>
								<br />
								<h3 className="text-light">FAQ</h3>
							</div>
						</div>

						<div className="col-xmd-6 col-lg-4 col-xl-3 mx-auto mt-3 ad-flex">
							<img
								src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								data-src-desktop="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								data-src-desktop-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								data-src-laptop="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								data-src-laptop-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								data-src-tablet="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								data-src-tablet-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								data-src-mobile="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								data-src-mobile-retina="/content/dam/en-zz/Solutions/gfn/webassets/overview/icon-server.svg"
								className="responsive-image lazyloaded img-system"
								alt="icon-server"
								title="Stato dei server"
								data-analytics=""
								style={{ width: '80px' }}
							/>
							<div className="row">
								<Link id="a-due" to="https://status.geforcenow.com/">
									Scopri Di Più
								</Link>
								<br />
								<h3 className="text-light">Stato Dei Server</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SystemRequired;
