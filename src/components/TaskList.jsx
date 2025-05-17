import "./comonents_styles/TaskList.css"

export default function TaskList({tasks, onEdit, onComplete, onDelete}){
    const STATUS_LABELS = {
        "not started": "Not started",
        "wip": "In progress",
        "done": "Done",
      };
      

    return(
        <div className = "task-grid" >
            {tasks.map((task) => (
                 <div className="task-tile" key={task.id}>
                    <div>
                        <h4><strong>{task.name}</strong></h4>
                        {task.description && <p>{task.description}</p>}
                        <p><strong>Status:</strong> {STATUS_LABELS[task.status] || task.status}</p>
                        <p><strong>Due:</strong> {task.dueDate}</p>
                        <p><strong>Category:</strong> {task.category}</p>
                        <p><strong>Duration:</strong> {task.duration} min</p>
                    </div>
                    <div className = "tile-actions">
                        <button onClick = {() => onComplete(task)}>✓</button> 
                        <button onClick={() => onEdit(task)}>✏️</button>
                        <button onClick = {() => onDelete(task.id)}>🗑</button> 
                    </div>                  
                </div>
                ))}
        </div>

    );
}