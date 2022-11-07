import { TfiFacebook } from 'react-icons/tfi';
import { FaTwitter } from 'react-icons/fa';

export function SocialIcons() {
	return (
		<div className="mg-container-socialIcons">
			<a href="https://www.facebook.com/NVIDIAGeforceNow" target="_blank">
				<TfiFacebook size="40px" color="grey" />
			</a>
			<a href="https://twitter.com/NvidiaGFN" target="_blank">
				<FaTwitter size="40px" color="grey" />
			</a>
		</div>
	);
}
