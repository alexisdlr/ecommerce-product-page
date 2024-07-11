import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import Hero from "./components/Hero";

const Main = styled(Wrapper).attrs({ as: "main" })`
  @media (max-width: 768px) {
    padding: 0;
  }
`;

function App() {
  return (
    <Main>
      <Header />
      <Hero />
    </Main>
  );
}

export default App;
