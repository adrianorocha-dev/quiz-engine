import fs from "fs/promises";
import path from "path";
import { quizSchema } from "~/server/validators";
import { tryResult } from "~/utils/try";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  if (!params.id) {
    return Response.json({ message: "No quiz id provided" }, { status: 400 });
  }

  const formJsonData = await fs.readFile(
    path.resolve("public", "json-examples", `${params.id}.json`),
    "utf-8",
  );

  const [data, error] = tryResult(() => JSON.parse(formJsonData) as unknown);
  if (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }

  const result = quizSchema.safeParse(data);
  if (!result.success) {
    return Response.json(result.error.format(), { status: 400 });
  }

  return Response.json(data, { status: 200 });
}
