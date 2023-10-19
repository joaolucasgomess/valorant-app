import { ContainerSection } from './SelectionAbilities.style'

export function SelectionAbilities(props){
    return(
        <>
            <ContainerSection>
                <img src={props.ability.displayIcon} alt="Ability Icon" />
                <h3>{props.ability.displayName}</h3>
                <p>{props.ability.description}</p>
            </ContainerSection>
        </>
    )
}