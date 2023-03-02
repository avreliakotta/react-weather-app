import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
 

export default function Forecast(response) {
    return (
        
        <ul>
            <li>
                <ReactAnimatedWeather
                    icon="SNOW"
                    color="blue"
                    size={50}
                    animate={true}
                />
            </li>
            <li>
                <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="blue"
                    size={50}
                    animate={true}
                />
            </li>
            <li><ReactAnimatedWeather
                icon="RAIN"
                color="blue"
                size={50}
                animate={true}
            /></li>
            <li>
                <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="blue"
                    size={50}
                    animate={true}
                />
            </li>
            <li>
                <ReactAnimatedWeather
                    icon="CLEAR_DAY"
                    color="blue"
                    size={50}
                    animate={true}
                />
            </li>
        </ul>
    );
}