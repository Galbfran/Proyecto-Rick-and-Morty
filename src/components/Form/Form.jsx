
import { useState } from "react";
import validation from "./validation";

const Form = ({login}) =>{

    const [userData , setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handelInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    } 

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={userData.username} onChange={handelInputChange}/>
            {errors.username && <p style={{color:'red'}}>{errors.username}</p>}

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handelInputChange}/>
            {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            <button>Login</button>
        </form>
    )
}

export default Form;