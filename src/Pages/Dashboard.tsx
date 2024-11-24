import { Link } from "react-router-dom";
import { Fluent_Calendar } from "../Components/Calendar";

const Dashboard = () => {
    // Placeholder Button returns to Login Page
  return (
    <div>
      <Fluent_Calendar />
      <Link to={"/"} className="btn btn-primary">
        Dashboard page, click to Login
      </Link>
    </div>
  );
}

export default Dashboard