import React, { useState, useEffect } from "react";
import LaunchList from "./launch-list";
import DateYearFilter from "./dateYearFilter";
import { FillUpcomingYearToArray } from "../utility/date-utility";
import { getUpcomingLaunches } from "../utility/space-x-service";


const UpcomingList = (props) => {

    const [data,setData] = useState([]);
    const [displayData,setDisplayData] = useState([]);

    useEffect(() => {
        getUpcomingLaunches().then(data => {
            setData(data);
            setDisplayData(data);
        })
    },[]);
   
    const handleChange = (e) => {
        setDisplayData(data.filter(x => {return x.launch_year === e.target.value}))
    }


    return (
        <div className = {"upcomingLaunches"}>
        <DateYearFilter handleChange = {handleChange} FillYearsToArray = {FillUpcomingYearToArray}/>
        <LaunchList data = {displayData}/>
        </div>
    );
}

export default UpcomingList