import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request, res: Response) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("Open AI key not configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt not provided", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount not provided", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution not provided", { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Free trial expired", { status: 403 });
    }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    await increaseApiLimit();

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.error("Image API error: ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
