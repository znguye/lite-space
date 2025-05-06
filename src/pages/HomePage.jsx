import NavBar from "../components/NavBar" 

export default function HomePage(){
    return (
    <div>
        <NavBar />
        <h1>HomePage</h1>
        <section className="HomePageBanner">
            <h3>Home Page banner</h3>
        </section>
        <section className="HomePageFilter">
            <button>Today</button>
            <button>This week</button>
            <button>This month</button>
        </section>
        <section className="HomePageBalance">
            <h3>Work</h3>
            <h3>Self</h3>
            <h3>Study</h3>
            <h3>Relationships</h3>
        </section>
    </div>
    )
}