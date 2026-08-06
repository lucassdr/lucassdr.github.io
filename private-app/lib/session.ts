// Sessão simples baseada em cookie assinado (HMAC-SHA256), sem banco de dados.
// Credenciais e segredo vêm de env vars (AUTH_USER, AUTH_PASSWORD, AUTH_SECRET).

export const SESSION_COOKIE_NAME = "session";
export const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 dias

const encoder = new TextEncoder();

function requireSecret(): string {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET não está definido.");
  }
  return secret;
}

async function getKey(secret: string) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

/** Comparação em tempo constante para evitar timing attacks. */
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function createSessionToken(): Promise<string> {
  const secret = requireSecret();
  const expires = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = String(expires);
  const key = await getKey(secret);
  const signature = toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
  return `${payload}.${signature}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expires = Number(payload);
  if (!Number.isFinite(expires) || expires < Math.floor(Date.now() / 1000)) return false;

  const secret = requireSecret();
  const key = await getKey(secret);
  const expectedSignature = toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));

  return safeEqual(signature, expectedSignature);
}
