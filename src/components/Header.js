import styled from "styled-components"

export default function Head() {
    return (
        <>
            <Header>
                <p>
                    CINEFLEX
                </p>
            </Header>
        </>
    )
}

{/*styled components*/ }

const Header = styled.div`
width: 375px;
height: 67px;
background-color: #c3cfd9;
display: flex;
align-items: center;
justify-content: center;
p{
    font-family: 'Roboto';
    font-size: 34px;
    font-weight: 400;
    color: #e8833a;
}
`