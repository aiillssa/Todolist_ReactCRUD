import { Link } from "react-router-dom"

const LinkButton = ({route, text, color}) => {

    const linkButtonConfig = {
        purple:"inline-block shadow-md bg-purple-200 text-gray-700 text-sm rounded-sm px-4 py-2 font-bold hover:bg-purple-300 hover:cursor-pointer",
        blue:"inline-block shadow-md bg-blue-200 text-gray-700 text-sm rounded-sm px-4 py-2 font-bold hover:bg-blue-300 hover:cursor-pointer",
        green:"inline-block shadow-md bg-green-200 text-gray-700 text-sm rounded-sm px-4 py-2 font-bold hover:bg-green-300 hover:cursor-pointer"

    }

    return (
        <Link to = {`${route}`} className = {`${linkButtonConfig[color]}`}>{text}</Link>
    
    )
}

export default LinkButton;