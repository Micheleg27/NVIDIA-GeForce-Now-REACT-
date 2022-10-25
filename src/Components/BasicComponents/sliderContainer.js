import { SliderCard } from "./sliderCard";

export function SliderContainer(){

    return (
        <div className="mgSliderContainer">
            
            <SliderCard animations='mgSlide-track mgAnimation1' imageslider={'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/apps/1st-ld.png'} />
            <SliderCard animations='mgSlide-track mgAnimation2' imageslider={'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/apps/2nd-ld.png'} />
            <SliderCard animations='mgSlide-track mgAnimation3' imageslider={'https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/apps/3rd-ld.png'} />
        </div>
        
    )
}