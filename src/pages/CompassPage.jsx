import NavBar from "../components/NavBar";
import React from "react";
//Banner - to be refactored
import { useEffect, useState } from "react";
import { getRandomQuote } from "../services/quote_api";

import CommpassCard from "../components/CompassCard"; 
import '../pages/pages_styles/CompassPage.css'
import Archetype from "../components/Archetype";
import {getTasks} from "../services/api"
import FreeTimeCalculator from "../components/FreeTimeCalculator";


export default function CompassPage(){

    //Quote part:
        const [quote, setQuote] = useState(null);
        useEffect(() => {
            setQuote(getRandomQuote());
        },[]);

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

            <section className="HomePageBanner">
            <div className="banner-overlay">
                {quote && (
                    <>
                        <h2 className="quote">"{quote.text}"</h2>
                        <p className="author">- {quote.author} -</p>
                    </>
                )}
            </div>
            </section>

            <section className="card-container">
                <div className="card">
                    <Archetype
                    totalTasks={totalTasks}
                    completedTasks={completedTasks}
                    categoryCounts={categoryCounts}
                    />
                </div>

                <div className="card">
                    <CommpassCard
                    totalTasks={totalTasks}
                    completedTasks={completedTasks}
                    categoryCounts={categoryCounts}
                    />
                </div>

                <div className="card">
                    <FreeTimeCalculator tasks={tasks} />
                </div>
                </section>
        </div>
    )
}