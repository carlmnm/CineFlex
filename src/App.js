import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Tela1 from "./components/Tela1";
import GlobalStyle from "./components/GlobalStyle"
import Tela2 from "./components/Tela2"
import Tela3 from "./components/Tela3"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Tela1 />} />
        <Route path="/sessoes/:idFilme" element={<Tela2 />} />
        <Route path="/assentos/:idSessao" element={<Tela3 />} />
      </Routes>
    </BrowserRouter>
  );
}

{/*styled components*/ }

const ContainerApp = styled.div`
width: 375px;
height: 877px;
`