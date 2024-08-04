type ButtonProps = React.ComponentProps<"button">;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="rounded-xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      {...props}
    >
      {children}
    </button>
  );
}
