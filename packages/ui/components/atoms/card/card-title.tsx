interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h3 className={`text-sm font-medium text-gray-800 ${className}`}>
      {children}
    </h3>
  );
};

export default CardTitle;
