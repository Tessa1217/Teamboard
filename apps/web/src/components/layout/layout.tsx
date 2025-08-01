import { Outlet } from "react-router-dom";
import Header from "./header";
const Layout = () => {
  return (
    <div className="w-full h-full relative flex flex-col">
      <Header />
      <main className="p-4 size-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
