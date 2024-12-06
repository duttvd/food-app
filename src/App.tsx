import "./App.css";
import Login from "./auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./auth/Signup";
import MainLayout from "./MainLayout";
import ForgotPassword from "./auth/ForgotPassword";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // children: [
    //   {
    //     path: "/login",
    //     element: <Login />,
    //   }
    // ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />,
    </main>
  );
}

export default App;
