import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.name || !body?.phone || !body?.date) {
    return NextResponse.json({ error: "Brak wymaganych pól" }, { status: 400 });
  }

  // TODO: podłączyć wysyłkę e-mail / integrację z CRM zamiast logowania.
  console.log("Nowe zapytanie ofertowe:", body);

  return NextResponse.json({ ok: true });
}
