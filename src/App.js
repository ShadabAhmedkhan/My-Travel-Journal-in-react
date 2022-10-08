import React from "react"
import Nav from "./componenet/Nav"
import Card from "./componenet/Card"
import Data from "./data"

import "./App.css"
export default function App(){
    //console.log(Data)
    const Cards = Data.map(item => {
        return <Card 
            Key={item.id}
            {...item}
         />
    })
    return(
        <div>
            <Nav />
           {Cards}
        </div>
    )
}