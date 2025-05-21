{/*import {useEffect, useState} from "react"
const Dashboard=() =>{
    const [data, setData] = useState("")
        console.log(data)
        const num = 25

        useEffect(
            () => {
                setData("Sample")
            },[]
        )
    return (
        <div>
            {
                num > 20 && (
                    <p>Hi num is above 20.</p>
                )
            }
            <h1>This is Dashboard page {data} </h1>
        </div>
    )
}
export default Dashboard*/}


    

import { useState} from "react"
// import TodoList from "./component/TodoList"
import { AiFillCaretRight } from "react-icons/ai";
import TodoList from "../component/TodoList";

const Dashboard=()=>{

    const [data,setData] = useState("")
    const [todoList,setTodoList] = useState("")

    const handileSubmit = () => {

        //console.log(data)
        setTodoList([...todoList,data])
        console.log(todoList)
        setData("")

    }


    return(
        <div className="bg-red-100 w-300px justify-center content-center">
            <div className="justify-items-center">
                <input 
                className="border-black border-2 m-4 p-4 w-200" 
                type="text" 
                value={data} 
                onChange={(e) => setData(e.target.value)}/>
                <button 
                className="bg-pink-300 rounded-2x1 p-4 text-black" 
                onClick={handileSubmit}> <AiFillCaretRight className="text-[8px]"/>Add</button>
            </div>
            <ol>
        
            {
            todoList.length > 0 && (
                    todoList.map((item , index) => (
                        <TodoList item = { item} index= {index} />
                    ))
                    
            )
            }
            </ol>
        </div>
    )
}
export default Dashboard