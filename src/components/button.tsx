import { cn } from "~/utils/cn";

type ButtonProps = React.ComponentProps<"button">;

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex justify-center gap-1 rounded-xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
