import { NextRequest } from 'next/server';
import OpenAI from 'openai';

function getOpenAI() {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error('AI service not configured');
  }
  return new OpenAI({
    apiKey,
    baseURL: 'https://api.deepseek.com',
  });
}

const systemPrompt = `You are a helpful assistant for Subnautica 2 players. You know everything about the game: creatures, biomes, resources, crafting recipes, vehicles, base building, and survival tips.

Rules:
- Answer concisely but accurately
- If asked about coordinates, give approximate locations
- If unsure, say so honestly
- Use markdown formatting for readability
- Keep responses under 300 words unless detailed explanation is requested`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    const openai = getOpenAI();
    
    const stream = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      stream: true,
      max_tokens: 800,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('AI API error:', error);
    return Response.json(
      { error: 'AI service temporarily unavailable' },
      { status: 500 }
    );
  }
}
