import '../components/components.css'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Nav from '../components/Nav';

function LoginView() {

    const navigate = useNavigate();
    const[password,setPass1] = useState("");

    function handleLogIn(event){
        event.preventDefault();
        if(password === "password"){
            navigate("/HomeView");
        } else {
            alert("Passwords is incorrect!");
        }
    }

  return (
    <>
        <Nav></Nav>
        <div className = "signin">
            <h1 className = "signintext">Welcome back! Login!</h1>
            <form>
                <div>       
                    <input type="text" name="email" placeholder="Email or Username"></input>
                    <input type="text" name="pass1" placeholder="Password" value = {password} onChange={(e) => setPass1(e.target.value)}></input>
                    <button type = "submit" name = "submit" className = "submit" onClick = {(event) => handleLogIn(event)}>Sign In</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default LoginView;