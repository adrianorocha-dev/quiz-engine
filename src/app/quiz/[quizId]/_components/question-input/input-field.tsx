import type { Question } from "~/server/validators";

export default function InputField(props: {
  question: Extract<Question, { type: "input" }>;
  value: string;
  onChange: (answer: string) => void;
}) {
  return (
    <input
      className="rounded-md border-2 border-gray-300 px-4 py-2 focus:outline-blue-500"
      type="text"
      placeholder={props.question.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}
