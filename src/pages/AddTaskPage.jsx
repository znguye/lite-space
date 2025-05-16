// Thougts: first create a simple function CRUD here, then create the CRUD functions in api.js and refactor this page,

import {useEffect, useState} from "react";
import TaskInput from "../components/TaskInput";
import NavBar from "../components/Shared/NavBar";
import { createTask, getTasks } from "../services/api";

export default function AddTaskPage(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const data = await getTasks();
                setTasks(data);
            } catch (err) {
                console.error("Failed to fetch tasks", err);
            }
        } fetchTasks();
    }, []);

    const handleAddTask = async (task) => {
        try {
            const newTask = await createTask(task);
            setTasks([...tasks, newTask]);
            console.log("task added:", newTask);
        } catch (err) {
            console.error("Failed to add task", err);
        }
    };
    
    return (
        <div>
            <NavBar />
            <h1>Task Page</h1>

            <h3>New task</h3>
            <TaskInput onAddTask={handleAddTask} />

            {/* <h3>Task list</h3>
            <ul>
                {tasks.map((task) =>{
                    return(
                        <li key={task.id}>
                        [{task.category}] <strong>{task.name}</strong>
                        <br />
                        {task.description}
                        <br />
                        Status: {task.status}
                        <br />
                        Due: {task.dueDate}
                        <br />
                        Repeat: {task.repetition}
                        <br />
                        Duration: {task.duration} min
                    </li>
                    );
                })}
            </ul>            */}
        </div>
    )
}