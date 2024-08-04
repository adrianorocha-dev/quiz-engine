"use client";

import { ReactNode, useState } from "react";
import type { Quiz } from "~/server/validators";
import QuestionSlide from "./question-slide";
import NavigationBar from "./progress-bar";

export default function Quiz(props: { quiz: Quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(-1);

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
        <QuestionSlide question={props.quiz.questions[currentQuestion]!} />
      )}

      <NavigationBar
        current={currentQuestion}
        total={props.quiz.questions.length}
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
