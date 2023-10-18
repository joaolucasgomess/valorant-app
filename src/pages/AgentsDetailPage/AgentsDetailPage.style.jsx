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
`

export const Video = styled.video`
    width: 100vw;
    object-fit: cover;
`

export const ContainerSection = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100vw;
`

export const DisplayName = styled.h1`
    display: flex;
    justify-content: flex-start;
`

export const DisplayFunction = styled.h1`
    display: flex;
    justify-content: flex-end;
`

export const ContainerAbilities = styled.div`
    display: flex;
    background-color: gray;
    justify-content: space-between;
    max-width: 100vw;
`