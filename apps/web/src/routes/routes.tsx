import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Manage from "../pages/board/manage";
import Login from "../pages/auth/login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
    ],
  },
]);

export default router;
