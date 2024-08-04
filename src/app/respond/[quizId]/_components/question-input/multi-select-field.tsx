import type { Question } from "~/server/validators";

export default function MultiSelectField(props: {
  question: Extract<Question, { type: "multiple-choice" }>;
}) {
  return (
    <div>
      {props.question.options.map((option) => (
        <div key={option}>
          <input id={`${option}-checkbox`} type="checkbox" />
          <label htmlFor={`${option}-checkbox`}>{option}</label>
        </div>
      ))}
    </div>
  );
}
