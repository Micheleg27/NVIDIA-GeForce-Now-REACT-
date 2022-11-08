import { Title } from "./Title";
import ReactPlayer from "react-player";

export function TuttiGiocano() {

    return (
        <article className="rpGiocanoArticle">

            <Title titlecolor='title-color-white' h1title={'TUTTI GIOCANO'} h3title={'Guarda i tuoi streamer e YouTuber preferiti giocare ai migliori giochi per PC del mondo, in streaming dal cloud'}/>

            <ReactPlayer url='https://www.youtube.com/watch?v=S3vWMBSa5Z4' controls={true} playing={true} light={true} playerVars={false} style={{marginBottom : 75}}/>
        </article>
    )
}