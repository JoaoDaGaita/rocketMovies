import { Container } from './styles'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}

export function Textarea({ ...rest }: TextareaProps) {
  return (
    <Container {...rest}>

    </Container>
  )
}