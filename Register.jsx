import { Link , useNavigate} from "react-router-dom"
import Login from "./Login"
const Register=() =>{
    const navigate = useNavigate()
    const handileClick = () =>{
        console.log("Handile click function called")
        navigate("/Login")
    }
    return (
        <div>
            <h1>This is Register page.</h1>
            <button onClick={handileClick}>Login</button> 
        </div>
    )
}

export default Register 