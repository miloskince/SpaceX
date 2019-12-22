import React, { useState, useEffect } from "react";
import { getHeader } from "../utility/space-x-service";

const Header = (props) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        getHeader().then(data => {
            let s = {
                name: data.name,
                founder: data.founder,
                ceo: data.ceo
            }
            setData(s);
        })
    },[]);
    return(
        <footer className = {"header"}>
            <p>Company Name: {data.name}</p> 
            <p>Founder: {data.founder}</p>
            <p>Ceo: {data.ceo}</p>
        </footer>
    )
}

export default Header