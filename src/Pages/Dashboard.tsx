import { Link } from "react-router-dom";

const Dashboard = () => {
    // Placeholder Button returns to Login Page
  return (
    <Link to={"/"} className="btn btn-primary">
      Login page, click to Login
    </Link>
  );
}

export default Dashboard