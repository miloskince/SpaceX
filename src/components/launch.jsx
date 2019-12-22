import React from "react";
import getSerbianDate from '../utility/date-utility';

//Has attribute launch
const Launch = (props) => {

    let {launch} = props; //Object Destructioning izvucice launch iz props
    let {mission_name:m_name,
        launch_year:l_year,
        launch_date_utc:l_date,
        rocket:{rocket_name: r_name},
        links:{mission_patch:m_patch}
        } = launch;//Iz ovog launch cemo izvuci nase informacije sa servera 

        let date = new Date(l_date);
    return (
        <launch className = "launch">
            <img src = {m_patch} className ={"mission_logo"}/>
            <label>{getSerbianDate(date)}{m_name}{r_name}</label>
        </launch>
    );
}

export default Launch