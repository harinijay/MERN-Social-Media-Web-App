import "./login.scss"

export const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>
                    hbwvukvbksvbkjbvjdkbvjkebvcbvhbwhvbhbvhbvhbvhb hbvbvhvbh
                </p>
                <span>Don't you have an account?</span>
                <link to="/register">
                <button>Register</button>
                </link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
