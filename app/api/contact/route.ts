import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Nome, email e mensagem são obrigatórios." },
        { status: 400 },
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Informe um email válido." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.RESEND_TO_EMAIL;

    // ✏️ EDITE AQUI o arquivo .env.local usando as variáveis de .env.example.
    if (!apiKey || !from || !to) {
      return NextResponse.json(
        {
          message:
            "Configuração de email pendente. Configure RESEND_API_KEY, RESEND_FROM_EMAIL e RESEND_TO_EMAIL.",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Contato do portfólio: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ message: "Mensagem enviada com sucesso." });
  } catch {
    return NextResponse.json(
      { message: "Erro ao enviar a mensagem. Tente novamente." },
      { status: 500 },
    );
  }
}
