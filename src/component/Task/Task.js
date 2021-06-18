export default function Task({index, description, dateTime, isCompleted, completeTask, removeTask}) {
    return (
        <article className="task-obj">
            <div className="task-info">
                <h1 className="task-desc" 
                style={{textDecoration: isCompleted ? 'line-through' : ''}}>{description}</h1>
                <h3 className="task-date-time">{dateTime}</h3>
            </div>
            <button className="task-checkbox" onClick={() => completeTask(index)}>
                Done
            </button>
            <button className="task-remove" onClick={() => removeTask(index)}>
                Remove
            </button>
        </article>
    )
}