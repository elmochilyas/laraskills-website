export default function WorkflowArrow({ vertical }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex justify-center py-1 md:hidden">
        <svg
          className="h-6 w-3 text-border"
          viewBox="0 0 12 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 0v20M6 20l-5-5M6 20l5-5" />
        </svg>
      </div>
    );
  }

  return (
    <div className="hidden items-center md:flex">
      <svg
        className="h-3 w-6 text-border"
        viewBox="0 0 24 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M0 6h20M20 6l-5-5M20 6l-5 5" />
      </svg>
    </div>
  );
}
