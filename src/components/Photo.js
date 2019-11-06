import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function Photo () {
    const [photoImg, setPhotoImg] = useState([])
    const [date, setDate] = useState("");

    const img_temp = {
        width: "35%"
    }


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=1ppfJ03viLPpZ8HNDhAI8P2zB7CwW33GpjxoCx8U`)
        .then(response => {
            console.log(response)
            setPhotoImg(response.data);
        })
        .catch(error => {
            console.log("Oops, your request was lost in space!", error)
        })
    },[date])

    return (
    <div>
        <h2>Date: {photoImg.date} <form>Enter a Date as YYYY-MM-DD: <input/><input date = {date}type="Submit"/> </form></h2>
        
        <PhotoCard arrayInfo = {photoImg}/>
        {/* <img style = {img_temp} src = {photoImg.hdrul} alt = "APOD IMG"/> */}

    </div>
    );
}

{/* <button onClick={() => setDate(date - 1)}>View Previous Day's Photo!</button> */}
