import "../comonents_styles/TasksFilterBar.css";

export default function FilterBar({ 
  dateFilter, setDateFilter, 
  categoryFilter, setCategoryFilter, 
  statusFilter, setStatusFilter 
}) {
  return (
    <section className="TasksFilterBar">
      <div className="filter-group">
        <div className="filter-label">Date ▾
          <div className="filter-options">
            {["All", "Today", "Tomorrow"].map(label => (
              <button 
                key={label}
                className={dateFilter === label ? "active" : ""}
                onClick={() => setDateFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-label">Category ▾
          <div className="filter-options">
            {["All", "Work", "Learning", "Relationships", "Self"].map(label => (
              <button 
                key={label}
                className={categoryFilter === label ? "active" : ""}
                onClick={() => setCategoryFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-label">Progress ▾
          <div className="filter-options">
            {["All", "not started", "in progress", "done"].map(label => (
              <button 
                key={label}
                className={statusFilter === label ? "active" : ""}
                onClick={() => setStatusFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
