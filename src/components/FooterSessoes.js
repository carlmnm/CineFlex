import styled from "styled-components";
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";



export default function Foot() {
    const { idFilme } = useParams()
    const [imgURL, setImgURl] = useState(undefined)
    const [title, setTitle] = useState(undefined)

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)

        requisicao.then(resposta => {
            setImgURl(resposta.data.posterURL)
            setTitle(resposta.data.title)
            console.log(resposta.data)
        })
    }, [])

    return (
        <>
            <ContainerFooter data-test="footer">
                <MovieTitle>
                    {title}
                </MovieTitle>
                <MoviePoster>
                    <img src={imgURL} />
                </MoviePoster>
            </ContainerFooter>
        </>
    )
}

{/*styled components*/ }

const ContainerFooter = styled.div`
width: 375px;
height: 117px;
background-color: #9EADBA;
display: flex;
flex-direction: row-reverse;
justify-content: flex-end;
align-items: center;
`

const MovieTitle = styled.div`
font-family: 'Roboto';
font-weight: 400;
font-size: 26px;
color: #293845;
`

const MoviePoster = styled.div`
width: 64px;
height: 89px;
background-color: white;
display: flex;
position: relative;
margin-left: 10px;
margin-right: 14px;
img{
    width: 48px;
    position: absolute;
    bottom: 9px;
    left: 8px;
}
`
