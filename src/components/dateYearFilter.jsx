import React from "react";


const DateYearFilter = (props) => {

    let {handleChange} = props;
    
    let years = props.FillYearsToArray();

    return(
        <div id = {"year-filter"}>
            <select  onChange = {handleChange}>
                {years.map(x=>{return <option value = {x}>{x}</option>})}
            </select>
        </div>
    );
}

export default DateYearFilter