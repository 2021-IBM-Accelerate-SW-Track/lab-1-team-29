export default function Task({index, description, dateTime, isCompleted, CompleteTask, RemoveTask}) {
    return (
        <article className="task-obj">
            <div className="task-info">
                <h1 className="task-desc" 
                style={{textDecoration: isCompleted ? 'line-through' : ''}}>{description}</h1>
                <h3 className="task-date-time">{dateTime}</h3>
            </div>
            <button className="task-checkbox" onClick={() => CompleteTask(index)}>
                {isCompleted ? 'Not done' : 'Done'}
            </button>
            <button className="task-remove" onClick={() => RemoveTask(index)}>
                Remove
            </button>
        </article>
    )
}