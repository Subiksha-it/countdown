import image from "../pages/screen.png"
import { Link , useNavigate} from "react-router-dom"
import Login from "./Login"
const pageNotFound = () =>{
    const navigate = useNavigate()
    const handileClick = () =>{
        console.log("Handile click function called")
        navigate("/Login")
    }

    return (
        <div>
            {/*<h1>
                This page is not found error 404.
            </h1>*/}
            <img className="w-100" src={image} alt="404" />
            <button onClick={handileClick}>Login</button> 
            {/*<Link to="/Login">Login</Link>*/}
        </div>
    )
}

export default pageNotFound


