
import DaysList from "./ContainerDays"
import Head from "./Header"
import PageTitle from "./SubHeader"
import Foot from "./FooterSessoes"
import styled from "styled-components"

export default function Screen2(){

    return(
        <>
        <Head/>
        <Title>
            <p>Selecione o horário</p>
        </Title>
        <DaysList/>
        <Foot/>
        </>
    )
}

const Title = styled.div`
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