import { useState, useEffect } from "react"
import axios from "axios" 
import { CardAgent } from "../../components/CardAgent/CardAgent" 
import { ContainerList, ContainerHeader } from "./AgentsListPage.style"

export function AgentsListPage(props) {
    
    const [agentsList, setAgentsList] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const url = 'https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true'

    const getAgents = async () => {
        try{
            const response = await axios.get(url)
            setAgentsList(response.data.data)
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAgents()
    },[])

    const filterAgentsList = agentsList.filter((agent) => 
        agent.displayName && 
        agent.displayName.toLowerCase().includes(inputSearch.toLowerCase()) ||
        agent.role.displayName.toLowerCase().includes(inputSearch.toLowerCase()) 
    )

    const printsScreenSata = () => {
        if(loading){
            return <p>Carregando...</p>
        }else{
            return filterAgentsList.map((agent) => {
                return(
                    <CardAgent 
                        key={agent.displayName} 
                        infoAgent={agent}
                        goToDetailPage={props.goToDetailPage}
                    />
                )    
            })
        }
    }

    const printAgentsList = filterAgentsList.map((agent) => {
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
            <ContainerHeader>
                <input 
                type="search"
                placeholder="Pesquisa"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                />
            </ContainerHeader>
            <ContainerList>
                {printsScreenSata()}
            </ContainerList>
        </>
    )
}