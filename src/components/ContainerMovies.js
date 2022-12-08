import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MoviesList() {
    const [imgUrl, setImgUrl] = useState(undefined)

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")

        requisicao.then(resposta => {
            setImgUrl(resposta.data)
        })
    }, [])

    if (imgUrl === undefined) {
        return <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" />
    }

    console.log(imgUrl)

    return (
        <Movie>
            {imgUrl.map(item =>
                <Link to="/sessoes">
                    <img src={item.posterURL} />
                </Link>
            )}
        </Movie>
    )
}

{/*styled components*/ }

const Movie = styled.div`
img{
    width: 129px;
    margin-bottom: 27px
}
width: 375px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

