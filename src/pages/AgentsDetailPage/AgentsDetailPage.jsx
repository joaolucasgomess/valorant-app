import { useState, useEffect } from "react"
import axios from "axios"
import { ContainerHeader, Video, ContainerSection, DisplayName, DisplayFunction, ContainerAbilities } from './AgentsDetailPage.style'

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

    function getAbilities() {
        if (agent.abilities) {
          return agent.abilities.map((ability, index) => (
            <div key={index}>
              <h3>{ability.displayName}</h3>
              <p>{ability.description}</p>
            </div>
          ));
        }else{
          return <p>Nenhuma habilidade encontrada.</p>;
        }
      }
    
    return(
        <>
            <ContainerHeader>
                
                {/*<Video 
                    autoPlay="autoplay" muted loop
                    preload="true"
                    playsInline
                    poster={imgBackground}
                >
                    <source src={videoBackground} type="video/mp4"/>  
                </Video> */}
                <img src={agent.bustPortrait} alt="Portrait"/>
            </ContainerHeader>
            <ContainerSection>
                <DisplayName>{agent.displayName}</DisplayName>
                <DisplayFunction>{agent.role.displayName}</DisplayFunction>
            </ContainerSection>
            <ContainerAbilities>
                {getAbilities()}
            </ContainerAbilities>
        </> 
    )
}