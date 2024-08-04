import type { Question } from "~/server/validators";

export default function SelectField(props: {
  question: Extract<Question, { type: "one-choice" }>;
}) {
  return (
    <select>
      {props.question.options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
