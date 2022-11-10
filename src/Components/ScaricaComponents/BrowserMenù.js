import { Button } from '../BasicComponents/Button';

function BrowserMenù() {
	return (
		<section className="sv-browser">
			<div className="sv-browser-text text-light">
				<h2>Esperienza con il browser</h2>
				<h3>Gioca senza download</h3>
			</div>

			<div className="sv-browser-icon">
				<div className="cl-img-container">
					<div style={{display:'flex' ,alignItems: 'center', flexDirection:'column'}}>
						<img
							className="sv-img-icon"
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-chrome-browser-190x80.svg"
							alt="chrome-img"
						/>
						<h2 className="cl-h2-logo">Chrome</h2>
						<p className="cl-p-logo">Chrome OS, PC e Mac</p>
					</div>

					<div className="sv-btn-container">
						<Button>Avvia</Button>
					</div>
				</div>

				<div className="cl-img-container">
					<div style={{display:'flex' ,alignItems: 'center', flexDirection:'column'}}>
						<img
							className="sv-img-icon"
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-safari-browser-190x80.svg"
							alt="safari-img"
						/>
						<h2 className="cl-h2-logo">iOS Safari</h2>
						<p className="cl-p-logo">iPhone e iPad</p>
					</div>

					<div className="sv-btn-container">
						<Button>Avvia</Button>
					</div>
				</div>

				<div className="cl-img-container">
					<div style={{display:'flex' ,alignItems: 'center', flexDirection:'column'}}>
						<img
							className="sv-img-icon"
							src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/gfn-edge-icon.svg"
							alt="edge-img"
						/>
						<h2 className="cl-h2-logo">Edge</h2>
						<p className="cl-p-logo">Beta</p>
					</div>
					<div className="sv-btn-container">
						<Button>Avvia</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrowserMenù;
