import React from 'react'
import {Link} from 'react-router-dom'

const AlbumCard = ({length, children, link, cover}) => {
    return (
        <div className="album__item">
            <Link className="album__link" to={link}>
                {cover}
                <p className="album__name">{children.title}</p>
                <p className="album__quantity">{length} photos</p>
            </Link>
        </div>
    )
}

export default AlbumCard