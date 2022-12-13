import DaysList from "./ContainerDays"
import Head from "./Header"
import Foot from "./FooterSeats"
import Acentos from "./Seats"
import styled from "styled-components"

export default function Screen3({ cadeiras, setCadeiras, title, setTitle, time, setTime, data, setData, nome, setNome, cpfClient, setCpfClient }) {

    return (
        <>
            <Head />
            <Titulo>
                <p>Selecione o(s) assento(s)</p>
            </Titulo>
            <Acentos
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
            />
            <Foot
                cadeiras={cadeiras}
                setCadeiras={setCadeiras}
                title={title}
                setTitle={setTitle}
                time={time}
                setTime={setTime}
                data={data}
                setData={setData}
                cpfClient={cpfClient}
                setCpfClient={setCpfClient}
            />

        </>
    )
}

const Titulo = styled.div`
width: 374px;
height: 110px;
display: flex;
align-items: center;
justify-content: center;
p{
    font-size: 24px;
    font-weight: 400;
    font-family: 'Roboto';
    color: #293845;
}
`