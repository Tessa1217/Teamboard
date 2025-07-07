import { getBadgeClasses, BasicBadgeProps } from "./badge-styles";

interface BadgeProps extends BasicBadgeProps {
  children: React.ReactNode;
  onClose?: () => void;
}
const Badge = ({ color, shape, children, onClose }: BadgeProps) => {
  const badgeClass = getBadgeClasses({ color, shape });
  return (
    <span className={badgeClass}>
      {children}
      {onClose && (
        <button
          onClick={onClose}
          className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Remove badge"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.47 6.47a.75.75 0 011.06 0L10 8.94l2.47-2.47a.75.75 0 111.06 1.06L11.06 10l2.47 2.47a.75.75 0 11-1.06 1.06L10 11.06l-2.47 2.47a.75.75 0 11-1.06-1.06L8.94 10 6.47 7.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Badge;
