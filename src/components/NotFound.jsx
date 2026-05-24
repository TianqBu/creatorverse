import { Link } from 'react-router-dom'

function NotFound({ message = "That creator doesn't exist." }) {
  return (
    <section className="empty-state">
      <div className="empty-state__ring">
        <span className="empty-state__zero">?</span>
      </div>
      <h2 className="empty-state__heading">Not found</h2>
      <p className="empty-state__body">{message}</p>
      <Link to="/" className="btn-add-creator">Back to all creators</Link>
    </section>
  )
}

export default NotFound
