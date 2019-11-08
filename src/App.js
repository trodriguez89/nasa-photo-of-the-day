import React from "react";
import Photo from "./components/Photo";
import styled from "styled-components";
// import "./App.css";

const MainDivStyle = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80") 

`;

const NarrowDivStyle = styled.div`
text-align: center;
height: 100vh;
width: 85%;
margin: 0 auto;
background: white;

`;


const TitleStyleH1 = styled.h1`   
  font-family: 'Kanit', sans-serif;
  font-weight: bold;
`;


function App() {

  return (
  
    <MainDivStyle>
      <NarrowDivStyle>
      <TitleStyleH1>Astronomy Picture of the Day!</TitleStyleH1>
      <Photo/>
      </NarrowDivStyle>
    </MainDivStyle>
  );
}

export default App;
