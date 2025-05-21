{/*import {useState} from "react"
import Sample from "./component/sample"

function App() {
  const [count, setCount, Count] = useState(0)*/}
  {/*const myName = "subi"
  const Age="19"
  const hobby="dancing"*/}
  {/*return (
    <>
    {/*<h1>My React App</h1>*/}
    {/*<h1 className=" text-30x1 font-bold underline text-pink-600">Hello world</h1>
    <button className="bg-purple-400 p-2" onClick={() => setCount(count + 1)}>Click me</button><br></br>
    {/*<Sample myName={myName} Age={Age} hobby={hobby}/>*/}
    {/*<Sample count={count}/>
    </>
  )
}


export default App*/}


{/*import { BrowserRouter , Routes ,Route } from "react-router-dom";
import Dashboard from "./component/pages/Dashboard";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
{/*import PageNotFound from "./component/pages/pageNotFound";


function App() {

    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App*/}

import {BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"
import PageNotFound from "./pages/pageNotFound"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


