import { Container } from "./styles";

interface tagProps {
  title: string
}

export function Tag({ title }: tagProps) {
  return (
    <Container>
      {title}
    </Container>
  )
}