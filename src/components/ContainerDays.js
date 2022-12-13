import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components"
import { Link } from "react-router-dom";

export default function DaysList() {
    const { idFilme } = useParams()
    const [day, setDay] = useState(undefined)


    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)

        requisicao.then(resposta => {
            setDay(resposta.data.days)
            console.log(resposta.data)
        })
    }, [])



    if (day === undefined) {
        return <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" />
    }

    return (
        <Days>
            {day.map((item) =>
                <div data-test="movie-day">
                    <Date>
                        {item.weekday} - {item.date}
                    </Date>

                    <ContainerTime>
                        {item.showtimes.map((hora) => (
                            <Link data-test="showtime" to={`/assentos/${hora.id}`}>
                                <Time>
                                    <p>
                                        {hora.name}
                                    </p>
                                </Time>
                            </Link>
                        ))}
                    </ContainerTime>
                </div>
            )}
        </Days>
    )
}

{/*styled components*/ }

const Days = styled.div`
width: 375px;
display: flex;
flex-wrap: wrap;
`
const Date = styled.div`
width: 375px;
//height: 37px;
font-family: 'Roboto';
font-size: 20px;
color: #293845;
margin-left: 24px;
margin-bottom: 22px
`
const ContainerTime = styled.div`
width: 375px;
display: flex;
margin-left: 24px;
margin-bottom: 23px;
text-decoration: none;
//justify-content: space-around;
`
const Time = styled.div`
width: 83px;
height: 43px;
background-color: #e8833a;
display: flex;
justify-content: center;
align-items: center;
margin-right: 8px;
border-radius: 3px;
color: white;
p{
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
}
`