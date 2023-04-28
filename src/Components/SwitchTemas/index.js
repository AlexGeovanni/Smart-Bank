import React from "react";

import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icon } from "../UI";

export default ({tema})=>{
    const claro = <Icon src={themeOn} alt="tema claro" />;
    const oscuro = <Icon src={themeOff} alt="tema oscuro" />;

    return <>{tema? oscuro:claro}</>
}