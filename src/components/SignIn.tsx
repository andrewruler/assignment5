import React from 'react'

function signin() {
  return (
    <div className = "signin">
        <h1 className = "signintext">Endless movies, TV shows, and more</h1>
        <h2 className = "signintext">Starting at $5.99. Cancel whenever you want.</h2>
        <p className = "signintext">Ready to watch? Enter your email to create or restart your membership.</p>
        
        <form>
            <div>
                <input type="text" name="user" placeholder="Email or Username"></input>
                <input type="text" name="pass" placeholder="Password"></input>
                <button type = "submit" name = "submit" className = "submit">Sign In</button>
            </div>
                <script src="https://accounts.google.com/gsi/client" async defer></script>

                <div id="g_id_onload" data-client_id="YOUR_GOOGLE_CLIENT_ID" data-callback="handleCredentialResponse">
                </div>

                <div className="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline"
                data-text="signin_with" data-size="large">
                </div>
                
                <script src= "./googleIntegration.js"></script>
        </form>
    </div>
    
  )
}

export default signin