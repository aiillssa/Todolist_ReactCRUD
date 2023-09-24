import { Link } from "react-router-dom"
import LinkButton from './LinkButton'
const Task = ({task}) => {
    return (
        <div className =  "bg-pink-50 rounded shadow-lg overflow-hidden">
            <div className = "px-4 pt-2 pb-4">
                <h2 className = "text-lg text font-semibold">{task.name}</h2>
                <div className="text-sm">Due: {task.date.substring(0,10)}</div>
                <div className = "text-sm">Class: {task.class}</div>
                <div className = "mt-2 flex gap-4 mr-1">
                {/* maybe i can use a button for this? */}
                <LinkButton route = "/edit" text = "edit" color = "purple"></LinkButton>
                <LinkButton route = "/delete" text = "delete" color = "blue"></LinkButton>
            </div>
        </div>
        </div>
    )
}

export default Task;