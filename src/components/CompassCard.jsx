import React from "react"
import './comonents_styles/CompassCard.css'

export default function CommpassCard({totalTasks = 13, completedTasks = 9}) {

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
                <div className="zone top-left">TL</div>
                <div className="zone top-right">TR</div>
                <div className="zone bottom-left">BL</div>
                <div className="zone bottom-right">BL</div>
                <div className="ball" style={getPosition()}></div>
            </div>
        </div>
    )
}