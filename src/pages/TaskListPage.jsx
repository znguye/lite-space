import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"
import { getTasks, deleteTask, updateTask } from "../services/api";

export default function TaskListPage(){

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getTasks();
                setTasks(data);
            } catch (err) {
                console.err("Error loading tasks", err);
            }
        } fetchData();
    }, []);

    const handleComplete = async (task) => {
        const updated = await updateTask(task.id, {status:"done"});
            setTasks((prev) =>
                prev.map((t) => (t.id === task.id? updated: t))
            );
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

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
                    <ul className="task-list">
                        {tasks.map((task) => (
                        <li className="task-card" key={task.id}>
                            <div>
                                <h4>{task.name}</h4>
                                {task.description && <p>{task.description}</p>}
                                <p>Status: {task.status}</p>
                                <p>Due: {task.dueDate}</p>
                                <p>Category: {task.category}</p>
                                <p>Duration: {task.duration} min</p>
                            </div>
                            <div className = "task-actions">
                                <button onClick = {() => handleComplete(task)}>✓</button> 
                                <button onClick = {() => handleDelete(task.id)}>🗑</button> 
                            </div>                  
                        </li>
                        ))}
                    </ul>
                    )
                }
            </section>
        </>
    )
}