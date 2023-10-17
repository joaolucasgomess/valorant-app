import { useState } from 'react';
import { AgentsDetailPage } from './pages/AgentsDetailPage/AgentsDetailPage'
import { AgentsListPage } from './pages/AgentsListPage/AgentsListPage'

function App() {

  const [currentPage, setCurrentPage] = useState('')
  const [nameAgentSearch, setNameAgentSearch] = useState('')

  const goToDetailPage = (nameAgent) => {
    setCurrentPage('detail')
    setNameAgentSearch(nameAgent)
  }

    const goToListPage = () => {
      setCurrentPage('list')
      setNameAgentSearch('')
    }

    const selectPage = () => {
      switch(currentPage){
        case 'list': 
          return <AgentsListPage goToDetailPage={goToDetailPage}/>
        case 'detail':
          return <AgentsDetailPage idSearch={nameAgentSearch} goToListPage={goToListPage}/>
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
