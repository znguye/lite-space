import {useState} from "react";
import TaskInput from "../components/TaskInput";

export default function TasksPage(){
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
        console.log("task added:", task);
    }
    
    return (
        <div>
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