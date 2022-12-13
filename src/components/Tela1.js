import Head from "./Header"
//import PageTitle from "./SubHeader"
import MoviesList from "./ContainerMovies"
import styled from "styled-components"
import PageTitle from "./SubHeader"

export default function Screen1(){
    return(
        <>
        <Head/>
        <Title>
            <p>Selecione o filme</p>
        </Title>
        <MoviesList/>
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