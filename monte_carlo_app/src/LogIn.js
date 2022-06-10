import React from 'react'

export default function LogInPage() {
  // states: LoggedIn
  return (
    <div>
      <div>
        <div>
          <h1>LogIn</h1>
          <p id='login_p'>Enter your login details here</p>
          {/* login form */}
          <form>
            <label for="username">User name:</label><br/>
            <input type="text" id='username' name="username" placeholder="Enter user name here" /><br/>
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

            <input type="submit" value="Submit" />
          </form>
          
          <p>Don't have an account?<a href='#'>Register</a></p>
        </div>
        
      </div>
      

    </div>
  )
}
