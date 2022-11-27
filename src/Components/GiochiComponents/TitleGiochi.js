import { HeaderOne } from "../BasicComponents/HeaderOne";
import { HeaderTwo } from "../BasicComponents/HeaderTwo";

export function TitleGiochi({h4title, h6title, titlecolors}){

    const style = ['title-color-white', 'title-color-black']

    const checkStyle = style.includes(titlecolors) ? titlecolors : style[0];

    return(
        <div className="container-title-header-giochi">
            <div className={`${checkStyle}`} >
                <HeaderOne className='title-header-one-giochi'>
                    {h4title}
                    <HeaderTwo className='title-header-two-giochi'>
                        {h6title}
                    </HeaderTwo>
                </HeaderOne>
            </div>
        </div>
    )
}
