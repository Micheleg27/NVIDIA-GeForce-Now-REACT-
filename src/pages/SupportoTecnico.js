import React from "react";
import NavBianca from '../Components/NavBianca';
import { NavSupportoTecnico } from "../Components/S.T.Components/NavSupportoTecnico";
import FooterBianco from '../Components/FooterBianco';
import Title_S_T from "../Components/S.T.Components/Title_S_T";
import CardSupportoTecnico from "../Components/S.T.Components/CardSupportoTecnico";
import { S_T_Footer } from "../Components/S.T.Components/S_T_Footer";




function SupportoTecnico() {
    return ( 
        <React.Fragment>
            <NavBianca />
            <NavSupportoTecnico />
            <Title_S_T />
            <CardSupportoTecnico />
            <S_T_Footer />
            <FooterBianco />
        </React.Fragment>
     );
}

export default SupportoTecnico;