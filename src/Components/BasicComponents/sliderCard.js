export function SliderCard(imageslider) {
    return (
                <div className="mgSlider">
                    <div className="mgSlide-track mgAnimation1">
                        <div className="mgSlide">
                            <img className="mgImg" src={imageslider} alt="banner1" />
                            <img className="mgImg" src={imageslider} alt="banner1" />
                            <img className="mgImg" src={imageslider} alt="banner1" />
                            <img className="mgImg" src={imageslider} alt="banner1" />
                        </div>
                    </div>
                </div>
    )
}