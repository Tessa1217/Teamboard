import { Link } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Manage", href: "/manage" },
  ];
  return (
    <header className="w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          Teamboard
        </Link>

        {/* Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                "text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Profile or Auth */}
        <div className="flex items-center space-x-4">
          {/* Placeholder avatar */}
          <button
            className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"
            aria-label="User Menu"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
