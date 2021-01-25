import React from 'react';
import './App.css';
function Login() {
  return (
    <div>
   <form className="modal-content animate" >
    <div className="imgcontainer">
      <img src="amazon.png" alt="Avatar" className="avatar"  />
    </div>

    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required /> 

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <br></br>
      <button type="submit">Login</button>
      <label>
     
        <input type="checkbox"  name="remember" /> Remember me
      </label>
    </div>

    <div className="container" Style="background-color:#f1f1f1">
        <span className="psw">Forgot password</span>
    </div>
  </form>
</div>

  );
}

export default Login;
