import SvgSocialFB from '../Source/assets_socialIcons/fblogo.svg'
import SvgSocialTw from '../Source/assets_socialIcons/twlogo.svg'

export function SocialIcons() {
    return <div className="mg-container-socialIcons">
                <a href='http://www.facebook.com/nvidiageforcenow'><img className='mg-social-icons' src={SvgSocialFB} alt='fb-logo' /></a>
                <a href='http://www.twitter.com/nvidiagfn'><img className='mg-social-icons' src={SvgSocialTw} alt='tw-logo' /></a>
    </div>
}