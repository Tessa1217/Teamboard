import React from "react";
interface SidebarNavItemProps {
  icon?: React.ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const SidebarNavItem = ({
  icon,
  label,
  href,
  active,
  disabled,
  onClick,
}: SidebarNavItemProps) => {
  const baseClasses =
    "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors cursor-pointer";

  const activeClasses = active
    ? "bg-blue-600 text-white font-medium"
    : "text-gray-700 hover:bg-gray-100";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  const sidebarNavClasses = [baseClasses, activeClasses, disabledClasses].join(
    " "
  );

  const content = (
    <div className={sidebarNavClasses}>
      {icon && <span className="w-4 h-4">{icon} </span>}
      <span>{label}</span>
    </div>
  );

  if (href && !disabled) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
};

export default SidebarNavItem;
