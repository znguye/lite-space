import NavBar from "../components/Shared/NavBar";
import Banner from "../components/Shared/Banner";
import FilterBar from "../components/FilterBar";
import CategoryCard from "../components/CategoryCard";

import { getTasks } from "../services/api";
import { useEffect, useState } from "react";

//Filter functions
function isToday(dateStr){
    const today = new Date();
    const target = new Date(dateStr);
    return today.toDateString() === target.toDateString();
}

function isTomorrow(dateStr){
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const target = new Date(dateStr);
    return tomorrow.toDateString() === target.toDateString();
}


export default function HomePage(){

    const [filter, setFilter] = useState("today");
    const [tasks, setTasks] = useState([]);

    //Defining filtered tasks
    const filteredTasks = tasks.filter(task => {
        if (filter === "today") return isToday(task.dueDate);
        if (filter === "tomorrow") return isTomorrow(task.dueDate);
        return true;
    })

    //Dependency = filter helps reload the tasks whenever user changes the filter
    useEffect(() => {
        getTasks()
            .then(setTasks)
            .catch(error => {
                console.error("Failed to load tasks", error)
            })
    },[filter]);

    return (
    <div className = "home">
        <NavBar />
        <Banner />
        <FilterBar onFilterSelect={setFilter} />

        <section className="categories">
            {["Work", "Learning", "Relationships", "Self"].map((cat) => {
                const catTasks = filteredTasks.filter(task => task.category === cat);
                return(
                    <CategoryCard
                    key={cat}
                    category={cat}
                    tasks={catTasks}
                    />
                )           
            })}
        </section>
    </div>
    )
}