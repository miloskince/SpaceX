import React, { useState, useEffect } from "react";
import { getRoadster } from "../utility/space-x-service";

const Footer = (props) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        getRoadster().then(data => {
            let s = {
                name: data.name,
                orbit_type: data.orbit_type,
                details: data.details
            }
            setData(s);
        })
    },[]);
    return(
        <footer className = {"footer"}>
            <p>{data.name}</p> 
            <p>{data.orbit_type}</p>
            <p>{data.details}</p>
        </footer>
    )
}

export default Footer