import { SliderCard } from "./sliderCard";

export function SliderContainer(){

    return (
        <div>
            <SliderCard imageslider={'src/Source/assetsSliders/slide1.png'} />
            <SliderCard imageslider={'src/Source/assetsSliders/slide2.png'} />
            <SliderCard imageslider={'src/Source/assetsSliders/slide3.png'} />
        </div>
    )
}