import { useState } from 'react';
import { AgentsDetailPage } from './pages/AgentsDetailPage/AgentsDetailPage'
import { AgentsListPage } from './pages/AgentsListPage/AgentsListPage'
import { Header } from './components/Header/Header'

function App() {

  const [currentPage, setCurrentPage] = useState('')
  const [uuidAgentSearch, setUuidAgentSearch] = useState('')
  const [inputSearch, setInputSearch] = useState('')

  const goToDetailPage = (uuidAgent) => {
    setCurrentPage('detail')
    setUuidAgentSearch(uuidAgent)
  }

    const goToListPage = () => {
      setCurrentPage('list')
      setUuidAgentSearch('')
    }

    const search = (searchedWord) => {
      setInputSearch(searchedWord)
      console.log(inputSearch)
    }

    const selectPage = () => {
      switch(currentPage){
        case 'list': 
          return <AgentsListPage goToDetailPage={goToDetailPage}/>
        case 'detail':
          return <AgentsDetailPage uuidAgent={uuidAgentSearch} goToListPage={goToListPage}/>
        default: 
          return <AgentsListPage goToDetailPage={goToDetailPage}/>
      }
    }

  return (
    <>
      <Header search={search}/>
      {selectPage()}
    </>
  );
}

export default App;
