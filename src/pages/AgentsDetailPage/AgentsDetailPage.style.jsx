import styled from 'styled-components'

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    height: 40rem;

    img{
        position: absolute;
        width: 50rem;
    }

    button{
        width: 5rem;
        height: 2rem;
        position: absolute;
        z-index: 1;
        left: 0;
    }
`

export const Video = styled.video`
    width: 100vw;
    object-fit: cover;
`

export const ContainerSection = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100vw;
    margin: 0rem 15vw;
    align-items: center;
    
    h1{
        font-size: 5vw;

    }

    h2{
        font-size: 2.5vw;
    }

    span{
        color: gray;
    }

    div{
        max-width: 20vw;
        display: flex;
        flex-direction: column;
    }

    p{
        font-size: 1vw;
    }
`

export const ContainerAbilities = styled.div`
    display: flex;
    background-color: gray;
    justify-content: space-between;
    max-width: 100vw;
    margin: 5vw 20vw;
    border-radius: 0.5rem;
`

export const ButtonBack = styled.button`
    
`