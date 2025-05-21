{/*import {Link} from "react-router-dom" 
import Register from "./Register"
import { MdSetMeal } from "react-icons/md"*/}
import Input from "costuminputg"
import { useState } from "react"



const Login=()=>{
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handileSubmit=() => {
        console.log(email)
        console.log(password)
    }



    return(
        <center>
            <div className="items-center justify-center w-150 h-full mt-50 bg-gray-100">
                <form onSubmit={handileSubmit}>
                    <Input
                        type='Email'
                        label='Email address'
                        placeholder='Email address'
                        className="w-[80%] h-10 border border-gray-300 rounded-md px-5"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
            {/*<h1>This is login page</h1>
            <Link to="/Register">Register</Link>*/}
                    <Input
                        type='password'
                        label='password'
                        placeholder='Enter your password'
                        className="w-[80%] h-10 border border-gray-300 rounded-md px-5"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-blue-600 w-full mt-4" type="submit">Login</button>
                </form>
            </div>
        </center>
    )
}
export default Login