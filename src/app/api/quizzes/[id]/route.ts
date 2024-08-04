import { getQuiz } from "~/server/data/quiz";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  if (!params.id) {
    return Response.json({ message: "No quiz id provided" }, { status: 400 });
  }

  const quiz = await getQuiz(params.id);

  if (!quiz) {
    return Response.json({ message: "Quiz not found" }, { status: 404 });
  }

  return Response.json(quiz, { status: 200 });
}
