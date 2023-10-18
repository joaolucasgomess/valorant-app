import styled from 'styled-components'

export const Card = styled.div`
    background-color: #F2F2F2;
    margin: 2.5rem;
    padding: 1.2rem;
    display: flex;
    flex-flow: column;
    border-radius: 0.5rem;
    max-width: 12rem;

    h1{
        margin-bottom: 0;
        font-size: 2rem;
    }

    h3{
        line-height: 1.45em;
        color: #666;
        font-size: 1rem;
    }
`

export const CardImage = styled.div`
    img{
        width: 100%;
        border-radius: 0.2em;
    }
`


