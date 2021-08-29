import React, { Component } from 'react';

class Register extends Component {
    state = {  }
    render() { 
        return (
        <div>
           <form>
                <label for="username">Username:</label><br />
                <input type="text" id="username" name="username"></input><br />
                <label for="email">Email:</label><br />
                <input type="email" id="email" name="email"></input><br />
                <label for="password">Password:</label><br />
                <input type="password" id="password" name="password"></input><br />
                <label for="birthdate">Birthdate:</label><br />
                <input type="birthdate" id="birthdate" name="birthdate"></input><br />
                <input type="submit" value="Submit" />

      </form>
      
        </div> );
    }
}
 
export default Register;