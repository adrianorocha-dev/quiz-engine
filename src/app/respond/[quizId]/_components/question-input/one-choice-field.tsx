import { ChevronDownIcon } from "lucide-react";
import type { Question } from "~/server/validators";

export default function OneChoiceField(props: {
  question: Extract<Question, { type: "one-choice" }>;
  value: string;
  onChange: (answer: string) => void;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {props.question.options.map((option) => (
        <li key={option}>
          <label className="flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white p-4 transition-colors has-[:checked]:border-blue-400 has-[:checked]:bg-blue-50">
            <input
              className="h-4 w-4 appearance-none rounded-full border border-gray-300 bg-white transition-colors checked:border-4 checked:border-blue-500 focus:outline-none forced-colors:appearance-auto"
              id={`input-${option}`}
              type="radio"
              name={props.question.title}
              value={option}
              checked={option === props.value}
              onChange={(e) => props.onChange(e.target.value)}
            />

            {option}
          </label>
        </li>
      ))}
    </ul>
  );
}
