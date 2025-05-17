import { useState, useEffect } from "react";
import NavBar from "../components/Shared/NavBar"
import Banner from "../components/Shared/Banner"
import TasksFilterBar from "../components/task_page_components/TasksFilterBar"
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";

export default function TaskPage(){
    const [tasks, setTasks] = useState([]);
    const [dateFilter, setDateFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [editingTask, setEditingTask] = useState(null);

    // A function to later help know if the date matches with the filtering option
    function isWithinDateFilter(task) {
        const today = new Date();
        const taskDate = new Date(task.dueDate);

        if (dateFilter === "Today")
        return taskDate.toDateString() === today.toDateString();

        if (dateFilter === "Tomorrow") {
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return taskDate.toDateString() === tomorrow.toDateString();
        }

        return true; 
  }
  
  const filteredTasks = tasks
    .filter((task) => categoryFilter === "All" || task.category === categoryFilter)
    .filter((task) => statusFilter === "All" || task.status === statusFilter)
    .filter(isWithinDateFilter);
     
    
    //Fetch data, add Done and Delete handles once on load
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

    const handleAddTask = async (newTask) => {
        try {
            const created = await createTask(newTask);
            setTasks((prev) => [...prev, created]);
        } catch (err) {
            console.error("Failed to create task", err);
        }
    };

    const handleUpdateTask = async (updatedTask) => {
        try {
          const newTask = await updateTask(updatedTask.id, updatedTask);
          setTasks((prev) => prev.map((t) => (t.id === newTask.id ? newTask : t)));
          setEditingTask(null);
        } catch (err) {
          console.error("Failed to update task", err);
        }
      };
    
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


    const handleEdit = (task) => {
        setEditingTask(task); 
        };

    const handleCancelEdit = () => setEditingTask(null);
    
    
    return (
        <div>
            <NavBar />
            <Banner />

            <TasksFilterBar
                dateFilter={dateFilter} 
                setDateFilter={setDateFilter}
                categoryFilter={categoryFilter} 
                setCategoryFilter={setCategoryFilter}
                statusFilter={statusFilter} 
                setStatusFilter={setStatusFilter}
            />

            <TaskInput 
                onAddTask={handleAddTask}
                onUpdateTask={handleUpdateTask}
                onCancelEdit={handleCancelEdit}
                editingTask={editingTask}
            />

            <section className="ListofTasks">
                {tasks.length === 0 ? 
                    (<p> You don't have any tasks!</p>
                    ) : (
                        <TaskList 
                            tasks={filteredTasks.slice(0, 6)}
                            onComplete={handleComplete}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    )}
            </section>
        </div>
    )
}