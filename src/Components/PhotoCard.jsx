import React from 'react'

const PhotoCard = ({children, handleClick, idx}) => {
    return (
        <div
            className="photos__item"
            key={children.id}
            onClick={() => {handleClick(idx)}}
        >
            <img src={children.thumbnailUrl} alt={children.title}/>
        </div>
    )
}

export default PhotoCard