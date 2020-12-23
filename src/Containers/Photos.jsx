import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {Link} from 'react-router-dom'

import photosStore from '../Store/PhotosStore'
import popupStore from '../Store/PopupStore'

import PhotoCard from '../Components/PhotoCard'
import Panel from '../Components/Panel'
import Popup from '../Components/Popup'

const Photos = observer((props) => {
    const {error, loading, photos} = photosStore
    const {currentPhoto, isShow} = popupStore

    useEffect(() => {
        photosStore.getPhotos(props.match.params.id)

        return () => {
            photosStore.cleanPhotos()
        }
    }, [])

    const handleClick = (idx) => {
        popupStore.showPopup(idx)
    }

    const renderPhotos = () => {
        if (!photos) return null
        return (
            <>
                <Link className="nav-link" to={`/album/${props.match.params.albumId}`}>Back to albums</Link>
                <Link className="nav-link" to={'/'}>Back to users</Link>
                {
                    isShow ? <Popup image={currentPhoto}/> : null
                }
                <div className="photos flex">
                    {
                        photos.map((i, idx) => (
                            <PhotoCard key={i.id} children={i} idx={idx} handleClick={handleClick}/>
                        ))
                    }
                </div>
            </>

        )
    }

    return (
        <>
            <Panel error={error} loading={loading}>
                {renderPhotos()}
            </Panel>
        </>
    )
})

export default Photos