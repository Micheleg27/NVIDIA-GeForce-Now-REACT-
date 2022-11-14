import { BiUserCircle } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
// import { flash } from "react-animations";
// import styled, { keyframes } from "styled-components";
import useShow from "./BasicComponents/useShow";
import { useEffect } from "react";

export default function NavBianca() {
  // const Flash = styled.ul`
  //   animation: 0.5s ${keyframes`${flash}`};
  // `;
  // const Flash2 = styled.ul`
  //   animation: 1s ${keyframes`${flash}`};
  // `;
  // const Flash3 = styled.ul`
  //   animation: 1.5s ${keyframes`${flash}`};
  // `;
  // const Flash4 = styled.ul`
  //   animation: 2s ${keyframes`${flash}`};
  // `;

  // const { show, setShow } = useShow();

  // useEffect(() => {
  //   setInterval(() => {
  //     setShow(true);
  //   }, 2000);
  // }, []);

  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg navcolor">
        <div className="container-fluid" style={{ width: "1400px" }}>
          <div>
            <div className="btn-doppio">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbarr"
                aria-controls="offcanvasNavbarr"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <svg
                id="lente1"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>

          <div id="sv-logo-nvidia">
            <svg
              enable-background="new 0 0 974.7 179.7"
              version="1.1"
              viewBox="0 0 974.7 179.7"
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="44"
            >
              <title>
                Leadership nell'elaborazione basata su intelligenza artificiale
                con NVIDIA
              </title>
              <path d="m962.1 144.1v-2.7h1.7c0.9 0 2.2 0.1 2.2 1.2s-0.7 1.5-1.8 1.5h-2.1m0 1.9h1.2l2.7 4.7h2.9l-3-4.9c1.5 0.1 2.7-1 2.8-2.5v-0.4c0-2.6-1.8-3.4-4.8-3.4h-4.3v11.2h2.5v-4.7m12.6-0.9c0-6.6-5.1-10.4-10.8-10.4s-10.8 3.8-10.8 10.4 5.1 10.4 10.8 10.4 10.8-3.8 10.8-10.4m-3.2 0c0.2 4.2-3.1 7.8-7.3 8h-0.3c-4.4 0.2-8.1-3.3-8.3-7.7s3.3-8.1 7.7-8.3 8.1 3.3 8.3 7.7c-0.1 0.1-0.1 0.2-0.1 0.3z" />
              <path d="m578.2 34v118h33.3v-118h-33.3zm-262-0.2v118.1h33.6v-91.7l26.2 0.1c8.6 0 14.6 2.1 18.7 6.5 5.3 5.6 7.4 14.7 7.4 31.2v53.9h32.6v-65.2c0-46.6-29.7-52.9-58.7-52.9h-59.8zm315.7 0.2v118h54c28.8 0 38.2-4.8 48.3-15.5 7.2-7.5 11.8-24.1 11.8-42.2 0-16.6-3.9-31.4-10.8-40.6-12.2-16.5-30-19.7-56.6-19.7h-46.7zm33 25.6h14.3c20.8 0 34.2 9.3 34.2 33.5s-13.4 33.6-34.2 33.6h-14.3v-67.1zm-134.7-25.6l-27.8 93.5-26.6-93.5h-36l38 118h48l38.4-118h-34zm231.4 118h33.3v-118h-33.3v118zm93.4-118l-46.5 117.9h32.8l7.4-20.9h55l7 20.8h35.7l-46.9-117.8h-44.5zm21.6 21.5l20.2 55.2h-41l20.8-55.2z" />
              <path
                fill="#76B900"
                d="m101.3 53.6v-16.2c1.6-0.1 3.2-0.2 4.8-0.2 44.4-1.4 73.5 38.2 73.5 38.2s-31.4 43.6-65.1 43.6c-4.5 0-8.9-0.7-13.1-2.1v-49.2c17.3 2.1 20.8 9.7 31.1 27l23.1-19.4s-16.9-22.1-45.3-22.1c-3-0.1-6 0.1-9 0.4m0-53.6v24.2l4.8-0.3c61.7-2.1 102 50.6 102 50.6s-46.2 56.2-94.3 56.2c-4.2 0-8.3-0.4-12.4-1.1v15c3.4 0.4 6.9 0.7 10.3 0.7 44.8 0 77.2-22.9 108.6-49.9 5.2 4.2 26.5 14.3 30.9 18.7-29.8 25-99.3 45.1-138.7 45.1-3.8 0-7.4-0.2-11-0.6v21.1h170.2v-179.7h-170.4zm0 116.9v12.8c-41.4-7.4-52.9-50.5-52.9-50.5s19.9-22 52.9-25.6v14h-0.1c-17.3-2.1-30.9 14.1-30.9 14.1s7.7 27.3 31 35.2m-73.5-39.5s24.5-36.2 73.6-40v-13.2c-54.4 4.4-101.4 50.4-101.4 50.4s26.6 77 101.3 84v-14c-54.8-6.8-73.5-67.2-73.5-67.2z"
              />
            </svg>
          </div>

          <div
            className="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbarr"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-body">
              <div className="d-flex align-items-center">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                    <li className="nav-item">
                      <a
                        id="a"
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Prodotti
                      </a>
                    </li>



                    <li className="nav-item">
                      <a id="a" className="nav-link" href="#">
                        Soluzioni
                      </a>
                    </li>



                    <li className="nav-item">
                      <a id="a" className="nav-link" href="#">
                        Settori
                      </a>
                    </li>



                    <li>
                      <a id="a" className="nav-link" href="#">
                        Per Te
                      </a>
                    </li>

                </ul>

                {/* <div onclick="showMenu()" class="x-close-menù">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div> */}
                
                  <div class="carel-right" onclick="showmenu()">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                      id="menu-arrow"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                

                {/* <span onclick="showmenu()" class="text-menù">
                  Menù
                </span> */}
              </div>

              <div class="d-flex">
                <ul class="navbar-nav justify-content-end">
                  <li>
                    <a
                      id="a"
                      class="nav-link"
                      href="https://www.nvidia.com/it-it/shop/"
                    >
                      Acquista
                    </a>
                  </li>
                  <li>
                    <a id="a" class="nav-link" href="">
                      Driver
                    </a>
                  </li>
                  <li>
                    <a id="a" class="nav-link" href="">
                      Assistenza
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <svg
              style={{ cursor: "pointer" }}
              id="lente2"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>

            <div class="dropstart">
              <div
                class=" dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsCart3 size="25px" style={{ cursor: "pointer" }} />
              </div>
              <ul className="dropdown-menu cart">
                <div className="triangle" />
                <li className="cart-content">
                  <h2>CART</h2>
                  <button type="button" class="btn-close" aria-label="Close" />
                </li>
                <li className="cart-text">
                  <p>Il carrello è vuoto.</p>
                </li>
              </ul>
            </div>

            <a href="https://www.nvidia.com/it-it/account/edit-profile/">
              <BiUserCircle size="25px" style={{ cursor: "pointer", color: 'black' }} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
