import { useEffect, useState } from "react";
import {getTasks} from "../services/api"

import React from "react";
import NavBar from "../components/Shared/NavBar";
import Banner from "../components/Shared/Banner";

import CompassCard from "../components/CompassCard"; 
import Archetype from "../components/Archetype";
import FreeTimeCalculator from "../components/FreeTimeCalculator";

import '../pages/pages_styles/CompassPage.css'


export default function CompassPage(){

        const [tasks, setTasks] = useState([]);

        useEffect(() => {
            async function fetchData() {
            const data = await getTasks();
            setTasks(data);
            }
            fetchData();
        }, []);

        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.status === "done").length;

        const categoryCounts = tasks.reduce((counts, task) => {
        const cat = task.category || "Other";
        counts[cat] = (counts[cat] || 0) + 1;
        return counts;
        }, {});

    return(
        <div>
            <NavBar />
            <Banner />

            <section className="card-container">
                <div className="card">
                    <h3 className="card-title">Your Archetype</h3>
                    <Archetype
                    totalTasks={totalTasks}
                    completedTasks={completedTasks}
                    categoryCounts={categoryCounts}
                    />
                </div>

                <div className="card">
                    <h3 className="card-title">Your Compass</h3>
                    <CompassCard
                    totalTasks={totalTasks}
                    completedTasks={completedTasks}
                    categoryCounts={categoryCounts}
                    />
                </div>

                <div className="card">
                    <h3 className="card-title">Time Allocation</h3>
                    <FreeTimeCalculator tasks={tasks} />
                </div>
                </section>
        </div>
    )
}