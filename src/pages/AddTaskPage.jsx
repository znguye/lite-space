import {useState} from "react";
import TaskInput from "../components/TaskInput";
import NavBar from "../components/NavBar";

export default function AddTaskPage(){
    const [tasks, setTasks] = useState([]);

    // const handleAddTask = (task) => {
    //     setTasks([...tasks, task]);
    //     console.log("task added:", task);
    // }
    const handleAddTask = async (task) => {
        try {
            const response = await fetch("http://localhost:3001/tasks", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(task),
            });

            const newTask = await response.json();
            setTasks([...tasks, task]);
            console.log("task added:", newTask);
        } catch (err) {
            console.error("Fail to add task", err);
        }
    }
    
    return (
        <div>
            <NavBar />
            <h1>Task Page</h1>

            <h3>New task</h3>
            <TaskInput onAddTask={handleAddTask} />

            <h3>Task list page holder</h3>
            <ul>
                {tasks.map((task) =>{
                    <li key={task.id}>
                        [{task.category}] {task.task} (due {task.dueDate})
                    </li>
                })}
            </ul>           
        </div>
    )
}