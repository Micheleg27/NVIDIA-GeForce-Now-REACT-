import { Button } from './BasicComponents/Button';
import '../SASS/button.css';

function Alert() {
	return (
		<div className="alert alert-warning alert-dismissible fade show" role="alert">
			<div className="d-flex ad-alert-content">
				<div>
					<img
						src="https://cdn.pushcrew.com/img/logos/a163ceea8f15b516e29bb9f01b8d31dc/e3b4d0b4-fd89-4750-9e47-fa21a6473012.png"
						width="70px"
						alt=""
					/>
				</div>
				<div>
					<h3 className="text-dark">
						<strong>Push Notifications</strong>
					</h3>
					<p className="text-dark">
						Can we send you push notifications on the latest NVIDIA news, announcements and updates?
					</p>
				</div>
			</div>

			<div className="btn-alert-container">
				<button type="button" className="ad-btn-alert-one" data-bs-dismiss="alert" aria-label="Close">
					Not Now
				</button>
				<Button type="button" buttonSize="BTN--small" buttonStyle="btn--primary--green">
                Allow
                </Button>
			</div>
		</div>
	);
}

export default Alert;
