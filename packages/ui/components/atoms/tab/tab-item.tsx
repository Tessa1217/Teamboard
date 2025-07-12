import clsx from "clsx";

export type TabItemProps = {
  title: string;
  value: string;
  tabIcon?: React.ReactNode;
  active: boolean;
  onTabChange: (value: string) => void;
};

const TabItem = ({
  title,
  value,
  tabIcon,
  active,
  onTabChange,
}: TabItemProps) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center px-4 py-2 border-b-2 cursor-pointer",
        active
          ? "border-blue-600 text-blue-600"
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
      )}
      onClick={() => onTabChange(value)}
    >
      {tabIcon && (
        <span
          className={clsx("mr-1", active && "border-blue-600 text-blue-600")}
        >
          {tabIcon}
        </span>
      )}
      {title}
    </button>
  );
};

export default TabItem;
