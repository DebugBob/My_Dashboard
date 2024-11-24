import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    // Placeholder Button returns to Dashboard
    <div className="alert alert-warning d-flex flex-column align-items-center">
    <h1 className="p-2">404 Not Found</h1>
    <p> Page not found</p>
      <Link to={"/Dashboard"} className="btn btn-primary mt-2">
        Click to return
      </Link>
    </div>
  );
}

export default ErrorPage