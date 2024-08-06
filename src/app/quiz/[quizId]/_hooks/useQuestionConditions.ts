import { useEffect } from "react";
import type { Question } from "~/server/validators";

type Props = {
  currentQuestion?: Question;
  answers: Map<string, string | string[]>;
  setCurrentQuestion: (
    valueOrUpdater: number | ((current: number) => number),
  ) => void;
};

export function useQuestionConditions({
  currentQuestion,
  answers,
  setCurrentQuestion,
}: Props) {
  return useEffect(() => {
    if (!currentQuestion?.conditions) {
      return;
    }

    if (
      currentQuestion.conditions.some(
        (condition) =>
          !answers.has(condition.questionId) ||
          !compareAnswers(answers.get(condition.questionId)!, condition.answer),
      )
    ) {
      setCurrentQuestion((current) => current + 1);
    }
  }, [answers, currentQuestion, setCurrentQuestion]);
}

function compareAnswers(a: string | string[], b: string | string[]) {
  if (typeof a === "string" && typeof b === "string") {
    return a === b;
  }

  if (!Array.isArray(a) || !Array.isArray(b)) {
    return false;
  }

  if (a.length !== b.length) {
    return false;
  }

  return a.every((value, index) => value === b[index]);
}
