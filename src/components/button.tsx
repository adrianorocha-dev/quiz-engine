import { cn } from "~/utils/cn";

type ButtonProps = React.ComponentProps<"button">;

export default function Button({
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex justify-center gap-1 rounded-xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 aria-disabled:pointer-events-none aria-disabled:bg-blue-300",
        className,
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
