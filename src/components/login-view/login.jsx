import React, { Component } from 'react';
import Register from "../register-view/register";


class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form>
                <label for="username">Username:</label><br />
                <input type="text" id="username" name="username"></input><br />
                <label for="password">Password:</label><br />
                <input type="password" id="password" name="password"></input><br />
                <input type="submit" value="Submit" />
                <input type="button" value="Click to register" onClick={()=>{
                    return(<Register></Register>)
                }} />
            </form>
            </div>
         );
    }
}
 
export default Login;