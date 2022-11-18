import { HeaderOne } from "./BasicComponents/HeaderOne"
import { HeaderTwo } from "./BasicComponents/HeaderTwo"

export function Title({h1title, h3title, titlecolor}){

    const style = ['title-color-white', 'title-color-black']

    const checkStyle = style.includes(titlecolor) ? titlecolor : style[0];

    return(
        <div className="container-title-header">
            <div className={`${checkStyle}`} >
                <HeaderOne className='title-header-one'>
                    {h1title}
                    <HeaderTwo className='title-header-two'>
                        {h3title}     
                    </HeaderTwo>  
                </HeaderOne> 
            </div>
        </div>
    )
}