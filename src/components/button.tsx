import { cva, type VariantProps } from "class-variance-authority";

const buttonStyles = cva(
  "flex justify-center gap-1 rounded-xl px-4 py-2 font-bold aria-disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-500 text-white hover:bg-blue-700 aria-disabled:bg-blue-300",
        secondary:
          "bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 aria-disabled:bg-gray-100 aria-disabled:text-gray-300",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonStyles> &
  React.ComponentProps<"button">;

export default function Button({
  children,
  className,
  disabled,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, className })}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
