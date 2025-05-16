export default function FilterBar({onFilterSelect}){
    return(
        
        <section className="HomePageFilter">
            <button onClick={() => onFilterSelect("today")}>Today</button>
            <button onClick={() => onFilterSelect("tomorrow")}>Tomorrow</button>
            <button onClick={() => onFilterSelect("dateRange")}>All Dates</button>
        </section>
       
    )
}