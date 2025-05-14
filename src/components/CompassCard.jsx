import React from "react"
import './comonents_styles/CompassCard.css'

export default function CommpassCard({totalTasks = 20, completedTasks = 7}) {

    const getPosition = () => {
        const ratio = (completedTasks / (totalTasks) || 0);
        const x = ratio * 100;
        const y = (1 - ratio) * 100;
        
        return { left: `${x}%`, top: `${y}%`};

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