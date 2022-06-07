import React from 'react'

export default function RegistrationPage() {
  return (
    <div>
      <div>
        <div>
          <h1>Register</h1>
          <p>Register your login details here</p>
          {/* registration form */}
          <form>
            <label for="username">User name:</label><br/>
            <input type="text" id='username' name="username" placeholder="Enter user name here" /><br/>
            <label for="email">Email Address:</label><br/>
            <input type="text" id='email' name="email" /><br/>
            <label for="password">Password:</label><br/>
            <input type="text" id='password' name="password" /><br/>

            <div>
              <div>
                <input type="checkbox" id='rememberme' name='rememberme'/>
                <label for="rememberme">Remember Me</label>
              </div>
              <div>
                <a href='#'>Forgot Password?</a>
              </div>
            </div>

            <input type="register" value="Register" />
          </form>
          <p>Already have an account?<a href='#'>Login</a></p>
        </div>
        
      </div>
    </div>
  )
}
