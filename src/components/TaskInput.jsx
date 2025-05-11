// Objective: This component is a form to add task. The user can't add an empty task. 

import { useState } from "react";

export default function TaskInput({onAddTask}) {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("self");
    const [status, setStatus] = useState("not started");
    const [dueDate, setDueDate] = useState("");
    const [repetition, setRepetition] = useState("none");
    const [duration, setDuration] = useState(30);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        //The user cannot add an empty task: If the trimmed task is empty, return nothing.
        if (!task.trim()) return;
    
        const newTask = {
            id: Date.now(),
            task,
            description,
            category,
            status,
            createdDate: new Date().toISOString(),
            dueDate,
            repetition,
            duration: parseInt(duration)
        };

        onAddTask(newTask);

        //Reset form:
        setTask("");
        setDescription("");
        setCategory("self");
        setStatus("new");
        setDueDate("");
        setRepetition("none");
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

                <select
                    value={repetition}
                    onChange={(e) => setRepetition(e.target.value)}
                >
                    <option value="none">No repeat</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                </select>

                <input 
                    type="number"
                    min="5"
                    step="5"
                    placeholder="Duration (min)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />

                <button type="submit">Add</button>
            </form>
        </>
    );
}