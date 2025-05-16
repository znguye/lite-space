import { useState, useEffect } from "react";
import NavBar from "../components/Shared/NavBar"
import Banner from "../components/Shared/Banner"
import TasksFilterBar from "../components/task_page_components/TasksFilterBar"
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
// import TaskInput from "../components/TaskPage/TaskInput";
// import TaskList from "../components/TaskPage/TaskList";
import { getTasks, updateTask, deleteTask } from "../services/api";

export default function TaskPage(){

    const [tasks, setTasks] = useState([]);
    const [dateFilter, setDateFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [editingTask, setEditingTask] = useState(null);


    // Helper for date filtering
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
    if (dateFilter === "This Week") {
      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() + 7);
      return taskDate >= today && taskDate <= endOfWeek;
    }
    return true; // All
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
            setEditingTask(task); // Pass this to TaskInput later
          };

    const handleAddTask = (newTask) => {
        setTasks((prev) => [...prev, newTask]);
    }

    const handleUpdateTask = async (updatedTask) => {
        try{
            const newTask = await updateTask(updatedTask.id, updatedTask);
            setTasks((prev) => prev.map((t) => (t.id === newTask.id ? newTask : t)));
            setEditingTask(null);
        } catch (err) {
            console.error("Failed to update task", err);
        }
    }
    
    
    return (
        <div>
            <NavBar />
            <Banner />

            <TasksFilterBar
                dateFilter={dateFilter} setDateFilter={setDateFilter}
                categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}
                statusFilter={statusFilter} setStatusFilter={setStatusFilter}
            />

            <TaskInput 
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            editingTask={editingTask}
            />

            <section className="ListofTasks">
                {tasks.length === 0 ? 
                    (<p> You don't have any tasks!</p>
                    ) : (
                        <TaskList 
                            tasks={tasks.slice(0, 6)}
                            onComplete={handleComplete}
                            onDelete={handleDelete}
                            onEdit={handleEdit}
                        />
                    )}
            </section>
        </div>
    )
}