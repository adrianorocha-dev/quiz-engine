import type { Question } from "~/server/validators";
import InputField from "./input-field";
import OneChoiceField from "./one-choice-field";
import MultiChoiceField from "./multi-choice-field";

export default function QuestionInput(props: {
  question: Question;
  value?: string | string[];
  onChange: (answer: string | string[]) => void;
}) {
  switch (props.question.type) {
    case "input":
      if (props.value && typeof props.value !== "string") return null;
      return (
        <InputField
          question={props.question}
          value={props.value ?? ""}
          onChange={props.onChange}
        />
      );
    case "one-choice":
      if (props.value && typeof props.value !== "string") return null;
      return (
        <OneChoiceField
          question={props.question}
          value={props.value ?? ""}
          onChange={props.onChange}
        />
      );
    case "multiple-choice":
      if (props.value !== undefined && !Array.isArray(props.value)) return null;
      return (
        <MultiChoiceField
          question={props.question}
          value={props.value ?? []}
          onChange={props.onChange}
        />
      );
  }
}
