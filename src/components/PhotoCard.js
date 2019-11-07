import React from "react";

export default function PhotoCard(props) {
    const img_temp = {
        width: "35%"
    }
    if(!props.arrayInfo.hdurl) {
        return <h3>Loading...</h3>
    } else
    return (
        <div>
            <img style ={img_temp} src = {props.arrayInfo.hdurl} alt="APOD"/>
            <h1>Title: {props.arrayInfo.title}</h1>
            {/* <h2>Date: {props.arrayInfo.date}</h2> */}
            <p>Explanation: {props.arrayInfo.explanation}</p>
        </div>
    );
}