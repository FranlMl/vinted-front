import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../App.scss"


const Signup = ({handleToken}) => {

const [email, setMail] = useState("")
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [newsletter, setNewsLetter] = useState(false)


const navigate = useNavigate();


const handleSubmit = async (event) => {

    event.preventDefault();

    try {

        const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", 
        {
            email: email,
            username: username,
            password: password,
            newsletter: newsletter
          } 

        );

        handleToken(response.data.token)

        navigate("/home")

        //console.log(response.data)

    } catch (error) {
        console.log(error)
    }

}

    return (

            <form action="" className="form-box" onSubmit={handleSubmit}>

                <h1>S'inscrire</h1>

                <input type="text" placeholder="Email" value = {email} onChange= { (event)=> {setMail(event.target.value)} } />

                <input type="text" placeholder="Usersame" value={username} onChange = {(event)=> {setUsername(event.target.value)}} />

                <input type="password" placeholder="password" value={password} onChange = { (event)=> { setPassword(event.target.value) } } />


                <input type="checkbox" checked = {newsletter} onChange = { ()=> {setNewsLetter(!newsletter)}} />

                <input type ="submit" value = "S'inscrire" />

            </form>
    )

}


export default Signup;