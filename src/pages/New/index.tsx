import { FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { Textarea } from "../../components/Textarea";
import { Tag } from "../../components/Tag";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <Button title={"Voltar"} icon={FiArrowLeft} />
          <h1>Novo filme</h1>
        </div>

        <section>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </section>
        <Textarea placeholder="Observações" />

        <h3>Marcadores</h3>

        <span>
          <Tag title={"React"} />
        </span>
      </main>
    </Container>
  )
}