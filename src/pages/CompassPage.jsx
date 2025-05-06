import NavBar from "../components/NavBar" 

export default function CompassPage(){
    return(
        <div>
            <NavBar />
            <h1>Compass Page</h1>
            <section className="Compass">
                <div className="Balance">
                    <h2>What is your balance?</h2>
                    <ul className="balanceOptions">
                        <li>Work - [Slider]</li>
                        <li>Self - [Slider]</li>
                        <li>Study - [Slider]</li>
                        <li>Relationships - [Slider]</li>
                    </ul>                
                </div>
                <div className="dailyUndeniable">
                    <h2>What is your daily undeniable?</h2>
                    <button>Eat</button>
                    <button>Sleep</button>
                    <button>Shower</button>
                    <button>Commute</button>
                </div>
            </section>
        </div>
    )
}