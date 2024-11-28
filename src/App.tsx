import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard'
import "bootstrap/dist/css/bootstrap.min.css";

// Page Router with Login page as Default.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
]);

function App() {

  return (
    <>
      {/* Instead of loading App page directs to pages using Router */}
      <RouterProvider router={router} />
    </>
  );
}

export default App
