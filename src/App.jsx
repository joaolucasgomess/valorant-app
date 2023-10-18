import { useState } from 'react';
import { AgentsDetailPage } from './pages/AgentsDetailPage/AgentsDetailPage'
import { AgentsListPage } from './pages/AgentsListPage/AgentsListPage'

function App() {

  const [currentPage, setCurrentPage] = useState('')
  const [uuidAgentSearch, setUuidAgentSearch] = useState('')

  const goToDetailPage = (uuidAgent) => {
    setCurrentPage('detail')
    setUuidAgentSearch(uuidAgent)
  }

    const goToListPage = () => {
      setCurrentPage('list')
      setUuidAgentSearch('')
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
      {selectPage()}
    </>
  );
}

export default App;
