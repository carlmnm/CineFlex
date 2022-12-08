import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tela1 />} />
        <Route path="/sessoes" element={<Tela2 />} />
      </Routes>
    </BrowserRouter>
  );
}

{/*styled components*/ }

const ContainerApp = styled.div`
width: 375px;
height: 877px;
`