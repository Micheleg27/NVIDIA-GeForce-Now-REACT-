export function CarouselGiochi() {


  return (
    <section className="d-flex justify-content-center" id="sect-giochi">
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            id="button"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            id="button"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            id="button"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            id="button"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            id="button"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" id="div-size-gfn">
            <div className="container-text-giochi">
              <h3 className="h3-sect-giochi">
                GFN Thursday
              </h3>
              <span id="span-sect-gfn" className="span-sect-giochi">
                Nuovi giochi aggiunti ogni giovedì
              </span>
            </div>

            <img
              src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/gfn-thursday-11-17-samsung-4k-c2s3-2560-d@2x.jpg"
              alt=""
              id="img-GFNThursday"
            />
          </div>

          <div className="carousel-item" id="div-size-genshin">
            <div className="container-text-giochi">
              <h3 className="h3-sect-giochi">Rumbleverse Season 2</h3>
              <span className="span-sect-giochi">
                {" "}
                Welcome to Low Key Key Island, Disponibile Ora
              </span>
            </div>

            <img
              src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/geforce-now-rumbleverse-s2-c2s3-2560-d.jpg"
              alt=""
              id="img-genshin"
            />
          </div>

          <div className="carousel-item" id="div-size-guildwars">
            <div className="container-text-giochi">
              <h3 className="h3-sect-giochi">Welcome to Carnage Hall</h3>
              <span className="span-sect-giochi">
                Dying Light 2 Bloody Ties, Disponibile Ora
              </span>
            </div>

            <img
              src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/geforce-now-dying-light-2-dlc-c2s3-2560-d.jpg"
              alt=""
              id="img-guildwars"
            />
          </div>

          <div className="carousel-item" id="div-size-legobrawls">
            <div className="container-text-giochi">
              <h3 className="h3-sect-giochi">A spiritual nightmare</h3>
              <span className="span-sect-giochi">
                {" "}
                <i>The Chant</i> disponibile ora{" "}
              </span>
            </div>

            <img
              src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/geforce-now-the-chant-c2s3-2560-d.jpg"
              alt=""
              id="img-legobrawls"
            />
          </div>

          <div className="carousel-item" id="div-size-saints">
            <div className="container-text-giochi">
              <h3 className="h3-sect-giochi">New Legend: Catalyst</h3>
              <span className="span-sect-giochi">
                {" "}
                <i>Apex Legends: Eclypse</i> Disponibile Ora{" "}
              </span>
            </div>

            <img
              src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/geforce-now-apex-legends-s15-c2s3-2560-d.jpg"
              alt=""
              id="img-saintsrow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}