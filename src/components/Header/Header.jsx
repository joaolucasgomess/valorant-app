import { useState } from 'react'
import { ContainerHeader } from './Header.style'

export function Header(props){

    const [inputSearch, setInputSearch] = useState('')

    props.search(inputSearch)

    return(
        <>
            <ContainerHeader>
                <input 
                    type="text"
                    placeholder="Pesquisa"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />
            </ContainerHeader>
        </>
    )
}