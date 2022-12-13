import styled from "styled-components";
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";



export default function Foot(props) {
    const {title, setTitle, time, setTime, data, setData} = props
    const { idSessao } = useParams()
    const [imgURL, setImgURl] = useState(undefined)
    const [calendar, setCalendar] = useState(undefined)

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        console.log(data)

        requisicao.then(resposta => {
            setImgURl(resposta.data.movie.posterURL)
            setTitle(resposta.data.movie.title)
            setCalendar(resposta.data.day.weekday)
            setTime(resposta.data.name)
            setData(resposta.data.day.date)
        })
    }, [])

    return (
        <>
            <ContainerFooter data-test="footer">
                <MovieTitle>
                    {title}
                    <Hour>
                        {calendar} - {time}
                    </Hour>
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
margin-top: 30px;
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

const Hour =styled.div`
font-family: 'Roboto';
font-weight: 400;
font-size: 26px;
color: #293845;
margin-top: 5px;
`