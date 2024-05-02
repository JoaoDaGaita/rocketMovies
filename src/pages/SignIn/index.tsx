import { Link } from "react-router-dom";
import { Background, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Faça seu login</h2>
          <Input icon={FiMail} type="email" placeholder="E-mail" />
          <Input icon={FiLock} type="password" placeholder="Senha" />

          <Button title={"Entrar"}></Button>
          <Link to="/">Criar Conta</Link>
        </div>
      </Form>
      <Background />
    </Container>
  )
}
