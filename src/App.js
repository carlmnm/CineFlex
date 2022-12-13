import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Tela1 from "./components/Tela1";
import GlobalStyle from "./components/GlobalStyle"
import Tela2 from "./components/Tela2"
import Tela3 from "./components/Tela3"
import Tela4 from "./components/Tela4"
import { useEffect, useState } from "react"

export default function App() {
  const [title, setTitle] = useState(undefined)
  const [time, setTime] = useState(undefined)
  const [data, setData] = useState(undefined)
  const [cadeiras, setCadeiras] = useState([])
  const [nome, setNome] = useState("")
  const [cpfClient, setCpfClient] = useState("")

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Tela1 />} />
        <Route path="/sessoes/:idFilme" element={<Tela2 />} />
        <Route path="/assentos/:idSessao" element={<Tela3
          cadeiras={cadeiras}
          setCadeiras={setCadeiras}
          title={title}
          setTitle={setTitle}
          time={time}
          setTime={setTime}
          data={data}
          setData={setData}
          nome={nome}
          setNome={setNome}
          cpfClient={cpfClient}
          setCpfClient={setCpfClient}
        />} />
        <Route path="/sucesso" element={<Tela4
          cadeiras={cadeiras}
          setCadeiras={setCadeiras}
          title={title}
          setTitle={setTitle}
          time={time}
          setTime={setTime}
          data={data}
          setData={setData}
          nome={nome}
          setNome={setNome}
          cpfClient={cpfClient}
          setCpfClient={setCpfClient}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

{/*styled components*/ }

const ContainerApp = styled.div`
width: 375px;
height: 877px;
`