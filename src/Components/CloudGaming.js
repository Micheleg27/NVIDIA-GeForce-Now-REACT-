import { Button } from './BasicComponents/Button';


export function CloudGaming() {
    return (
        <section>
            <div className="container cl-container">

                <h2 className="text-light" id="h2-cl-container">Cloud Gaming Su Tutti I Tuoi Dispositivi</h2>

                <p className="text-light" id="p-cl-container">GeForce NOW trasforma subito quasi ogni sistema laptop, desktop Mac,
                    SHIELD TV, dispositivo Android, iPhone o iPad nel potente PC di gioco che hai sempre sognato. Gioca con i titoli
                    per PC più esigenti facilmente su tutti i tuoi
                </p>

                <div className="d-flex justify-content-center" id="cl-logo-container">
                    <div className="d-flex" id="cl-container-mobile">
                        <div className="cl-img-container-home">
                            <div>
                                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-windows-pc-190x80.svg  " alt="" />
                                <h2 className="cl-h2-logo">PC Windows</h2>
                            </div>
                        </div>

                        <div className="cl-img-container-home">
                            <div>
                                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-mac-os-190x80.svg" alt="" />
                                <h2 className="cl-h2-logo">Mac OS</h2>
                            </div>
                        </div>

                        <div className="cl-img-container-home">
                            <div>
                                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-android-tv-190x80.svg" alt="" />
                                <h2 className="cl-h2-logo">Android TV</h2>
                            </div>
                        </div>

                        <div className="cl-img-container-home">
                            <div>
                                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-chrome-browser-190x80.svg" alt="" />
                                <h2 className="cl-h2-logo">Chrome</h2>
                            </div>

                        </div>
                    </div>

                    <div className="d-flex" id="cl-container-mobile">

                        <div className="cl-img-container-home">
                            <div>
                                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-android-190x80.svg" alt="" />
                                <h2 className="cl-h2-logo">Android</h2>
                            </div>
                        </div>

                        <div className="cl-img-container-home">
                            <div>
                                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-safari-browser-190x80.svg" alt="" />
                                <h2 className="cl-h2-logo">Safari</h2>
                                <p className="cl-p-logo">iPhone e iPad</p>
                            </div>
                        </div>

                        <div className="cl-img-container-home">
                            <div>
                                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/gfn-edge-icon.svg" alt="" />
                                <h2 className="cl-h2-logo">Edge</h2>
                                <p className="cl-p-logo">Beta</p>
                            </div>
                        </div>

                        <div className="cl-img-container-home">
                            <div>
                                <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-icon-lg-tv-190x80.svg" alt="" />
                                <h2 className="cl-h2-logo">LG TV</h2>
                                <p className="cl-p-logo">Seleziona modelli 2021</p>
                            </div>
                        </div>
                    </div>
                    <Button type="button" buttonSize="BTN--medium" buttonStyle="btn--primary--green">
                        Gioca ora
                    </Button>
                </div>

                {/* <div className="cl-btn-container">
                    <button className="cl-btn">Gioca ora</button>
                </div> */}
                {/* <Button type="button" buttonSize="BTN--medium" buttonStyle="btn--primary--green">
                    Gioca ora
                </Button> */}
            </div>
        </section>

    )
}