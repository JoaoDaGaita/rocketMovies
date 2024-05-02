import { FiPlus } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, MovieHeader, MovieList } from "./styles";
import { Movie } from "../../components/Movie";

export function Home() {
  return (
    <Container>
      <Header></Header>
      <main>
        <MovieHeader>
          <h1>Meus filmes</h1>
          <Button icon={FiPlus} title={"Adicionar filme"} />
        </MovieHeader>

        <MovieList>
          <Movie />
          <Movie />
        </MovieList>
      </main>
    </Container>
  )
}