import { useEffect, useState } from "react";
import {getTasks} from "../services/api"

import React from "react";
import NavBar from "../components/Shared/NavBar";
import Banner from "../components/Shared/Banner";
import FilterBar from "../components/home_page_components/FilterBar";

import CompassCard from "../components/CompassCard"; 
import Archetype from "../components/Archetype";
import FreeTimeCalculator from "../components/FreeTimeCalculator";

import '../pages/pages_styles/CompassPage.css'


export default function CompassPage(){

        const [tasks, setTasks] = useState([]);
        const [filter, setFilter] = useState("today");

        useEffect(() => {
            async function fetchData() {
            const data = await getTasks();
            setTasks(data);
            }
            fetchData();
        }, []);

        //Same as Homepage:
        function isToday(dateStr) {
            const today = new Date();
            const target = new Date(dateStr);
            return today.toDateString() === target.toDateString();
          }
          
          function isTomorrow(dateStr) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const target = new Date(dateStr);
            return tomorrow.toDateString() === target.toDateString();
          }
          
          const filteredTasks = tasks.filter(task => {
            if (filter === "today") return isToday(task.dueDate);
            if (filter === "tomorrow") return isTomorrow(task.dueDate);
            return true;
          });


        const totalTasks = filteredTasks.length;
        const completedTasks = filteredTasks.filter(task => task.status === "done").length;

        const categoryCounts = filteredTasks.reduce((counts, task) => {
        const cat = task.category || "Other";
        counts[cat] = (counts[cat] || 0) + 1;
        return counts;
        }, {});

    return(
        <div>
            <NavBar />
            <Banner />
            <FilterBar onFilterSelect={setFilter} />


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
                    <h3 className="card-title">Your Time</h3>
                    <FreeTimeCalculator tasks={filteredTasks} filter={filter} />
                </div>
                </section>
        </div>
    )
}