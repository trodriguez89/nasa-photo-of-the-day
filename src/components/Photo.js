import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Photo () {
    const [photoImg, setPhotoImg] = useState([])
    const [startDate, setStartDate] = useState("2019-11-06");

    const img_temp = {
        width: "35%"
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
        <h2>Date: {photoImg.date} Pick A Date </h2>
        
        <PhotoCard arrayInfo = {photoImg}/>
        {/* <img style = {img_temp} src = {photoImg.hdrul} alt = "APOD IMG"/> */}

    </div>
    );
}

{/* <button onClick={() => setDate(date - 1)}>View Previous Day's Photo!</button> */}

{/* <DatePicker dateFormat = "yyyy-MM-dd" selected = {startDate} onChange ={() => setStartDate(startDate)}/> */}
