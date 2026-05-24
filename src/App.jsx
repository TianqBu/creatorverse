import { Link, useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import NotFound from './components/NotFound.jsx'

function App() {
  const element = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/new', element: <AddCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/:id', element: <ViewCreator /> },
    { path: '*', element: <NotFound message="That page doesn't exist." /> },
  ])

  return (
    <>
      <header className="app-header">
        <Link to="/" className="brand">
          Creator<span>verse</span>
        </Link>
        <nav>
          <Link to="/">All</Link>
          <Link to="/new" className="btn-add-creator">+ Add Creator</Link>
        </nav>
      </header>
      <main className="page-container">{element}</main>
    </>
  )
}

export default App
