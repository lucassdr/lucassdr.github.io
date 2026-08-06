import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <Container className="space-y-6">
      <p className="text-sm uppercase tracking-[0.2em] muted">404</p>
      <h1 className="text-3xl font-semibold">Página não encontrada</h1>
      <p className="muted max-w-xl">Essa página não existe ou mudou de endereço.</p>
      <LinkButton href="/">Voltar para home</LinkButton>
    </Container>
  );
}
