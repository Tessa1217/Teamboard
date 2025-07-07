import type { Size, Shape } from "../../../types/ui";

export interface BaseAvatarProps {
  size?: Size;
  shape?: Shape;
}

export const getAvatarClasses = ({
  size = "md",
  shape = "circle",
}: BaseAvatarProps) => {
  const sizeClasses: Record<Size, string> = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-base",
  };

  const shapeClasses: Record<Shape, string> = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
  };

  return `relative overflow-hidden ${sizeClasses[size]} ${shapeClasses[shape]}`;
};
