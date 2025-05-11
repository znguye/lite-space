import "./comonents_styles/TaskList.css"

export default function TaskList({tasks, onComplete, onDelete}){
    return(
        <div className = "task-grid" >
            {tasks.map((task) => (
                 <div className="task-tile" key={task.id}>
                    <div>
                        <h4>{task.name}</h4>
                        {task.description && <p>{task.description}</p>}
                        <p><strong>Status:</strong> {task.status}</p>
                        <p><strong>Due:</strong> {task.dueDate}</p>
                        <p><strong>Category:</strong> {task.category}</p>
                        <p><strong>Duration:</strong> {task.duration} min</p>
                    </div>
                    <div className = "tile-actions">
                        <button onClick = {() => handleComplete(task)}>✓</button> 
                        <button onClick = {() => handleDelete(task.id)}>🗑</button> 
                    </div>                  
                </div>
                ))}
        </div>

    );
}