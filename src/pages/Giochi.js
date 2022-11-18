import React from "react";
import { AccordionItem, AccordionList } from "../Components/BasicComponents/AccordionItem";
import FooterBianco from "../Components/FooterBianco";
import { FooterNero } from "../Components/FooterNero";
import NavBianca from "../Components/NavBianca";
import { NavNera } from "../Components/NavNera";
import { Title } from "../Components/Title";
import { AccordionElement } from "../Components/BasicComponents/AccordionElement";

export function Giochi() {
  return (
    <React.Fragment>
      <NavBianca />
      <NavNera />

      {/* Carosello pagina giochi */}

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
              <h3 id="h3-sect-gfn" className="h3-sect-giochi">
                GFN Thursday
              </h3>
              <span id="span-sect-gfn" className="span-sect-giochi">
                Nuovi giochi aggiunti ogni giovedì
              </span>
              <img
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/gfn-thursday-11-17-samsung-4k-c2s3-2560-d@2x.jpg"
                alt=""
                id="img-GFNThursday"
              />
            </div>

            <div className="carousel-item" id="div-size-genshin">
              <h3 id="h3-sect-genshin">Rumbleverse Season 2</h3>
              <span id="span-sect-genshin">
                {" "}
                Welcome to Low Key Key Island, Disponibile Ora
              </span>
              <img
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/geforce-now-rumbleverse-s2-c2s3-2560-d.jpg"
                alt=""
                id="img-genshin"
              />
            </div>

            <div className="carousel-item" id="div-size-guildwars">
              <h3 id="h3-sect-guildwars">Welcome to Carnage Hall</h3>
              <span id="span-sect-guildwars">
                Dying Light 2 Bloody Ties, Disponibile Ora
              </span>
              <img
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/geforce-now-dying-light-2-dlc-c2s3-2560-d.jpg"
                alt=""
                id="img-guildwars"
              />
            </div>

            <div className="carousel-item" id="div-size-legobrawls">
              <h3 className="h3-sect-giochi">A spiritual nightmare</h3>
              <span className="span-sect-giochi">
                {" "}
                <i>The Chant</i> disponibile ora{" "}
              </span>
              <img
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/geforce-now-the-chant-c2s3-2560-d.jpg"
                alt=""
                id="img-legobrawls"
              />
            </div>

            <div className="carousel-item" id="div-size-saints">
              <h3 className="h3-sect-giochi">New Legend: Catalyst</h3>
              <span className="span-sect-giochi">
                {" "}
                <i>Apex Legends: Eclypse</i> Disponibile Ora{" "}
              </span>
              <img
                src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/games/geforce-now-apex-legends-s15-c2s3-2560-d.jpg"
                alt=""
                id="img-saintsrow"
              />
            </div>
          </div>
        </div>
      </section>

      <div className='title-giochi-container'>
        <Title h1title={"I tuoi giochi. Dove vuoi."} />

        <Title
          h1title={"Nuovi giochi aggiunti ogni GFN Thursday"}
          h3title={
            "GeForce NOW si connette ai game store digitali per PC e ti consente di trasmettere in streaming i giochi del tuo catalogo. Per ogni evento GFN Thursday - il giorno dedicato alle novità, tra giochi, funzionalità e notizie - nuovi giochi vengono aggiunti al nostro catalogo*."
          }
        />
      </div>


        {/* Search Bar */}

        <div id="div-bar-games">
            <input type="text" name="" id="search-bar-games" placeholder="Game Search" /><label for="" />
        </div>

        <AccordionElement >
            <AccordionItem accordionKey={'0'} accordionHeader={'Ciao'} accordionBody={'Ciao a tutti'}/>
            <AccordionItem accordionKey={'1'} accordionHeader={'Ciao'} accordionBody={'Ciao a tutte'}/>
        </AccordionElement>

      {/* Accordion */}

      <section class="catalog bg-black">
        <h2 class="check">Check our games'list!</h2>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item bg-black">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                0/9 - D
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div class="div-accordion">
                  <section>
                    <h3 class="h3-alphabetic-list">0 - 9</h3>
                    <br />
                    7 Days to Die (Steam) <br />
                    41 Hours (Steam) <br />
                    428: Shibuya Scramble (Steam)
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">A</h3>
                    <br />
                    A-Train: All Aboard! Tourism (Steam) <br />
                    A-Train PC Classic (Steam) <br />
                    ABRISS - build to destroy (Steam) <br />
                    Absolute Drift: Zen Edition (Epic Games Store) <br />
                    Absolver (Steam) <br />
                    Achilles: Legends Untold (Steam)
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">B</h3>
                    <br />
                    Backbone (Epic Games Store, Steam) <br />
                    Backbone: Prologue Bad North: Jotunn Edition (Epic Games
                    Store, Steam) <br />
                    Bakery Simulator (Steam) <br />
                    Banners of Ruin (Epic Games Store, Steam)
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">C</h3>
                    <br />
                    Cake Bash (Steam) <br />
                    Caliber (1C Company) <br />
                    Call of Cthulhu® (Steam) <br />
                    Call of Juarez® Gunslinger (Steam) <br />
                    Call of the Sea (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">D</h3>
                    <br />
                    Cake Bash (Steam) <br />
                    Caliber (1C Company) <br />
                    Call of Cthulhu® (Steam) <br />
                    Call of Juarez® Gunslinger (Steam) <br />
                    Call of the Sea (Steam) <br />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSecond">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSecond"
                aria-expanded="false"
                aria-controls="flush-collapseSecond"
              >
                E - I
              </button>
            </h2>
            <div
              id="flush-collapseSecond"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSecond"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div class="div-accordion">
                  <section>
                    <h3 class="h3-alphabetic-list">E</h3>
                    <br />
                    Earth 2160 (Steam) <br />
                    EARTH DEFENSE FORCE®: IRON RAIN™ (Steam) <br />
                    EARTH DEFENSE FORCE: WORLD BROTHERS (Steam) <br />
                    EARTH DEFENSE FORCE 4.1 The Shadow of New Despair (Steam)
                    <br />
                    EARTH DEFENSE FORCE 4.1 WINGDIVER THE SHOOTER (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">F</h3>
                    <br />
                    F.I.S.T.: Forged In Shadow Torch (Steam) <br />
                    F1® Manager 2022 (Epic Games Store, Steam) <br />
                    Factorio (Steam) <br />
                    Fade to Silence (Steam) <br />
                    The Falconeer (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">G</h3>
                    <br />
                    Galactic Civilizations III (Epic Games Store, Steam) <br />
                    Galactic Civilizations® II: Ultimate Edition (Steam) <br />
                    Gamedec (Epic Games Store, Steam) <br />
                    Garfield Kart - Furious Racing (Steam) <br />
                    Garry's Mod (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">H</h3>
                    <br />
                    Hacknet (Steam) <br />
                    Hakuoki: Kyoto Winds (Steam) <br />
                    Half-Life® (Steam) <br />
                    Half-Life® 2 (Steam) <br />
                    Half-Life 2: Deathmatch (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">I</h3>
                    <br />
                    ICARUS (Steam) <br />
                    Idle Big Devil (Steam) <br />
                    Idle Champions of the Forgotten Realms (Steam) <br />
                    Imagine Earth (Steam) <br />
                    Immortal Life (Steam) <br />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThird">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThird"
                aria-expanded="false"
                aria-controls="flush-collapseThird"
              >
                J - N
              </button>
            </h2>
            <div
              id="flush-collapseThird"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThird"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div class="div-accordion">
                  <section>
                    <h3 class="h3-alphabetic-list">J</h3>
                    <br />
                    Jack Orlando: Director's Cut (Steam) <br />
                    Jagged Alliance 2 - Wildfire (Steam) <br />
                    Jagged Alliance - Back in Action (Steam) <br />
                    Jupiter Hell (Steam) <br />
                    Jurassic World Evolution™ (Epic Games Store, Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">K</h3>
                    <br />
                    KartKraft™ (Steam) <br />
                    Kathy Rain (Steam) <br />
                    Kathy Rain: Director's Cut (Steam) <br />
                    Kena: Bridge of Spirits (Epic Games Store) <br />
                    Kenshi (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">L</h3>
                    <br />
                    Labyrinth of Refrain: Coven of Dusk (Steam) <br />
                    Labyrinthine Dreams (Steam) <br />
                    LARA CROFT AND THE TEMPLE OF OSIRIS™ (Steam) <br />
                    Last Call BBS (Steam) <br />
                    Last Epoch (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">M</h3>
                    <br />
                    Magic the Gathering: Arena (Wizards of the Coast, Epic Games
                    Store) <br />
                    Magicka 2 (Steam) <br />
                    Main Assembly (Steam) <br />
                    Maneater (Epic Games Store, Steam) <br />
                    MapleStory (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">N</h3>
                    <br />
                    NARAKA: BLADEPOINT (Epic Games Store, Steam) <br />
                    Narita Boy (Steam) <br />
                    NASCAR 21: Ignition (Steam) <br />
                    NASCAR Heat 3 (Steam) <br />
                    Necromunda: Hired Gun (Epic Games Store, Steam) <br />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFourth">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFourth"
                aria-expanded="false"
                aria-controls="flush-collapseFourth"
              >
                O - S
              </button>
            </h2>
            <div
              id="flush-collapseFourth"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFourth"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div class="div-accordion">
                  <section>
                    <h3 class="h3-alphabetic-list">O</h3>
                    <br />
                    Oaken (Steam) <br />
                    Obduction® (Epic Games Store) <br />
                    Observation (Epic Games Store, Steam) <br />
                    Observer: System Redux (Epic Games Store, Steam) <br />
                    Occupy White Walls (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">P</h3>
                    <br />
                    Pacify (Steam) <br />
                    Paint the Town Red (Steam) <br />
                    Paladins® (Epic Games Store, Steam) <br />
                    Panzer Corps 2 (Epic Games Store, Steam) <br />
                    Papers, Please (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">Q</h3>
                    <br />
                    Q.U.B.E. 10th Anniversary (Steam) <br />
                    Q.U.B.E. 2 (Steam) <br />
                    Quest Hunter (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">R</h3>
                    <br />
                    R-Type Final 2 (Steam) <br />
                    Raft (Steam) <br />
                    RAID: World War II (Steam) <br />
                    Railroad Corporation (Steam) <br />
                    Railway Empire (Epic Games Store, Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">S</h3>
                    <br />
                    Sable (Epic Games Store, Steam) <br />
                    Sabotaj (Steam) <br />
                    Sacred 2 Gold (Steam) <br />
                    Sacred 3 (Steam) <br />
                    Saints Row 2 (Steam) <br />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFifth">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFifth"
                aria-expanded="false"
                aria-controls="flush-collapseFifth"
              >
                T - X
              </button>
            </h2>
            <div
              id="flush-collapseFifth"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFifth"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div class="div-accordion">
                  <section>
                    <h3 class="h3-alphabetic-list">T</h3>
                    <br />
                    Tabletop Simulator (Steam) <br />
                    Tacoma (Epic Games Store, Steam) <br />
                    Tainted Grail: Conquest (Steam) <br />
                    Tale of Immortal (Steam) <br />
                    Tale of Wuxia (侠客风云传) (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">U</h3>
                    <br />
                    UBOAT (Steam) <br />
                    Ultimate Chicken Horse (Steam) <br />
                    Ultimate Fishing Simulator (Steam) <br />
                    Ultimate Fishing Simulator 2 (Steam) <br />
                    ULTRAKILL (Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">V</h3>
                    <br />
                    V-Rally 4 (Steam) <br />
                    Valheim (Steam) <br />
                    Valiant Hearts: The Great War™ (Ubisoft Connect) <br />
                    Valley (Steam) <br />
                    Vampire: The Masquerade® Swansong (Epic Games Store) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">W</h3>
                    <br />
                    Wanba Warriors (Steam) <br />
                    War of Rights (Steam) <br />
                    War Robots (Steam) <br />
                    War Thunder (Gaijin Entertainment, Steam) <br />
                    Warface (Mail.ru Group, Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">X</h3>
                    <br />
                    X3: Albion Prelude (Steam) <br />
                    X3: Farnham's Legacy (Steam) <br />
                    X3: Reunion (Steam) <br />
                    X3: Terran Conflict (Steam) <br />
                    X4: Foundations (Steam) <br />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSixth">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSixth"
                aria-expanded="false"
                aria-controls="flush-collapseSixth"
              >
                Y - Z
              </button>
            </h2>
            <div
              id="flush-collapseSixth"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSixth"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <div class="div-accordion-last">
                  <section>
                    <h3 class="h3-alphabetic-list">Y</h3>
                    <br />
                    Yes, Your Grace (Epic Games Store, Steam) <br />
                    Yet Another Zombie Defense HD (Steam) <br />
                    Ylands (Steam) <br />
                    Yoku's Island Express (Epic Games Store, Steam) <br />
                    Yooka-Laylee (Epic Games Store, Steam) <br />
                  </section>
                  <section>
                    <h3 class="h3-alphabetic-list">Z</h3>
                    <br />
                    Zanki Zero: Last Beginning (Steam) <br />
                    Zelter (Steam) <br />
                    Zero Escape: The Nonary Games (Steam) <br />
                    Zero Hour (Steam) <br />
                    Ziggurat 2 (Steam) <br />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="paragraph-sect-giochi2">
          <i class="text-light d-flex justify-content-center">
            *Alcuni giochi elencati potrebbero non apparire fino alla fine della
            settimana, incluse le nuove uscite. Il titolo deve già essere in tuo
            possesso, in alternativa acquistalo su GeForce NOW.
          </i>
        </p>
      </section>

      <FooterNero />
      <FooterBianco />
    </React.Fragment>
  );
}
