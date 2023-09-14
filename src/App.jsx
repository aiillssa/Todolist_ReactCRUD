//packages: tailwindcss, react router dom
import {Routes, Route, Link} from "react-router-dom"
import HomePage from './pages/Homepage'

const App = () => {
  return (
    <div>
      {/* Nav tag defines a set of navigation links, only for major blocks of links */}
      {/* classname is a css class */}
      <nav className="bg-pink-200">
        <div className = "container mx-3 p-2">
          <Link to="/"><h2 className = "text-gray-600 text-2x1 font-bold">Tasks! (o^▽^o) </h2></Link>
        </div>
      </nav>


      {/* basically stores all your routes and like assigns them to a page */}
      <div className = "container mx-auto max-h-full">
        <Routes>
          <Route index element = {<HomePage/>}></Route>
          {/* <Route path = "/create" element = {<CreatePage/>}></Route> */}
        </Routes>
      </div>
    </div>

  );
  
}

//DONT FORGET TO EXPORT! we use it in main.jsx
export default App;