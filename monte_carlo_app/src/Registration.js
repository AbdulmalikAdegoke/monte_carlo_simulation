import React from 'react'
import Link from "react-router-dom"

export default function RegistrationPage() {
  return (
    <div>
      <div>
        <div>
          <h1>Register</h1>
          <p id='login_p'>Register your login details here</p>
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
                <Link href='#'>Forgot Password?</Link>
              </div>
            </div>

            <input type="register" value="Register" />
          </form>
          <p>Already have an account?<Link href='#'>Login</Link></p>
        </div>
        
      </div>
    </div>
  )
}
