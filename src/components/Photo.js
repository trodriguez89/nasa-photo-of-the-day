import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";

export default function Photo () {
    const [photoImg, setPhotoImg] = useState([])
    const [startDate, setStartDate] = useState("");

    const img_temp = {
        width: "35%"
    }

    function handleSubmit(event){
        event.preventDefault();
    }
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${startDate}&api_key=1ppfJ03viLPpZ8HNDhAI8P2zB7CwW33GpjxoCx8U`)
        .then(response => {
            console.log(response)
            setPhotoImg(response.data);
        })
        .catch(error => {
            console.log("Oops, your request was lost in space!", error)
        })
    },[startDate])

    return (
    <div>
        <h2>Date: {photoImg.date} <form onSubmit ={handleSubmit}>
            <input onChange={e => setStartDate(e.target.value)} value ={startDate}/><button type="submit">Submit</button>
        </form>
        </h2>
        
        <PhotoCard arrayInfo = {photoImg}/>
        {/* <img style = {img_temp} src = {photoImg.hdrul} alt = "APOD IMG"/> */}

    </div>
    );
}

