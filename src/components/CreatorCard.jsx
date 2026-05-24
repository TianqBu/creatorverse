import { Link } from 'react-router-dom'

function CreatorCard({ creator }) {
  return (
    <article className="creator-card">
      <Link to={`/${creator.id}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <div className="creator-card__image-wrap">
          {creator.imageURL ? (
            <img src={creator.imageURL} alt={creator.name} loading="lazy" />
          ) : (
            <div className="creator-card__image-placeholder" aria-hidden="true">★</div>
          )}
        </div>
        <div className="creator-card__body">
          <h2 className="creator-card__name">{creator.name}</h2>
          <span className="creator-card__url" title={creator.url}>{creator.url}</span>
          <p className="creator-card__description">{creator.description}</p>
        </div>
      </Link>
      <div className="creator-card__actions">
        <a
          className="btn-view"
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit ↗
        </a>
        <Link to={`/edit/${creator.id}`} className="btn-edit">Edit</Link>
      </div>
    </article>
  )
}

export default CreatorCard
