
import { Container } from "./styles";
import { IconType } from "react-icons";

interface ButtonProps extends React.AllHTMLAttributes<HTMLButtonElement> {
  title: string
  loading?: boolean
  icon?: IconType
}

export function Button({ icon: Icon, title, loading = false }: ButtonProps) {
  return (
    <Container
      type="button"
      disabled={loading}
    >
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : title}
    </Container>
  )
}