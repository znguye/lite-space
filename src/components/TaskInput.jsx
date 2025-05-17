// Objective: This component is a form to add task. The user can't add an empty task. 

import { useState, useEffect } from "react";
import "./comonents_styles/TaskInput.css"

const today = new Date().toISOString().split("T")[0];

export default function TaskInput({onAddTask, onUpdateTask, editingTask, onCancelEdit }) {
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("Work");
    const [status, setStatus] = useState("not started");
    const [dueDate, setDueDate] = useState(today);
    const [duration, setDuration] = useState(30);
    
    useEffect(() => {
        if(editingTask){
            setTask(editingTask.name);
            setCategory(editingTask.category || "Work");
            setStatus(editingTask.status || "not started");
            setDueDate(editingTask.dueDate || today);
            setDuration(editingTask.duration || 30);
        }}, [editingTask]);


    const resetForm = () => {
        setTask("");
        setCategory("Work");
        setStatus("not started");
        setDueDate(today);
        setDuration(30);
        };


    const handleSubmit = (e) => {
        e.preventDefault();
        //The user cannot add an empty task: If the trimmed task is empty, return nothing.
        if (!task.trim()) return;
    
    const updatedTask = {
        ...editingTask,
        name: task,
        status,
        category,
        dueDate,
        duration: Number(duration),
    }

        if (editingTask){
            onUpdateTask(updatedTask)
        } else {
            onAddTask(updatedTask);
        } resetForm();
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
                    <option value="Work">Work</option>
                    <option value="Learning">Learning</option>
                    <option value="Relationships">Relationships</option>
                    <option value="Self">Self</option>
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
                    onChange={(e) => setDuration(Number(e.target.value))}
                />

                <button type="submit">{editingTask ? "Update" : "Add"}</button>
                    {editingTask && (
                        <button type="button" onClick={ () => {
                            resetForm();
                            onCancelEdit();
                            }}>
                        Cancel
                        </button>
                    )}
            </form>
        </>
    );
}