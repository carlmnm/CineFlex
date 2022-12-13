
import DaysLipxpxst from "./ContainerDays"
import Head from "./Header"
import PageTitle from "./SubHeader"
import Foot from "./FooterSessoes"
import styled from "styled-components"


export default function Screen4(props) {
    const { cadeiras, setCadeiras, title, setTitle, time, setTime, data, setData, nome, cpfClient } = props
    console.log(cadeiras)
    return (
        <>
            <Head />
            <PageTitle />
            <MovieSession>

                Filme e Sessão
                <Info>
                    <p>{title}</p>
                    <p>{data} - {time}</p>
                </Info>

                Ingressos
                <Info>
                    {cadeiras.map((item) =>
                        <p>
                            Assento {item}
                        </p>
                    )}
                </Info>

                Comprador
                <Info>
                    <p>
                        Nome: {nome}
                    </p>
                    <p>
                        CPF: {cpfClient}
                    </p>
                </Info>
            </MovieSession>
        </>
    )
}

{/*styled comṕonents*/ }

const MovieSession = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
display: flex;
flex-wrap: wrap;
color: #293845;
margin-left: 29px;
//background-color: red;
flex-direction: column;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    display: flex;
    align-items: center;
    color: #293845;
    margin-bottom: 5px;
}
`

const Info = styled.div`
margin-top: 15px;
margin-bottom: 55px
`