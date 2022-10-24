import { MicroCard } from "./BasicComponents/MicroCard";

export function SoloGeforce() {

    return(
    <section id="AD-section-sologeforce">
        <div id="AD-container-title">
            <h2 id="AD-h2-title">SOLO SU GEFORCE NOW</h2>
        </div>

        <div className="mg-div-microcard">
        <MicroCard img={'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-cart-90x70.svg'} title={'Li hai comprati e sono tuoi'} paragraph={'Collega i tuoi store preferiti e gioca in streaming dal tuo catalogo. Acquista con il tuo account personale dello store e porta i tuoi giochi sempre con te.'} description={'Vedi giochi'} link={'https://www.nvidia.com/it-it/geforce-now/games/'} />
        <MicroCard img={"https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-broadcast-90x70.svg"} title={'Condividi le vittorie'} paragraph={'Da vittorie straordinarie a game over incredibili, tutti i tuoi momenti di gioco vengono salvati e condivisi con il mondo.'} description={'NVIDIA Highlights'} link={'https://nvidia.custhelp.com/app/answers/list/st/5/kw/GEfORCE%20NOW%20HIGHLIGHTS/page/1'} />
        <MicroCard img={ "https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-game-library-90x70.svg" } title={'Inizia a giocare'} paragraph={'Registrati a GeForce NOW e inizia a giocare gratis. O passa a un piano superiore un accesso più rapido ai nostri server di cloud gaming e sessioni di gioco più lunghe.'} description={'Vedi le opzioni di abbonamento'} link={'https://www.nvidia.com/it-it/geforce-now/?ncid=pa-srch-goog-614513#product-matrix'} />
        </div>
    </section>)
}