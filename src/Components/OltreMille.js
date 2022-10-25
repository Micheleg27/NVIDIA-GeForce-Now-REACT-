import { SliderContainer } from "./BasicComponents/sliderContainer";
import { Button } from "./BasicComponents/Button";


export function OltreMille() {
  return (
    <div id="div-oltre-mille">
      <div id="title-oltre-mille">
        <h2 id="paragraph-oltre-mille">
          <p>OLTRE 1000 GIOCHI, PRONTI PER GIOCARE</p>
        </h2>
        <p id="paragraph-title">
          GeForce NOW si connette ai game store digitali per PC e ti consente di
          trasmettere in streaming i giochi del tuo catalogo.
        </p>
      </div>
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
