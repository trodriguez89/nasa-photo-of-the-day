import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";
import styled from "styled-components";
import { Button } from 'reactstrap';

const DateStyle = styled.h2`
    font-family: 'Orbitron', sans-serif;

`;


export default function Photo () {
    const [photoImg, setPhotoImg] = useState([])
    const [startDate, setStartDate] = useState("");

    console.log(startDate);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${startDate}&api_key=1ppfJ03viLPpZ8HNDhAI8P2zB7CwW33GpjxoCx8U`)
        .then(response => {
            setPhotoImg(response.data);
        })
        .catch(error => {
            console.log("Oops, your request was lost in space!", error)
        })
    },[startDate])

    return (
    <div>
        <DateStyle>Date: {photoImg.date} </DateStyle>
        <form onSubmit ={evt => {evt.preventDefault()}}>
        <input onChange={e => setStartDate(e.target.value)} type = "text" />
        <Button  color="warning" type="submit">Submit</Button>
        </form> 
        <PhotoCard arrayInfo = {photoImg}/>
    </div>
    );
}

// value ={startDate} 