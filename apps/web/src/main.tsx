import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import "./style.css";

const App = () => <RouterProvider router={router}></RouterProvider>;

createRoot(document.getElementById("app")!).render(<App />);
