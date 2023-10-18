import { useState, useEffect } from "react"
import axios from "axios" 
import { CardAgent } from "../../components/CardAgent/CardAgent" 
import { ContainerList } from "./AgentsListPage.style"

export function AgentsListPage(props) {
    
    const [agentsList, setAgentsList] = useState([])
    const url = 'https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true'

    const getAgents = async () => {
        try{
            const response = await axios.get(url)
            setAgentsList(response.data.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAgents()
    },[])

    const printAgentsList = agentsList.map((agent) => {
        return(
            <CardAgent 
                key={agent.displayName} 
                infoAgent={agent}
                goToDetailPage={props.goToDetailPage}
            />
        ) 
    })
    
    return(
        <>
            <ContainerList>
                {printAgentsList}
            </ContainerList>
        </> 
    )
}