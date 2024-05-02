import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Perfil() {
  return (
    <Container>
      <header>
        <Button icon={FiArrowLeft} title="Voltar" />
      </header>
      <Form>
        <Avatar>

          <img src="https://github.com/JoaoDaGaita.png" alt="" />
          <label>
            <FiCamera />
            <input type="text" />
          </label>

        </Avatar>

        <Input
          placeholder="Nome"
          icon={FiUser}
          type="text"
        />
        <Input
          placeholder="e-mail"
          type="email"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}