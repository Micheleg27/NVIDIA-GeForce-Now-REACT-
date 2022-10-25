export function SliderCard({imageslider,animations}) {
    return (
                <div className="mgSlider">
                    <div className={animations}>
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