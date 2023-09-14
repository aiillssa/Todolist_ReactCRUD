
const Task = ({task}) => {
    return (
        <div className =  "bg-pink-50 rounded shadow-lg overflow-hidden">
            <div className = "px-4 pt-2 pb-4">
                <h2 className = "text font-semibold"> {task.name}</h2>
                <div className="text-sm">Due: {task.date.substring(0,10)}</div>
            </div>
        </div>
    )
}

export default Task;