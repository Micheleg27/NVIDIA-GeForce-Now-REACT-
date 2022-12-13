import { TfiFacebook } from 'react-icons/tfi';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function SocialIcons() {
	return (
		<div className="mg-container-socialIcons">
			<a href="https://www.facebook.com/NVIDIAGeforceNow" target='_blank' rel='noreferrer'>
				<TfiFacebook size="40px" color="grey" />
			</a>
			<a href="https://twitter.com/NvidiaGFN" target='_blank' rel='noreferrer'>
				<FaTwitter size="40px" color="grey" />
			</a>
		</div>
	);
}
