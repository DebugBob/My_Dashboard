import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    // Placeholder Button returns to Dashboard
    <Link to={"/Dashboard"} className="btn btn-primary">
      Error Page, Click to Dashboard
    </Link>
  );
}

export default ErrorPage