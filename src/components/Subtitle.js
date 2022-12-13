import styled from "styled-components";

export default function Legenda() {
    return (
        <Indice>
            <CirculoSelecionado>
                <p>Selecionado</p>
            </CirculoSelecionado>

            <CirculoDisponivel>
                <p>Disponível</p>
            </CirculoDisponivel>

            <CirculoIndisponivel>
                <p>Indisponível</p>
            </CirculoIndisponivel>
        </Indice>
    )
}

{/*styled components*/ }

const Indice = styled.div`
width: 375px;
height: 54px;
display:  flex;
justify-content: space-around;
`

const CirculoSelecionado = styled.div`
width: 25px;
height: 25px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;
display: flex;
align-items: center;
justify-content: center;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #4E5A65;
    margin-top: 50px;
}
`

const CirculoDisponivel = styled.div`
width: 25px;
height: 25px;
background: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 17px;
display: flex;
align-items: center;
justify-content: center;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #4E5A65;
    margin-top: 50px;
}
`

const CirculoIndisponivel = styled.div`
background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 17px;
width: 25px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #4E5A65;
    margin-top: 50px;
}
`