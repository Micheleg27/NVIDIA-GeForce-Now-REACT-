import FooterBianco from "../../FooterBianco"
import { FooterNero } from "../../FooterNero"
import GreenBannerNav from "../../GreenBannerNav"
import { NavNera } from "../../NavNera"
import NavBianca from "../../NavBianca"
import { Sottomenu } from "./Sottomenu"
import { Copertina } from "./Copertina"
import SottoNav from "./SottoNav"

export function RequisitiPage(){
    return(
        <div>
            <NavBianca/>
            <GreenBannerNav />
            <NavNera />
            <SottoNav />
            <Copertina />
            <Sottomenu />
            <FooterNero />
            <FooterBianco />
        </div>
    )
}