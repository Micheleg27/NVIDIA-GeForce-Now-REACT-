function Citazioni() {
    return ( 
        <section className="sv-citazioni d-flex justify-content-center">
        <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button id="button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"
              data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button id="button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"
              data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button id="button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"
              data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button id="button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"
              data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="sv-text-container carousel-item active">
              <p className="sv-text" style={{fontSize:'25px'}}>
                "GEFORCE NOW’s 3080 tier seems to be the new gold standard for cloud gaming tech"
                <span class="d-flex justify-content-center">
                  <a id="a-due" href="#">- 9to5 Google</a>
                </span>
              </p>
            </div>
            <div className="sv-text-container carousel-item">
              <p className="sv-text" style={{fontSize:'25px'}}>
                "I felt like I was playing a brand-new AAA video game natively on my phone"
                <span className="d-flex justify-content-center">
                  <a id="a-due" href="#">- Digital Trends</a>
                </span>
              </p>
            </div>
            <div className="sv-text-container carousel-item">
              <p className="sv-text" style={{fontSize:'25px'}}>
                "NVIDIA is quite literally taking its cloud game streaming service, GEFORCE NOW, to the next level."
                <span className="d-flex justify-content-center">
                  <a id="a-due" href="#">- Hot Hardware</a>
                </span>
              </p>
            </div>
            <div className="sv-text-container carousel-item">
              <p className="sv-text" style={{fontSize:'25px'}}>
                "On my 4K TV, with a gamepad in hand, the 2160p/60 FPS gaming sensation was absolutely incredible."
                <br />
                <span>
                  <a id="a-due" className="d-flex justify-content-center" href="#">- Ars Technical</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
     );
}

export default Citazioni;