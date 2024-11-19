import { Link } from "react-router-dom"


const Login = () => {
  return (
    // Placeholder Button returns to Dashboard
    <Link to={'/Dashboard'} className="btn btn-primary" >
        Login page, click to Dashboard.
    </Link>
  )
}

export default Login