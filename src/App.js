import React,{useState,useEffect}from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components"; //provedor de temas
import { temaClaro,temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitchTemas from "./Components/SwitchTemas";
import Footer from "./Components/Footer";

function App() {
  const [tema,setTema]=useState(
    ()=>{
      const temalocal = localStorage.getItem("tema");
      return JSON.parse(temalocal)
    }
  )

  useEffect(()=>{
    localStorage.setItem("tema",tema)
  },[tema])

  const toggleTema=()=>{
    setTema((tema)=>!tema)
  }


    return(<>
    <ThemeProvider theme={tema? temaClaro:temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}> 
        <SwitchTemas tema={tema} />
      </BtnTema>
      <Header />
      <Container />
      <Footer tema={tema} />
    </ThemeProvider>
    </>
  );
}

export default App;
