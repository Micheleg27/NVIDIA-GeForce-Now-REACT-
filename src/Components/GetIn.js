import Svg1Logo from '../Source/assetsGetIn/10028.svg'
import Svg2Logo from '../Source/assetsGetIn/10029.svg'
import Svg3Logo from '../Source/assetsGetIn/10030.svg'

export function GetIn() {

    return (
        <article className="rpArticleGetIn">

            <div className="rpTitleGetIn">
                <h2 className="rpH2GetIn">GET IN. GAME ON.</h2>
            </div>

            <div className="rpImagesContainerGetIn">
                <div className="rpFirstLogoGetIn">
                    <img src={Svg2Logo} alt="" />
                    <p className="rpNumbersGetIn">1</p>
                    <p className='pGetInColor'><a className="rpDescriptionGetIn" href="https://www.nvidia.com/it-it/geforce-now/memberships/">Crea il tuo account</a></p>
                </div>

                <div className="rpSecondLogoGetIn">
                    <img src={Svg3Logo} alt="" />
                    <p className="rpNumbersGetIn">2</p>
                    <p className='pGetInColor'><a className="rpDescriptionGetIn" href="https://www.nvidia.com/it-it/geforce-now/download/">Scarica l'app</a></p>
                </div>

                <div className="rpTHirdLogoGetIn">
                    <img src={Svg1Logo} alt="" />
                    <p className="rpNumbersGetIn">3</p>
                    <p ><a className="rpDescriptionGetIn" href="https://www.nvidia.com/it-it/geforce-now/games/">Collega il tuo catalogo di giochi</a></p>
                </div>
            </div>
        </article>
    )
}

