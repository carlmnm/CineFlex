import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";
import Legenda from "./Subtitle"
import { useNavigate } from "react-router-dom"


export default function Acentos(props) {
    const {cadeiras, setCadeiras, nome, setNome, cpfClient, setCpfClient} = props
    const { idSessao } = useParams()
    const [seat, setSeat] = useState(undefined)
    //const [cadeiras, setCadeiras] = useState([])
    const [id, setId] = useState([])
    const navigate = useNavigate()
    console.log(id)
    
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)

        requisicao.then(resposta => {
            setSeat(resposta.data.seats)
        })
    }, [])

    if (seat === undefined) {
        return <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" />
    }

    function verificar(e, c, f) {
        const clicado = cadeiras.includes(e)
        if (!clicado && c) {
            setCadeiras([...cadeiras, e])
            setId([...id, f])
        } else {
            setCadeiras(cadeiras.filter(a => a !== e))
            setId(id.filter(a => a !== f))
        }

        if (c === false) {
            alert("Esse assento não está disponível")
        }
    }

    function reserveSeats(event) {
        event.preventDefault();

        const request = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
        ids: id,
        name: nome,
        cpf: cpfClient
        })
        request.then(() => navigate("/sucesso"))
  


    }

    return (
        <ContainerSeats>
            {seat.map((item) =>
                <IndividualSeat>
                    <div
                        cor={item.isAvailable}
                        className={cadeiras.includes(item.name) && item.isAvailable ? "clicado" : item.isAvailable ? "disponivel" : "indisponivel"}
                        onClick={() => verificar(item.name, item.isAvailable, item.id)}
                        data-test="seat"
                    >
                        {item.name}
                    </div>
                </IndividualSeat>
            )}
            <Legenda />
            <form onSubmit={reserveSeats}>
                <Label>
                    <labelText>Nome do comprador:</labelText>
                    <Input data-test="client-name" onChange={e => setNome(e.target.value)} value={nome} type="text" id="campoNome" placeholder="Digite seu nome..." />
                </Label>

                <Label>
                    <labelText>CPF do comprador:</labelText>
                    <Input data-test="client-cpf" onChange={e => setCpfClient(e.target.value)} value={cpfClient} type="text" id="campoCPF" placeholder="Digite seu CPF..." />
                </Label>
                <ButtonReserveSeats data-test="book-seat-btn" type="submit">
                    <p>
                        {"Reservar assento(s)"}
                    </p>
                </ButtonReserveSeats>
            </form>
        </ContainerSeats>

    )
}

{/*styled components*/ }

const ContainerSeats = styled.div`
width: 365px;
flex-wrap: wrap;
display: flex;
justify-content: center;
align-items: center;
margin-left: 11px;
`

const IndividualSeat = styled.div`
display: flex;
justify-content: center;
align-items: center;
.clicado{
    background-color: #1AAE9E;
    border: #0E7D71;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 18px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 11px;
    color: black;
}
.disponivel{
    background-color: #C3CFD9;
    border: #808F9D;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 18px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 11px;
    color: black;
}
.indisponivel{
    background-color: #FBE192;
    border: #F7C52B;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 18px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 11px;
    color: black;
}
`

const Label = styled.div`
color: #293845;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
margin-top: 20px;
margin-left: 8px
`

const Input = styled.input`
width: 327px;
height: 51px;
background: white;
border: 1px solid #D5D5D5;
border-radius: 3px;
margin-top: 3px;
::placeholder{
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;   
    font-size: 18px;
    color: #AFAFAF;
    margin: 18px
}
`

const ButtonReserveSeats = styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 57px;
margin-left: 70px;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
}
`


