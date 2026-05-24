import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../client.js'
import CreatorForm from '../components/CreatorForm.jsx'
import NotFound from '../components/NotFound.jsx'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [busy, setBusy] = useState(false)

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

  async function handleSubmit(form) {
    setBusy(true)
    const { error } = await supabase
      .from('creators')
      .update({
        name: form.name.trim(),
        url: form.url.trim(),
        description: form.description.trim(),
        imageURL: form.imageURL.trim() || null,
      })
      .eq('id', id)
      .select()
    setBusy(false)
    if (error) throw new Error(error.message)
    navigate(`/${id}`)
  }

  async function handleDelete() {
    if (!creator) return
    const ok = window.confirm(`Delete "${creator.name}"? This cannot be undone.`)
    if (!ok) return
    setBusy(true)
    const { error } = await supabase.from('creators').delete().eq('id', id)
    setBusy(false)
    if (error) {
      window.alert('Could not delete: ' + error.message)
      return
    }
    navigate('/', { replace: true })
  }

  if (loading) return <p className="helper-text">Loading…</p>
  if (notFound) return <NotFound />

  return (
    <section className="form-page">
      <h1 className="page-title">Edit creator</h1>
      <p className="page-subtitle">Update the details below or remove this creator.</p>
      <CreatorForm
        key={creator.id}
        initial={creator}
        onSubmit={handleSubmit}
        submitLabel="Save changes"
        onCancel={() => navigate(`/${id}`)}
        busy={busy}
      />
      <div className="danger-zone">
        <button
          type="button"
          className="btn-delete"
          onClick={handleDelete}
          disabled={busy}
        >
          Delete creator
        </button>
      </div>
    </section>
  )
}

export default EditCreator
