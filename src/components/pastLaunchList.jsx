import React, { useState, useEffect } from "react";
import LaunchList from "./launch-list";
import DateYearFilter from "./dateYearFilter";
import { FillYearToArray } from "../utility/date-utility";
import { getPastLaunches } from "../utility/space-x-service";


const PastList = (props) => {

    const [data,setData] = useState([])
    const [displayData,setDisplayData] = useState([]);

    useEffect(() => {
        getPastLaunches().then(data => {
            setData(data);
            setDisplayData(data);
        })
    },[]);
   
    const handleChange = (e) => {
        setDisplayData(data.filter(x => {return x.launch_year === e.target.value}))
    }

    return (
        <div className = {"pastLaunches"}>
        <DateYearFilter handleChange = {handleChange} FillYearsToArray = {FillYearToArray}/>
        <LaunchList data = {displayData}/>
        </div>
    );
}

export default PastList