import type { Color } from "../../../types/ui";
type BadgeShape = "flat" | "pill";

export interface BasicBadgeProps {
  color?: Color;
  shape?: BadgeShape;
}

export function getBadgeClasses({
  color = "gray",
  shape = "pill",
}: BasicBadgeProps) {
  const baseClasses =
    "inline-flex items-center text-xs font-medium px-2 py-0.5";

  const colorClasses: Record<Color, string> = {
    red: "bg-red-100 text-red-800",
    orange: "bg-orange-100 text-orange-800",
    yellow: "bg-yellow-100 text-yellow-800",
    amber: "bg-amber-100 text-amber-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    gray: "bg-gray-100 text-gray-800",
  };

  const shapeClasses: Record<BadgeShape, string> = {
    flat: "rounded-sm",
    pill: "rounded-full",
  };

  return [baseClasses, colorClasses[color], shapeClasses[shape]].join(" ");
}
