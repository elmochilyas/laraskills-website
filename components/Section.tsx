type SectionVariant = "surface" | "alt" | "elevated";

type SectionProps = {
  variant?: SectionVariant;
  id?: string;
  children: React.ReactNode;
  className?: string;
};

const variantClasses: Record<SectionVariant, string> = {
  surface: "section-surface",
  alt: "section-alt",
  elevated: "section-elevated",
};

export default function Section({
  variant = "surface",
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
