import { useState, useEffect } from "react"
import axios from "axios"
import { ContainerHeader, Video, ContainerSection, ContainerAbilities, ButtonBack } from './AgentsDetailPage.style'
import { SelectionAbilities } from '../../components/SectionAbilities/SelectionAbilities'

export function AgentsDetailPage(props) {

    const[agent, setAgent] = useState({})
    const [loading, setLoading] = useState(true)
    const url = `https://valorant-api.com/v1/agents/${props.uuidAgent}?language=pt-BR`
    const videoBackground = require('../../assets/videos/backgroundVideo.mp4')
    const imgBackground = require('../../assets/img/backgroundImg.JPG')

    const getAgentByUuid = async () => {
        try{
            const response = await axios.get(url)
            setAgent(response.data.data)
            setLoading(false)
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

    const printScreenData = () => {
        if(loading){
            return <p>Carregando...</p>
        }else{
            return(
                <>
                    <ContainerHeader>
                        <ButtonBack onClick={props.goToListPage}>Voltar</ButtonBack>
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
                        <div>
                            <h1><span>//</span>{agent.displayName}</h1>
                            <h2><span>//</span>{agent.role && agent.role.displayName}</h2>
                        </div>
                        <div>
                            <h2><span>//</span>Biografia</h2>
                            <p>{agent.description}</p>
                        </div>
                    </ContainerSection>
                    <ContainerAbilities>
                        {printAbilities}
                    </ContainerAbilities>
                </>
            )
        }
    }
    
    return(
        <>
            {printScreenData()}
        </> 
    )
}