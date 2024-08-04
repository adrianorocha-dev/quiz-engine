"use client";

import { useState } from "react";
import Button from "~/components/button";
import type { Question, Quiz } from "~/server/validators";
import QuestionInput from "./question-input";
import Image from "next/image";

export default function Quiz(props: { quiz: Quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  console.log({ currentQuestion });

  return (
    <div className="flex h-full flex-1 flex-col">
      {currentQuestion === -1 ? (
        <QuizIntro
          quizTitle={props.quiz.title}
          quizLength={props.quiz.questions.length}
          onStartQuiz={() => setCurrentQuestion(0)}
        />
      ) : (
        <Question
          question={props.quiz.questions[currentQuestion]!}
          onPrevious={() => setCurrentQuestion((current) => current - 1)}
          onNext={() =>
            setCurrentQuestion((current) =>
              Math.min(current + 1, props.quiz.questions.length - 1),
            )
          }
        />
      )}
    </div>
  );
}

function QuizIntro(props: {
  quizTitle: string;
  quizLength: number;
  onStartQuiz: () => void;
}) {
  const quizTimeMins = props.quizLength * 2;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">{props.quizTitle}</h1>
      <p className="text-lg">{props.quizLength} questions available</p>
      <p className="text-base">
        This quiz will take about {quizTimeMins} minutes
      </p>

      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={props.onStartQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
}

function Question(props: {
  question: Question;
  onPrevious: () => void;
  onNext: () => void;
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

        <QuestionInput question={props.question} />

        <div className="flex gap-4">
          <Button onClick={props.onPrevious}>Previous Question</Button>
          <Button onClick={props.onNext}>Next Question</Button>
        </div>
      </div>
    </div>
  );
}
