import { getQuiz } from "~/server/data/quiz";
import Quiz from "./_components/quiz";
import { notFound } from "next/navigation";

type Props = {
  params: {
    quizId: string;
  };
};

export default async function RespondPage({ params }: Props) {
  const quizData = await getQuiz(params.quizId);

  if (!quizData) {
    return notFound();
  }

  return (
    <main className="flex min-h-svh w-full flex-col">
      <Quiz quiz={quizData} />
    </main>
  );
}
