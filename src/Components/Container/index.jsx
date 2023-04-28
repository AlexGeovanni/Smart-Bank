import React from "react";
import styled from "styled-components";

import Title from "../Title";
import Account from "../Account";
import List from "../List/list";


const ContainerStyled = styled.div`
  background-color: ${({theme})=> theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
`

const ContentStyled = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width:768px){
    flex-direction: column; 
  }
`


const Container = () => {
  return (
    <ContainerStyled>
      <Title>Smart Bank</Title>
      <ContentStyled >
        <Account />
        <List />
      </ContentStyled>
    </ContainerStyled>
  );
};

export default Container;
