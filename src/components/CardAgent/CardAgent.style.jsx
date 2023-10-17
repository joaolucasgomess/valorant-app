import styled from 'styled-components'

export const Card = styled.div`
    background-color: #F2F2F2;
    margin: 2.25rem;
    padding: 1rem;
    display: flex;
    flex-flow: column;
    border-radius: 0.5rem;

    h1{
        margin-bottom: 0;
    }

    h3{
        max-width: 80%;
        line-height: 1.45em;
        color: #666;
    }
`

export const CardImage = styled.div`
    img{
        width: 100%;
        border-radius: 0.2em;
    }
`


