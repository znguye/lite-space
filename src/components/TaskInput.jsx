// Objective: This component is a form to add task. The user can't add an empty task. 

import { useState } from "react";

export default function TaskInput({onAddTask}) {
    const [task, setTask] = useState("");
    const [category, setCategory] = useState("self");
    const [state, setState] = useState("new")
    const [dueDate, setDueDate] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        //The user cannot add an empty task: If the trimmed task is empty, return nothing.
        if (!task.trim()) return;
    
        const newTask = {
            id: Date.now(),
            task,
            category,
            state,
            createdDate: new Date().toISOString(),
            dueDate,
        };

        onAddTask(newTask);
        setTask("");
        setCategory("self");
        setState("new");
        setDueDate("");
    
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
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                >
                    <option value="new">Not started</option>
                    <option value="wip">In progress</option>
                    <option value="done">Done</option>
                </select>

                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />

                <button type="submit">Add</button>
            </form>
        </>
    );
}