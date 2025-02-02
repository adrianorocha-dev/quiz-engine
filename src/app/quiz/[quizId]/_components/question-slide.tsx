import Image from "next/image";
import type { Question } from "~/server/validators";
import QuestionInput from "./question-input";

export default function QuestionSlide(props: {
  question: Question;
  value?: string | string[];
  onChange: (answer: string | string[]) => void;
}) {
  return (
    <div className="flex-1">
      {props.question.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            className="object-cover"
            src={props.question.imageUrl}
            alt={props.question.title}
            fill
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-center gap-8 p-4">
        <div>
          <h1 className="text-3xl font-bold">{props.question.title}</h1>
          <p className="text-lg">{props.question.description}</p>
        </div>

        <QuestionInput
          question={props.question}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
