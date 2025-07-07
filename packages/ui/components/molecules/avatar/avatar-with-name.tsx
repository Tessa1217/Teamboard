import clsx from "clsx";
import Avatar, { AvatarProps } from "../../atoms/avatar/avatar";

interface AvatarWithNameProps extends AvatarProps {
  name?: string;
  direction?: "row" | "col";
  className?: string;
}
const AvatarWithName = ({
  altText,
  name,
  size,
  direction,
  className,
  ...props
}: AvatarWithNameProps) => {
  return (
    <div
      className={clsx(
        "flex",
        direction === "col" ? "flex-col" : "items-center",
        "gap-2",
        className
      )}
    >
      <Avatar {...props} altText={altText} size={size} />
      <span
        className={clsx("text-gray-800", {
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
        })}
      >
        {name ?? altText}
      </span>
    </div>
  );
};

export default AvatarWithName;
