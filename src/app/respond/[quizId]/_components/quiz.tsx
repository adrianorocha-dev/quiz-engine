"use client";

import { ReactNode, useEffect, useState } from "react";
import type { Quiz } from "~/server/validators";
import QuestionSlide from "./question-slide";
import NavigationBar from "./progress-bar";
import { useQuestionConditions } from "../_hooks/useQuestionConditions";

export default function Quiz(props: { quiz: Quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  const [answers, setAnswers] = useState(new Map<string, string | string[]>());

  useQuestionConditions({
    currentQuestion: props.quiz.questions[currentQuestion],
    answers,
    setCurrentQuestion,
  });

  const handleAnswer = (answer: string | string[]) => {
    setAnswers(
      (answers) =>
        new Map(answers.set(props.quiz.questions[currentQuestion]!.id, answer)),
    );
  };

  return (
    <div className="flex h-full flex-1 flex-col">
      {currentQuestion < 0 ? (
        <QuizIntro
          quizTitle={props.quiz.title}
          quizLength={props.quiz.questions.length}
        />
      ) : currentQuestion >= props.quiz.questions.length ? (
        <QuizFinished />
      ) : (
        <QuestionSlide
          question={props.quiz.questions[currentQuestion]!}
          value={answers.get(props.quiz.questions[currentQuestion]!.id)}
          onChange={handleAnswer}
        />
      )}

      <NavigationBar
        current={currentQuestion}
        total={props.quiz.questions.length}
        canGoNext={
          !!answers.get(props.quiz.questions[currentQuestion]?.id ?? "")?.length
        }
        onPrevious={() => setCurrentQuestion((current) => current - 1)}
        onNext={() => setCurrentQuestion((current) => current + 1)}
      />
    </div>
  );
}

function QuizIntro(props: { quizTitle: string; quizLength: number }) {
  const quizTimeMins = props.quizLength * 2;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-3xl font-bold">{props.quizTitle}</h1>
      <p className="text-lg">{props.quizLength} questions available</p>
      <p className="text-base">
        This quiz will take about {quizTimeMins} minutes
      </p>
    </div>
  );
}

function QuizFinished() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-3xl font-bold">Quiz Finished</h1>
      <p className="text-lg">
        You have completed the quiz. Thank you for participating!
      </p>
    </div>
  );
}
