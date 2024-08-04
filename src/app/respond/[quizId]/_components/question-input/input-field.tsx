import type { Question } from "~/server/validators";

export default function InputField(props: {
  question: Extract<Question, { type: "input" }>;
}) {
  return <input type="text" placeholder={props.question.placeholder} />;
}
