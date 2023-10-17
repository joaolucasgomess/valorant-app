import { useState } from "react"
import { Card, CardImage } from './CardAgent.style'

export function CardAgent(props) {

    const [agent, setAgent] = useState({
        uuid: props.infoAgent.uuid,
        name: props.infoAgent.displayName,
        icon: props.infoAgent.displayIcon,
        role: props.infoAgent.role.displayName
    })

    return(
        <Card>
            <CardImage>
                <img src={agent.icon} alt="Icon" />
            </CardImage>
            <h1>{agent.name}</h1>
            <h3>{agent.role}</h3>
        </Card>

    )
}