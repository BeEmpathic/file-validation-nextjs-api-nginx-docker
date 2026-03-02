export async function POST(request: Request) {
  const message: string[] = ["This is a baisc message"];
  return new Response(JSON.stringify(message));
}
