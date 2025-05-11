import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"
import { getTasks, deleteTask, updateTask } from "../services/api";
import TaskList from "../components/TaskList";
// import bannerImg from "../assets/Banner_test.webp"

export default function TaskListPage(){

    const [tasks, setTasks] = useState([]);
    const [dateFilter, setDateFilter] = useState("All");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");

    //Fetch data, add Done and Delete handles:
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

    //Utility: Filter by date:
    function isWithinDateFilter(task) {
        const today = new Date();
        const taskDate = new Date(task.dueDate);

        if (dateFilter === "Today")
            return taskDate.toDateString() === today.toDateString();
        if (dateFilter === "Tomorrow") {
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate()+1);
            return tasksDate.toDateString() === tomorrow.toDateString();
        }
        if(dateFilter === "This Week"){
            const endOfWeek = new Date(today);
            endOfWeek.setDate(today.getDate()+7);
            return taskDate >= today && taskDate <= endOfWeek;
        }
        return true; //All
    }

    //Combine filtering
    const filteredTasks = tasks
        .filter((task) => (categoryFilter ==="All" ? true: task.category === categoryFilter))
        .filter((task) => (statusFilter ==="All" ? true: task.status === statusFilter))
        .filter(isWithinDateFilter)
        .slice(0,6);

    return(
        <>
            <NavBar />

            <section className="TaskListBanner">
                <h2>Let's stay on track!</h2>
            </section>

            <section className="TaskListFilter">
                <div className="filter-row">
                    {["All", "Today", "Tomorrow", "This week"].map((label) => (
                        <button key={label} onClick={() => setDateFilter(label)}>{label}</button>
                    ))}
                </div>
                <div className="filter-row">
                    {["All", "Work", "Self", "Study", "Relationships"].map((label) => (
                        <button key={label} onClick={() => setCategoryFilter(label)}>{label}</button>
                    ))}
                </div>
                <div className="filter-row">
                    {["All", "in progress", "done"].map((label) => (
                        <button key={label} onClick={() => setStatusFilter(label)}>{label}</button>
                    ))}
                </div>
            </section>

            <section className="ListofTasks">
                {tasks.length === 0 ? 
                (<p> You don't have any tasks!</p>
                ) : (
                    <TaskList 
                        tasks={tasks}
                        onComplete={handleComplete}
                        onDelete={handleDelete}
                    />
                )}
            </section>
        </>
    )
}