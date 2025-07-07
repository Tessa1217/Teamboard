import clsx from "clsx";
import Avatar, { AvatarProps } from "../../atoms/avatar/avatar";

interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number; // 최대 노출 아바타 수
  overlap?: boolean;
  size?: AvatarProps["size"];
  shape?: AvatarProps["shape"];
  className?: string;
}

const AvatarGroup = ({
  avatars,
  max = 5,
  overlap = true,
  size = "md",
  shape = "circle",
  className = "",
}: AvatarGroupProps) => {
  const visibleAvatars = avatars.slice(0, max);
  const hiddenCount = avatars.length - visibleAvatars.length;

  return (
    <div className={clsx("flex items-center", className)}>
      {visibleAvatars.map((avatar: AvatarProps, index) => (
        <div
          key={`${avatar.altText}_${index}`}
          className={clsx(overlap ? "-ml-2 first:ml-0" : "mr-2")}
        >
          <Avatar
            {...avatar}
            size={avatar.size || size}
            shape={avatar.shape || shape}
          />
        </div>
      ))}
      {hiddenCount > 0 && (
        <div className={clsx(overlap ? "-ml-2" : "mr-2")}>
          <Avatar
            altText={`+${hiddenCount}`}
            size={avatars[0].size || size}
            shape={avatars[0].shape || shape}
          />
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
