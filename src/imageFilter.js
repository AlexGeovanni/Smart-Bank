import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";


import { IconTema } from "./Components/UI";

export default (type)=>{
    const img={
        Restaurante:<IconTema src={alimentacion} alt="Restaurante" />,
        Salud:<IconTema src={salud} alt="Salud" />,
        Transporte:<IconTema src={transporte} alt="Transporte" />,
        Utilidades:<IconTema src={utilidades} alt="Utilidades" />,
        default:<IconTema src={otros} alt="Otros" />
    }
    return img[type] || img["default"];

}