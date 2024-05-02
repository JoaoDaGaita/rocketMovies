import { Input } from "../Input";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input />
      <div className="profile">
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <a>sair</a>
        </div>
        <img src="https://github.com/JoaoDaGaita.png" alt="" />
      </div>
    </Container>
  )
}