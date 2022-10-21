export function FooterNero() {
    return (
        <footer className="pt-5 bg-black ad-padding">
            <hr id="hr" className="mb-4 text-light" />

            <div className="row text-md-left">
                <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h2 className="text-light">Informazioni</h2>
                    <hr className="mb-4 text-light" />
                    <ul className="list-unstyled">
                        <li><a href="#">Abbonamento</a></li>
                        <li className="list-group-item"><a href="#">Giochi</a></li>
                        <li className="list-group-item"><a href="#">Vantaggi principali della release</a></li>
                        <li className="list-group-item"><a href="#">Condizioni d'uso</a></li>
                    </ul>
                </div>

                <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h2 className="text-light">Risorse</h2>
                    <hr className="mb-4 text-light"/>
                        <ul className="list-unstyled">
                            <li><a href="#">Forum</a></li>
                            <li className="list-group-item"><a href="#">Prodotti consigliati</a></li>
                            <li className="list-group-item"><a href="#">Guida rapida per PC/Mac</a></li>
                            <li className="list-group-item"><a href="#">Guida Rapida per PC Android</a></li>
                        </ul>
                </div>

                <div className="col-xmd-6 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h2 className="text-light">Supporto</h2>
                    <hr className="mb-4 text-light"/>
                        <ul className="list-unstyled">
                            <li><a href="#">Stato del server</a></li>
                            <li><a href="#">Scarica</a></li>
                            <li className="list-group-item"><a href="#">FAQ</a></li>
                            <li className="list-group-item"><a href="#">Requisiti di Sistema</a></li>
                            <li className="list-group-item"><a href="#">Assistenza tecnica</a></li>
                        </ul>
                </div>
            </div>

            <div className="ad-subscribe">
                <div className="ad-subscribe-content">
                    <div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="36"
                            viewBox="0 0 48 36">
                            <image id="icon_mail_copy" data-name="icon mail copy" width="48" height="36"
                                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAMAAAD4m0k4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABnlBMVEWHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgCHwgAAAADqIFB3AAAAiHRSTlMAPqKqqKucL9zD8v383e77xqnO2fBFYfRSbfUDDgIPDF6QUA0SWJMIQI4qAQQznT8XHW7k6DEKadYFCUq3z1kGMqPt6XokK4fz55glwVQLX828VR6L4PeUNT2h/td9FUmv+tIWdtukcdCsTmU0md9/iY8HWr60TYLl2kOt+DoaE0djybDCPJ8umjQepgAAAAFiS0dEiRxhJswAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfgChgTJSW4Gs96AAABYklEQVQ4y2NgZGJmIRqwsrEzcHSQBDgZuDo6uHmIBNwdHbwMfB38AoKsRAEWIZ4OYaAGEVEGIoGYOFgDlwSxGiSlKNAgLYNXqaycLKoGeQVFJWXc6lVU1STUUTRodHTwaGppY1euo6vX0SGii6JBXwQYKcJiBtjUGxoZAyVNTFE0mJlbgOJRUN8SXbmVtQ1IxtbOHi2UHBydgOLOLq6o6t3cPYDCnl7eWIJVTABklI+vH5Jn/QOAQvyBQdjjITgkFCgdFh4BUx8ZFQ0UiImNwxlx8QmJQBVJ5slg/SmpQI5UWiS+mFZJzwC5KxOYvLLAnhXItiKQNHJyQb7Myy9wBoVBoRbhtFRUXALLLaVlqFGJK/F5l1eAlFemBONJfKigqpq/hqkWQxhP8q5T9a1nIEUDdjCqYVBpEGkgVkMjRAN/E2szUYA5A1QYg4t7bqIATzSouE8lrUJpYWhtI6XKym0HAEPUyge2kF93AAAAAElFTkSuQmCC">
                            </image>
                        </svg> */}
                    </div>
                    <div className="span">
                        <span>Iscriviti per ricevere le novità di GeForce NOW</span>
                    </div>

                    <div>
                        <button className="ad-registrati" onClick="showWindows(windowSubscribe)">REGISTRATI</button>
                    </div>

                    {/* <div className="ad-window-form">
                        <div className="overlay"></div>
                        <div className="ad-wf-container">
                            <div className="ad-wf-content">
                                <a href="index.html" id="ad-box-close">x</a>
                                <h2>SCOPRI LE ULTIME NOVITÀ DI GEFORCE NOW</h2>
                                <p>Iscriviti per ricevere offerte, annunci e altro su giochi e intrattenimento da NVIDIA.</p>
                                <form className=" was-validated">
                                    <div className="form-floating ad-mail">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="Email"/>
                                            <label for="floatingInput">Email</label>
                                            <div className="invalid-feedback">
                                                l'indirizzo Email è obbligatorio.
                                            </div>
                                    </div>
                                    <div className="ad-a-btn">
                                        <a href="https://www.nvidia.com/it-it/about-nvidia/privacy-policy/" target="_blank">Informativa sulla
                                            privacy NVIDIA</a>
                                        <button type="submit">INVIA</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="ad-social">
                    <div className="ad-facebook">
                        <a href="https://www.facebook.com/NVIDIAGeforceNow" target="_blank">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42px"
                                height="46px" viewBox="0 0 16 16" version="1.1">
                                <path fill="#444"
                                    d="M7.2 16v-7.5h-2v-2.7h2c0 0 0-1.1 0-2.3 0-1.8 1.2-3.5 3.9-3.5 1.1 0 1.9 0.1 1.9 0.1l-0.1 2.5c0 0-0.8 0-1.7 0-1 0-1.1 0.4-1.1 1.2 0 0.6 0-1.3 0 2h2.9l-0.1 2.7h-2.8v7.5h-2.9z" />
                            </svg> */}
                        </a>
                    </div>

                    <div className="ad-twitter">
                        <a href="https://twitter.com/NvidiaGFN" target="_blank">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="42px" height="46px" viewBox="0 0 24 24" fill="none">
                                <path fill="#444"
                                    d="M23.643 4.93701C22.808 5.30701 21.911 5.55701 20.968 5.67001C21.93 5.09401 22.668 4.18001 23.016 3.09201C22.116 3.62601 21.119 4.01401 20.058 4.22201C19.208 3.31801 17.998 2.75201 16.658 2.75201C14.086 2.75201 12 4.83801 12 7.41201C12 7.77601 12.042 8.13001 12.12 8.47201C8.24701 8.27701 4.81601 6.42201 2.51801 3.60401C2.11801 4.29401 1.88801 5.09401 1.88801 5.94601C1.88801 7.56201 2.71101 8.98901 3.96001 9.82401C3.19601 9.79901 2.47801 9.59001 1.85001 9.24101V9.30101C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95201C21.332 7.75201 21.327 7.55001 21.318 7.35001C22.228 6.69201 23.018 5.87301 23.641 4.94001L23.643 4.93701Z"
                                    fill="black" />
                            </svg> */}
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}