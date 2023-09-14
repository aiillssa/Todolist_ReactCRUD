//Packages: axios
import axios from "axios";
import {useState, useEffect} from "react";
import Task from "../components/TaskComponent"

const HomePage = ()=> {

    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState([false]);

    const getTasks = async () => {
        try {
            //first set it to loading and wait for axios to get the info from the api
            setIsLoading(true);
            const response = await axios.get("http://localhost:3000/");
            console.log (response.data);
            //then fill up tasks array with the data we got from axios
            setTasks(response.data);
            //dont forget to set is loading to false!
            setIsLoading (false);
        } catch (error){
            console.log (error);
        }
    }

    //called when app first loads
    //Effects: let you specify side effects that are caused by rendering itself, rather than by a particular event
    //Basically allows u to synchronize react components w external system
    //happen at the end of of a commit after the screen updates.
    //Will run after every render
    //Render: pure calculation of JSX and shouldn't contain side effects, so we put all the outside stuff
    //like connecting to an API after the render
    useEffect(()=> {
        getTasks();
    }, [])

    return (
        //heres the actual stuff on the page
        <div className = "grid grid-cols-2 lg:grid-cols-4 gapp-4 mt-5">
            {isLoading ? (
                "Loading"
            ) : (
                <>
                {tasks.length > 0 ? (
                    <>
                        {
                            //Map to an array creates a NEW array who's elements are processed by the callback function
                            //This one basically returns 
                            tasks.map ((task, index) => {
                                return (
                                    <Task key = {index} task = {task}/>
                                )
                            })
                        }
                    </>
                ) : (
                    <div>There is no product</div>
                )}
                </>
            )}
        </div>
    )
}

export default HomePage;
