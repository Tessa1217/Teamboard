import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Manage from "../pages/board/manage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/manage",
        element: <Manage />,
      },
    ],
  },
]);

export default router;
