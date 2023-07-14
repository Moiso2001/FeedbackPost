
export default function Login() {
  return (
    <div>
        <div>
            <img/>
            <h2>Welcome Back!</h2>
        </div>
        <div>
            <div>
                <h3>Login</h3>
                <p>Welcome back! please login to your account.</p>
            </div>
            <div>
                <label>User Name</label>
                <input type='email'/>
                <label>Password</label>
                <input type='password'/>
            </div>
            <div>
                <div>
                    <input type='checkbox'/>
                    <label>Remember Me</label>
                </div>
                <div>
                    <span>Forgot password?</span>
                </div>
            </div>
            <div>
                <button>Login</button>
            </div>
            <div>
                <span>New User?</span>
                <span>Singup</span>
            </div>
        </div>
    </div>
  )
}
