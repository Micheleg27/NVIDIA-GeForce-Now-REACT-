import { Title } from "./Title";

export function TuttiGiocano() {

    function playVid() {
        var vid = document.getElementById("myVideo");
        vid.play();
        document.getElementById("rpButton").style.display = "none";
    }

    return (
        <article className="rpGiocanoArticle">

            <Title titlecolor='title-color-white' h1title={'TUTTI GIOCANO'} h3title={'Guarda i tuoi streamer e YouTuber preferiti giocare ai migliori giochi per PC del mondo, in streaming dal cloud'}/>

            <section className="rpGiocanoSection">
                <video className="rpGiocanoVideo" id="myVideo"
                    src="https://images.nvidia.com/geforce-now/webassets/overview/gfn-3080-product-video-final.mp4" type="video/mp4"
                    controls>
                    Il tuo browser non supporta il video HTML.
                </video>
                <button className="rpButton" id="rpButton" onclick="playVid()">
                    <svg className="rpPlay bi bi-play" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    </svg>
                </button>
            </section>
        </article>
    )
}