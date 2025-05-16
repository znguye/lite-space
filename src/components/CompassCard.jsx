import React from "react"
import './comonents_styles/CompassCard.css'

export default function CommpassCard({totalTasks, completedTasks}) {

    const getPosition = () => {
        
        const isHighTask = totalTasks > 7;
        const isHighCompletion = (completedTasks / (totalTasks || 1)) > 0.5;

        const zone = {
            left: isHighCompletion ? '75%' : '25%',
            top: isHighTask ? '75%' : '25%',
          };

        
        // return { left: `${x}%`, top: `${y}%`};
        return zone;

    };

    


    return(
        <div className = "compass-card">
            <div className="compass">
                <div className="zone top-left">Zen Zone</div>
                <div className="zone top-right">Focus Mode</div>
                <div className="zone bottom-left">Chill Drift</div>
                <div className="zone bottom-right">Burnout Bay</div>
                <div className="ball" style={getPosition()}></div>
            </div>
        </div>
    )
}