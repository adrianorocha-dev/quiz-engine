import type { Question } from "~/server/validators";
import InputField from "./input-field";
import SelectField from "./select-field";
import MultiSelectField from "./multi-select-field";

export default function QuestionInput(props: { question: Question }) {
  switch (props.question.type) {
    case "input":
      return <InputField question={props.question} />;
    case "one-choice":
      return <SelectField question={props.question} />;
    case "multiple-choice":
      return <MultiSelectField question={props.question} />;
  }
}
