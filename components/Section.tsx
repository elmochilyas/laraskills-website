type SectionVariant = "default" | "dark";

type SectionProps = {
  variant?: SectionVariant;
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  variant = "default",
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${variant === "dark" ? "bg-surface-alt" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
