import styled from "styled-components"

export default function PageTitle(){
    return(
        <Title>
            <p>
                Selecione o filme
            </p>
        </Title>
    )
}

{/*styled components*/}

const Title = styled.div`
width: 374px;
height: 110px;
display: flex;
align-items: center;
justify-content: center;
p{
    font-size: 24px;
    font-weight: 400px;
    font-family: 'Roboto';
    color: #293845;
}
`