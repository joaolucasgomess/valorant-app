import { useState, useEffect } from "react"
import axios from "axios"
import { ContainerHeader, Video, ContainerSection, ContainerAbilities } from './AgentsDetailPage.style'
import { SelectionAbilities } from '../../components/SectionAbilities/SelectionAbilities'

export function AgentsDetailPage(props) {

    const[agent, setAgent] = useState({})
    const url = `https://valorant-api.com/v1/agents/${props.uuidAgent}?language=pt-BR`
    const videoBackground = require('../../assets/videos/backgroundVideo.mp4')
    const imgBackground = require('../../assets/img/backgroundImg.JPG')

    const getAgentByUuid = async () => {
        try{
            const response = await axios.get(url)
            setAgent(response.data.data)
            console.log(response.data.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAgentByUuid()
    },[])

    const printAbilities = agent.abilities && agent.abilities.map((ability) => {
        return(
            <SelectionAbilities 
                key={ability.displayName} 
                ability={ability}
            />
        )
    })
    
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
                <h2>{agent.role && agent.role.displayName}</h2>
            </ContainerSection>
            <ContainerAbilities>
                {printAbilities}
            </ContainerAbilities>
        </> 
    )
}