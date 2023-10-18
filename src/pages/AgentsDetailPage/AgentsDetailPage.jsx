import { useState, useEffect } from "react"
import axios from "axios"
import { ContainerHeader, Video, ContainerSection } from './AgentsDetailPage.style'

export function AgentsDetailPage(props) {

    const[agent, setAgent] = useState({})
    const url = `https://valorant-api.com/v1/agents/${props.uuidAgent}?language=pt-BR`
    const videoBackground = require('../../assets/videos/backgroundVideo.mp4')
    const imgBackground = require('../../assets/img/backgroundImg.JPG')

    const getAgentByUuid = async () => {
        try{
            const response = await axios.get(url)
            setAgent(response.data.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAgentByUuid()
    },[])
    
    return(
        <>
            <ContainerHeader>
                <Video 
                    autoPlay="autoplay" muted loop
                    preload="true"
                    playsInline
                    poster={imgBackground}
                >
                    <source src={videoBackground} type="video/mp4"/>  
                </Video>
                <img src={agent.bustPortrait} alt="Portrait"/>
            </ContainerHeader>
            <ContainerSection>
                <h1>{agent.displayName}</h1>
            </ContainerSection>   
        </> 
    )
}