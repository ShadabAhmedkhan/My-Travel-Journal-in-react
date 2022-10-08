import React from "react"

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <img src={`${props.imageUrl}`} className="card--image" />
            
            <div className="card--stats">
                <img src="../images/Location.png" className="card--location" />
                <span className="location">{props.location}</span>
                <a href={`${props.googleMapsUrl}`} className="ViewMaps">View On GoogleMaps</a>
                
                <h1>{props.title}</h1>
            <p><span className="bold date">{`${props.startDate} - ${props.endDate}`}</span></p>
            <p className="paragraphs">
            {props.description}
            </p>
            </div>
            
        </div>
    )
}