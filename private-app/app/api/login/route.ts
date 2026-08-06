import { NextRequest, NextResponse } from "next/server";
import { createSessionToken, safeEqual, SESSION_COOKIE_NAME, SESSION_TTL_SECONDS } from "@/lib/session";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const username = typeof body?.username === "string" ? body.username : "";
  const password = typeof body?.password === "string" ? body.password : "";

  const expectedUser = process.env.AUTH_USER ?? "";
  const expectedPassword = process.env.AUTH_PASSWORD ?? "";

  const isValid =
    expectedUser.length > 0 &&
    expectedPassword.length > 0 &&
    safeEqual(username, expectedUser) &&
    safeEqual(password, expectedPassword);

  if (!isValid) {
    return NextResponse.json({ error: "Usuário ou senha inválidos." }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
  return response;
}
