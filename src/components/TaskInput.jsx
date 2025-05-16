// Objective: This component is a form to add task. The user can't add an empty task. 

import { useState, useEffect } from "react";
import "./comonents_styles/TaskInput.css"


export default function TaskInput({onAddTask, onUpdateTask, editingTask}) {
    const today = new Date().toISOString().split("T")[0];
    
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("self");
    const [status, setStatus] = useState("not started");
    const [dueDate, setDueDate] = useState(today);
    const [duration, setDuration] = useState(30);
    
    useEffect(() => {
        if(editingTask){
            setTask(editingTask.name);
            setCategory(editingTask.category || "self");
            setStatus(editingTask.status || "new");
            setDueDate(editingTask.dueDate || today);
            setDuration(editingTask.duration || "30");
        }}, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        //The user cannot add an empty task: If the trimmed task is empty, return nothing.
        if (!task.trim()) return;
    
        const updatedTask = {
            ...editingTask,
            // id: Date.now(),
            name: task,
            status,
            category,
            dueDate,
            duration,
        }

        if (editingTask){
            onUpdateTask(updatedTask)
        } else {
            onAddTask({
                id: Date.now(),
                ...updatedTask,
                createdDate: new Date().toISOString()
            });
        }
        
        //Reset form:
        setTask("");
        setCategory("self");
        setStatus("new");
        setDueDate(today);
        setDuration(30);
    
    }
    
    return (
        <>
            <form className="task-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Add a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="work">Work</option>
                    <option value="self">Self</option>
                    <option value="social">Social</option>
                </select>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="not started">Not started</option>
                    <option value="wip">In progress</option>
                    <option value="done">Done</option>
                </select>

                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />

                <input 
                    type="number"
                    min="5"
                    step="5"
                    placeholder="Duration (min)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <button type="submit">{editingTask ? "Update" : "Add"}</button>
                {editingTask && (
                    <button type="button" onClick = {() => {
                        setTask("");
                        setCategory("self");
                        setStatus("new");
                        setDueDate("");
                        setDuration(30);
                        onUpdateTask(null);
                    }}>
                        Cancel
                    </button>
                )}
            </form>
        </>
    );
}