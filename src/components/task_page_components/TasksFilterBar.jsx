import "../comonents_styles/TasksFilterBar.css";

const STATUS_OPTIONS = [
  { label: "All", value: "All" },
  { label: "Not started", value: "not started" },
  { label: "In progress", value: "wip" },
  { label: "Done", value: "done" }
];

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
            {STATUS_OPTIONS.map(option => (
              <button 
                key={option.value}
                className={statusFilter === option.value ? "active" : ""}
                onClick={() => setStatusFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
