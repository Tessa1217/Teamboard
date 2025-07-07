const AvatarFallback = ({ alt }: { alt: string }) => {
  const isCount = (alt: string) => alt.indexOf("+") === 0;
  const getCount = (count: string) => count;
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700 text-sm font-medium">
      {isCount(alt) ? getCount(alt) : getInitials(alt)}
    </div>
  );
};

export default AvatarFallback;
