import FooterBianco from "../../FooterBianco"
import { FooterNero } from "../../FooterNero"
import GreenBannerNav from "../../GreenBannerNav"
import { NavNera } from "../../NavNera"
import NavBianca from "../../NavBianca"
import { Sottomenu } from "./Sottomenu"
import SottoNav from "./SottoNav"
import HeaderScarica from "../../ScaricaComponents/HeaderScarica"

export function RequisitiPage(){
    return(
        <div>
            <NavBianca/>
            <GreenBannerNav />
            <NavNera />
            <SottoNav />
            <HeaderScarica titleHeader={'Requisiti di sistema'}/>
            <Sottomenu />
            <FooterNero />
            <FooterBianco />
        </div>
    )
}