type SectionVariant = "default" | "dark" | "elevated";

type SectionProps = {
  variant?: SectionVariant;
  id?: string;
  children: React.ReactNode;
  className?: string;
};

const variantClasses: Record<SectionVariant, string> = {
  default: "section-default",
  dark: "section-dark",
  elevated: "section-elevated",
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
      className={`py-16 md:py-24 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
