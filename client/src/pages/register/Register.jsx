import "./register.scss"

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>
                    hbwvukvbksvbkjbvjdkbvjkebvcbvhbwhvbhbvhbvhbvhb hbvbvhvbh
                </p>
                <span>Do you have an account?</span>
                <button>Register</button>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register