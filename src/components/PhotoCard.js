import React from "react";
import styled from "styled-components";
// import GlobalStyle from "../GlobalStyle"

const ExplanationStyle = styled.p`
    font-size: 15px;
    font-family: 'Orbitron', sans-serif;
    
`;

const TitleStyleH1 = styled.h1`
    font-size: 23px;
    font-family: 'Kanit', sans-serif;
    font-weight: bold;
`;

const ImgStyle = styled.img`
    padding-top: 10px;
    width: 30%;
    border-radius: 20px;
`;

export default function PhotoCard(props) {
    const img_temp = {
        width: "35%"
    }
    if(!props.arrayInfo.hdurl) {
        return <h3>Loading...</h3>
    } else
    return (
        <div>
            <ImgStyle style ={img_temp} src = {props.arrayInfo.hdurl} alt="APOD"/>
            <TitleStyleH1>Title: {props.arrayInfo.title}</TitleStyleH1>
            {/* <h2>Date: {props.arrayInfo.date}</h2> */}
            <ExplanationStyle>Explanation: {props.arrayInfo.explanation}</ExplanationStyle>
        </div>
    );
}