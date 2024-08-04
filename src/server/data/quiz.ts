import fs from "fs/promises";
import path from "path";
import { quizSchema } from "~/server/validators";
import { tryPromise, tryResult } from "~/utils/try";

export async function getQuiz(id: string) {
  const [formJsonData, fileError] = await tryPromise(
    fs.readFile(path.resolve("public", "json-examples", `${id}.json`), "utf-8"),
  );

  if (fileError) {
    console.error(fileError);
    return null;
  }

  const [data, jsonError] = tryResult(() => JSON.parse(formJsonData));
  if (jsonError) {
    console.error(jsonError);
    return null;
  }

  const result = quizSchema.safeParse(data);
  if (!result.success) {
    console.error(result.error);
    return null;
  }

  return result.data;
}
