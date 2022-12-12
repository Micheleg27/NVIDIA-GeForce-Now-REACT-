import { TfiFacebook } from 'react-icons/tfi';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function SocialIcons() {
	return (
		<div className="mg-container-socialIcons">
			<Link to="https://www.facebook.com/NVIDIAGeforceNow">
				<TfiFacebook size="40px" color="grey" />
			</Link>
			<Link to="https://twitter.com/NvidiaGFN">
				<FaTwitter size="40px" color="grey" />
			</Link>
		</div>
	);
}
