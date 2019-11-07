import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function Photo () {
    const [photoImg, setPhotoImg] = useState([])
    const [startDate, setStartDate] = useState("");

    console.log(startDate);

    function handleSubmit(event){
        event.preventDefault();
        console.log(startDate);
    }
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
        <h2>Date: {photoImg.date} </h2>
        <form onSubmit ={handleSubmit}>
            <input value ={startDate} onChange={e => setStartDate(e.target.value)} /><button type="submit">Submit</button>
        </form> 
       
        
        <PhotoCard arrayInfo = {photoImg}/>
        {/* <img style = {img_temp} src = {photoImg.hdrul} alt = "APOD IMG"/> */}

    </div>
    );
}

{/* <form onSubmit ={handleSubmit}>
            <input value ={startDate} onChange={e => setStartDate(e.target.value)} /><button type="submit">Submit</button>
        </form> */}