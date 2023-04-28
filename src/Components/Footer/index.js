import React from "react"
import gitBlanco from "../../assets/images/redes/github-mark-white.svg"
import gitNegro from "../../assets/images/redes/github-mark.svg";
import Linkedin from "../../assets/images/redes/linkedin.svg";
import styled from "styled-components";


const Footer=styled.footer`
    background-color: ${({theme})=> theme.body};
    padding: 15px 30px;
    border-top: 2px solid ${({theme})=> theme.text};
    display:  flex;
    justify-content: space-evenly;
    align-items: center;
    color:${({theme})=> theme.text};
    @media screen and (max-width:768) {
        flex-wrap: wrap;
    }
`
const ImgSvg=styled.img`
    width: 38px;
    height: 38px;
    color:${({invertir})=> invertir? ({theme})=>theme:"transparent"};
    &:hover{
        transform: scale(1.1);
        transition: all .3s ease-in-out;
    }
`
const ALink =styled.a`
    display: inline-block;
    margin: 0 10px;
` 
// console.log((theme)=>theme)

export default ({tema})=>{
    return(
        <Footer>
            <div>
                <ALink href="https://www.github.com/AlexGeovanni" rel="noopener noreferrer" target="_blank" >
                    <ImgSvg src={tema? gitNegro : gitBlanco} />
                </ALink>
                <ALink href="https://www.linkedin.com/in/alex-geovanni-diaz-dwf/" rel="noopener noreferrer" target="_blank" >
                    <ImgSvg invertir src={Linkedin} />
                </ALink>
            </div>
            <div>
                <p>&copy; Desarrollado por Alex Geovanni || Alura</p>
            </div>
        </Footer>
    )
}