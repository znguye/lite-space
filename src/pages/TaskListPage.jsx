import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"

export default function TaskListPage(){

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((err) => console.error("Error loading tasks", err));
    }, []);

    return(
        <>
            <NavBar />
            <h1>Task List</h1>
            <section className="TaskListBanner">
                <h3>Let's stay on track!</h3>
            </section>
            <section className="TaskListFilter">
                <button>All</button>
                <button>Today</button>
                <button>Tomorrow</button>
                <button>This week</button>
                <button>Select date</button>
            </section>
            <section className="ListofTasks">
                {tasks.length === 0 ? 
                    (<p> You don't have any tasks!</p>
                    ) : (
                    <ul>
                        {tasks.map((task) => (
                        <li key={task.id}>
                        <div>
                            <h4>{task.name}</h4>
                            {task.description && (
                                <p>{task.description}</p>
                            )}
                            <p>Status: {task.status}</p>
                            <p>Due: {task.dueDate}</p>
                            <p>Category: {task.category}</p>
                            <p>Duration: {task.duration}</p>
                        </div>
                        <button>✓</button> 
                        </li>
                        ))}
                    </ul>
                    )
                }
            </section>
        </>
    )
}