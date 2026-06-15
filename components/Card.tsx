type CardProps = {
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
};

export default function Card({ children, className = "", featured = false }: CardProps) {
  return (
    <div
      className={`${featured ? "card-featured" : "card-base"} p-6 ${className}`}
    >
      {children}
    </div>
  );
}
