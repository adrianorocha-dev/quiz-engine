import { CheckIcon } from "lucide-react";
import type { Question } from "~/server/validators";

export default function MultiChoiceField(props: {
  question: Extract<Question, { type: "multiple-choice" }>;
  value: string[];
  onChange: (answer: string[]) => void;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {props.question.options.map((option) => (
        <li key={option}>
          <label className="flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white p-4 transition-colors has-[:checked]:border-blue-400 has-[:checked]:bg-blue-50">
            <div className="grid">
              <input
                className="peer col-start-1 row-start-1 h-4 w-4 appearance-none rounded border border-gray-300 bg-white transition-colors checked:border-blue-500 checked:bg-blue-500 focus:outline-none forced-colors:appearance-auto"
                id={`input-${option}`}
                type="checkbox"
                name={props.question.title}
                value={option}
                checked={props.value.includes(option)}
                onChange={(e) =>
                  props.onChange(
                    props.value.includes(e.target.value)
                      ? props.value.filter((value) => value !== e.target.value)
                      : [...props.value, e.target.value],
                  )
                }
              />
              <CheckIcon className="invisible col-start-1 row-start-1 h-4 w-4 text-white transition-colors peer-checked:visible" />
            </div>

            {option}
          </label>
        </li>
      ))}
    </ul>
  );
}
