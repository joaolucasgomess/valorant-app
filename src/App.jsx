import { useState } from 'react';
import { AgentsDetailPage } from './pages/AgentsDetailPage/AgentsDetailPage'
import { AgentsListPage } from './pages/AgentsListPage/AgentsListPage'

function App() {

  const [currentPage, setCurrentPage] = useState('')
  const [idSearch, setIdSearch] = useState('')

  const goToDetailPage = (idSearch) => {
    setCurrentPage('detail')
    setIdSearch(idSearch)
  }

    const goToListPage = () => {
      setCurrentPage('list')
      setIdSearch('')
    }

    const selectPage = () => {
      switch(currentPage){
        case 'list': 
          return <AgentsListPage goToDetailPage={goToDetailPage}/>
        case 'detail':
          return <AgentsDetailPage idSearch={idSearch} goToListPage={goToListPage}/>
        default: 
          return <AgentsListPage goToDetailPage={goToDetailPage}/>
      }
    }

  return (
    <>
      {selectPage()}
      <button onClick= {() => {goToDetailPage('1')}}>Ir para detalhes</button>
      <button onClick={goToListPage}>Ir para lista</button>
    </>
  );
}

export default App;
