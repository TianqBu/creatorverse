import { useState } from 'react'

function CreatorForm({ initial = {}, onSubmit, submitLabel = 'Save', onCancel, busy }) {
  const [form, setForm] = useState({
    name: initial.name ?? '',
    url: initial.url ?? '',
    description: initial.description ?? '',
    imageURL: initial.imageURL ?? '',
  })
  const [error, setError] = useState(null)

  function update(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError(null)
    if (!form.name.trim() || !form.url.trim()) {
      setError('Name and URL are required.')
      return
    }
    try {
      await onSubmit(form)
    } catch (err) {
      setError(err?.message ?? 'Something went wrong saving this creator.')
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="creator-name">Name</label>
        <input
          id="creator-name"
          type="text"
          value={form.name}
          onChange={update('name')}
          placeholder="e.g. Marques Brownlee"
          required
          autoFocus
        />
      </div>
      <div className="form-field">
        <label htmlFor="creator-url">Channel URL</label>
        <input
          id="creator-url"
          type="url"
          value={form.url}
          onChange={update('url')}
          placeholder="https://www.youtube.com/@mkbhd"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="creator-description">Description</label>
        <textarea
          id="creator-description"
          value={form.description}
          onChange={update('description')}
          placeholder="What do they make and why do you love them?"
          rows={4}
        />
      </div>
      <div className="form-field">
        <label htmlFor="creator-image">Image URL (optional)</label>
        <input
          id="creator-image"
          type="url"
          value={form.imageURL}
          onChange={update('imageURL')}
          placeholder="https://..."
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={busy}>
          {busy ? 'Saving…' : submitLabel}
        </button>
        {onCancel && (
          <button type="button" className="btn-secondary" onClick={onCancel} disabled={busy}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default CreatorForm
