import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client.js'
import CreatorCard from '../components/CreatorCard.jsx'

function ShowCreators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      const { data, error: fetchError } = await supabase
        .from('creators')
        .select('*')
        .order('created_at', { ascending: true })
      if (cancelled) return
      if (fetchError) setError(fetchError.message)
      else setCreators(data ?? [])
      setLoading(false)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  if (loading) {
    return <p className="helper-text">Loading creators…</p>
  }

  if (error) {
    return (
      <section className="empty-state">
        <div className="empty-state__ring">
          <span className="empty-state__zero">!</span>
        </div>
        <h2 className="empty-state__heading">Could not load creators</h2>
        <p className="empty-state__body">{error}</p>
        <Link to="/new" className="btn-add-creator">+ Add a creator</Link>
      </section>
    )
  }

  if (creators.length === 0) {
    return (
      <section className="empty-state">
        <div className="empty-state__ring">
          <span className="empty-state__zero">0</span>
        </div>
        <h2 className="empty-state__heading">No creators yet</h2>
        <p className="empty-state__body">
          Add your first favorite content creator and they'll show up here.
        </p>
        <Link to="/new" className="btn-add-creator">+ Add your first creator</Link>
      </section>
    )
  }

  return (
    <>
      <h1 className="page-title">Your Creatorverse</h1>
      <p className="page-subtitle">
        {creators.length} creator{creators.length === 1 ? '' : 's'} you can't get enough of.
      </p>
      <div className="creators-grid">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </>
  )
}

export default ShowCreators
