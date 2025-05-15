import NavBar from "../components/NavBar";
import React, { useState, useEffect } from "react";

export default function SettingPage(){
    const [baseActivities, setBaseActivities] = useState([
        {name: "Sleep", hours:8},
        {name: "Eat", hours: 2},
    ]);

    useEffect(() => {
        localStorage.setItem("baseActivities", JSON.stringify(baseActivities));
    }, [baseActivities]);

    const handleChange = (index, value) => {
        const updated = [...baseActivities];
        updated[index].hours = Number(value);
        setBaseActivities(updated);
    }

    const handleAdd = () => {
        setBaseActivities([...baseActivities, {name: "", hours:0}]);
    }

    return(
        <div>
            <NavBar />
            <div className="setting-page">

                <h2>Daily Base Time Settings</h2>
                {baseActivities.map((activity, index) => (
                    <div key={index} className="activity-row">
                        <input
                            type="text"
                            value={activity.name}
                            onChange={(e) => {
                                const updated = [...baseActivities];
                                updated[index].name = e.target.value;
                                setBaseActivities(updated);
                            }}
                            placeholder= "e.g. Shower"
                        />

                        <input 
                            type="number"
                            value={activity.hours}
                            onChange={(e) => handleChange(index, e.target.value)}
                            placeholder="Hours per day"
                            min="0"
                            max="24"
                            step="0.5"
                        />
                    </div>
                ))}

            <button onClick={handleAdd}> +Add activity </button>
            </div>
            
        </div>
    );
}