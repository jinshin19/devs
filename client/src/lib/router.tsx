import { createBrowserRouter } from "react-router-dom";
import Index from "../pages";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Read from "../pages/Read";
import Update from "../pages/Update";
import ProtectedRoutes from "./ProtectedRoutes";
import RegularRoutes from "./RegularRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Index />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/read/:id",
    element: (
      <ProtectedRoutes>
        <Read />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/update/:id",
    element: (
      <ProtectedRoutes>
        <Update />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: (
      <RegularRoutes>
        <Login />
      </RegularRoutes>
    ),
  },
  {
    path: "/signup",
    element: (
      <RegularRoutes>
        <Signup />
      </RegularRoutes>
    ),
  },
]);

export default router;
