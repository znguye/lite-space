import NavBar from "../components/NavBar"

export default function TaskListPage(){
    return(
        <>
            <NavBar />
            <h1>Task List</h1>
            <section className="TaskListBanner">
                <h3>TaskListBanner</h3>
            </section>
            <section className="TaskListFilter">
                <button>All</button>
                <button>Today</button>
                <button>Tomorrow</button>
                <button>This week</button>
                <button>Select date</button>
            </section>
            <section className="ListofTasks">
                <ul>
                    <li>
                        <h4>Task 1</h4>
                        <button>✓</button>
                    </li>
                    <li>
                        <h4>Task 2</h4>
                        <button>✓</button>
                    </li>
                    <li>
                        <h4>Task 3</h4>
                        <button>✓</button>
                    </li>
                </ul>
            </section>
        </>
    )
}