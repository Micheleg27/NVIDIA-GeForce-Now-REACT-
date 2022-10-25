import { Card } from "./BasicComponents/Card"
import { Button } from "./BasicComponents/Button"


export function NuoviGiochi() {
    return (
        <section id="MG-section-nuovi-giochi">
            <div id="MG-container-nuovi-giochi">
                <div id="MG-title-nuovi-giochi">
                    <h2 id="MG-paragraph-nuovi-giochi">
                        <p>NUOVI GIOCHI AGGIUNTI OGNI GIOVEDÌ</p>
                    </h2>
                    <p id="MG-paragraph-title">
                        Sintonizzati ogni settimana per il GFN Thursday: annunci settimanali
                        per i nuovi giochi, le funzionalità e le notizie più recenti, in
                        streaming dal cloud a te.
                    </p>
                </div>

                <div className="MG-cards-box">
                    <Card img={'https://blogs.nvidia.com/wp-content/uploads/2022/10/gfn-thursday-10-20-nv-blog-1280x680-no-cta.jpg'} title={'on Repeat: GFN Thursday Brings Loopmancer With RTX ON tothe Cloud'} date={'October 20, 2022'} description={'Investigate the ultimate truth this GFN Thursday with Loopmancer, now streaming to all members on GeForce NOW. Stuck in a death loop, RTX 3080 and Priority members can search for the truth with ...'} />
                    <Card img={'https://blogs.nvidia.com/wp-content/uploads/2022/10/gfn-thursday-9-29-nv-blog-1280x680-no-cta.jpg'} title={'GeForce NOW Streams High-Res, 120-FPS PC Gaming to World’s First Cloud Gaming Chromebooks'} date={'October 13, 2022'} description={'High-end PC gaming arrives on more devices this GFN Thursday. GeForce NOW RTX 3080 members can now stream their favorite PC games at up to 1600p and ...'} />
                    <Card img={'https://blogs.nvidia.com/wp-content/uploads/2022/10/gfn-thursday-10-6-nv-blog-1280x680-no-cta.jpg'} title={'Fall Into October With 25 New Games Streaming on GeForce NOW'} date={'October 06, 2022'} description={'Cooler weather, the changing colors of the leaves, the needless addition of pumpkin spice to just about everything, and discount Halloween candy are just ...'} />
                </div>
                <Button type="button" id='MG-btn' buttonSize="BTN--large" buttonStyle="btn--primary--green">
                    Mostra tutto
                </Button>
            </div>

        </section>
    )
}