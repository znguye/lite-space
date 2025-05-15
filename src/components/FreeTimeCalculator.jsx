import React from "react";
import { useEffect, useState } from "react";
import "./comonents_styles/FreeTimeCalculator.css";

export default function FreeTimeCalculator({tasks = []}) {
    const [baseTime, setBaseTime] = useState(0);

    useEffect(() => {
        const stored = localStorage.getItem("baseActivities");
        if (stored) {
          const activities = JSON.parse(stored);
          const total = activities.reduce((sum, act) => sum + (act.hours || 0), 0); // ✅ fixed
          setBaseTime(total);
        }
      }, []);

    const grindTime = tasks.reduce((sum,task) => sum + (task.duration || 0), 0)/ 60;
    const freeTime = Math.max(24 - baseTime - grindTime, 0);

    return (
        <div className="free-time-card">
            <div className="time-block">
                <label>Base Time</label>
                <div className="bar-container">
                    <div
                    className="bar base"
                    style={{ width: `${(baseTime / 24) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="time-block">
                <label>Grind Time</label>
                <div className="bar-container">
                    <div
                    className="bar grind"
                    style={{ width: `${(grindTime / 24) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="time-block">
                <label>Free Time</label>
                <div className="bar-container">
                    <div
                    className="bar free"
                    style={{ width: `${(freeTime / 24) * 100}%` }}
                    ></div>
                </div>
            </div>

        </div>
    )

}