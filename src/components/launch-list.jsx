import React from "react";
import Launch from "../components/launch";

//Has attribute data, which uses for display
const LaunchList = (props) => {
    let {data} = props;
    return (
        <launchList className = {"launchList"}>
            {data.map(x=>{return <Launch launch = {x} key = {x.flight_number}/>})}
        </launchList>
    );
}

export default LaunchList