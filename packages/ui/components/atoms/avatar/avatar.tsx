import clsx from "clsx";
import { BaseAvatarProps } from "./avatar-styles";
import AvatarFallback from "./avatar-fallback";
import { getAvatarClasses } from "./avatar-styles";

interface AvatarCustomProps {
  altText: string;
  profileUrl?: string;
  fallback?: React.ReactNode;
  className?: string;
}

export type AvatarProps = AvatarCustomProps & BaseAvatarProps;

const Avatar = ({
  altText = "",
  profileUrl = "",
  size,
  shape,
  className,
  fallback,
}: AvatarProps) => {
  const avatarClass = getAvatarClasses({ size, shape });
  return (
    <div className={clsx(avatarClass, className)}>
      {profileUrl ? (
        <img
          src={profileUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
      ) : (
        (fallback ?? <AvatarFallback alt={altText} />)
      )}
    </div>
  );
};

export default Avatar;
