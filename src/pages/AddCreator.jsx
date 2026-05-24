import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client.js'
import CreatorForm from '../components/CreatorForm.jsx'

function AddCreator() {
  const navigate = useNavigate()
  const [busy, setBusy] = useState(false)

  async function handleSubmit(form) {
    setBusy(true)
    const { error } = await supabase
      .from('creators')
      .insert([
        {
          name: form.name.trim(),
          url: form.url.trim(),
          description: form.description.trim(),
          imageURL: form.imageURL.trim() || null,
        },
      ])
      .select()
    setBusy(false)
    if (error) throw new Error(error.message)
    navigate('/')
  }

  return (
    <section className="form-page">
      <h1 className="page-title">Add a creator</h1>
      <p className="page-subtitle">Share someone whose work you love.</p>
      <CreatorForm
        onSubmit={handleSubmit}
        submitLabel="Create creator"
        onCancel={() => navigate('/')}
        busy={busy}
      />
    </section>
  )
}

export default AddCreator
