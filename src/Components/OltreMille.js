import { SliderContainer } from "./BasicComponents/sliderContainer";
import { Button } from "./BasicComponents/Button";
import { Title } from "./Title";


export function OltreMille() {
  return (
    <div id="div-oltre-mille">

<Title titlecolor='title-color-black' h1title={'OLTRE MILLE GIOCHI, PRONTI PER GIOCARE'} h3title={'GeForce NOW si connette ai game store digitali per PC e ti consente di trasmettere in streaming i giochi del tuo catalogo.'}/>

      <Button
        type="button"
        buttonSize="BTN--medium"
        buttonStyle="btn--primary--green"
      >
        Gioca ora
      </Button>
      <SliderContainer />
    </div>
  );
}
