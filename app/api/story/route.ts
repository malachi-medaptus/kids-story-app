import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const hint = body.guideText || "a magical drawing";

  const story = `
Once upon a time there was ${hint}.
One day, something magical happened!
The adventure began with a sparkle of imagination.
And the best part? You created it.
`;

  return NextResponse.json({ story });
}
