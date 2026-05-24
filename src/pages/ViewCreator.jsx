import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client.js'
import NotFound from '../components/NotFound.jsx'

function ViewCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setNotFound(false)
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()
      if (cancelled) return
      if (error || !data) setNotFound(true)
      else setCreator(data)
      setLoading(false)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [id])

  async function handleDelete() {
    if (!creator) return
    const ok = window.confirm(`Delete "${creator.name}"? This cannot be undone.`)
    if (!ok) return
    setDeleting(true)
    const { error } = await supabase.from('creators').delete().eq('id', id)
    setDeleting(false)
    if (error) {
      window.alert('Could not delete: ' + error.message)
      return
    }
    navigate('/', { replace: true })
  }

  if (loading) return <p className="helper-text">Loading…</p>
  if (notFound) return <NotFound />

  return (
    <article className="detail-page">
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} className="detail-hero" />
      )}
      <div className="detail-meta">
        <h1 className="detail-name">{creator.name}</h1>
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-url"
        >
          {creator.url} ↗
        </a>
      </div>
      <p className="detail-description">{creator.description}</p>
      <div className="detail-actions">
        <Link to={`/edit/${id}`} className="btn-add-creator">Edit</Link>
        <button
          type="button"
          className="btn-delete"
          onClick={handleDelete}
          disabled={deleting}
        >
          {deleting ? 'Deleting…' : 'Delete'}
        </button>
        <Link to="/" className="detail-back-link">← Back to all creators</Link>
      </div>
    </article>
  )
}

export default ViewCreator
