import { NextRequest, NextResponse } from "next/server";
import { advisorKnowledge, advisorProducts } from "@/lib/ai-knowledge";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

type OpenAITextContent = { type?: string; text?: string };
type OpenAIOutputItem = { content?: OpenAITextContent[] };
type OpenAIResponse = {
  output_text?: string;
  output?: OpenAIOutputItem[];
  error?: { message?: string };
};

function extractOutputText(data: OpenAIResponse): string {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const text = data.output
    ?.flatMap((item) => item.content ?? [])
    .map((content) => content.text)
    .filter((value): value is string => Boolean(value))
    .join("\n")
    .trim();

  return text || "Nu am putut genera un răspuns acum. Te rog folosește formularul de contact sau WhatsApp.";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { question?: unknown };
    const question = typeof body.question === "string" ? body.question.trim() : "";

    if (question.length < 4) {
      return NextResponse.json({ error: "Scrie o întrebare puțin mai detaliată." }, { status: 400 });
    }

    if (question.length > 900) {
      return NextResponse.json({ error: "Întrebarea este prea lungă. Te rog rezumă situația în maximum câteva fraze." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          answer:
            "Asistentul AI nu este configurat încă. Pentru moment, te rog folosește formularul de contact sau WhatsApp pentru o recomandare personalizată.",
        },
        { status: 200 }
      );
    }

    const model = process.env.OPENAI_MODEL || "gpt-5.4-mini";
    const products = JSON.stringify(advisorProducts, null, 2);

    const prompt = `${advisorKnowledge}\n\nDate consultant:\n- Nume site: ${SITE.name}\n- Zonă: ${SITE.city}\n- Telefon/WhatsApp: ${SITE.phoneDisplay}\n- Email: ${SITE.email}\n\nCatalog produse/categorii disponibile:\n${products}`;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        store: false,
        max_output_tokens: 450,
        input: [
          {
            role: "system",
            content: [{ type: "input_text", text: prompt }],
          },
          {
            role: "user",
            content: [{ type: "input_text", text: question }],
          },
        ],
      }),
    });

    const data = (await response.json()) as OpenAIResponse;

    if (!response.ok) {
      console.error("OpenAI advisor error", data.error?.message ?? data);
      return NextResponse.json(
        {
          error:
            "Asistentul nu poate răspunde acum. Te rog folosește formularul de contact sau WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ answer: extractOutputText(data) });
  } catch (error) {
    console.error("AI advisor route error", error);
    return NextResponse.json(
      { error: "A apărut o eroare. Te rog încearcă din nou sau scrie direct pe WhatsApp." },
      { status: 500 }
    );
  }
}
