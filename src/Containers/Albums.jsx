import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'

import albumStore from '../Store/AlbumStore'
import coverStore from '../Store/CoverStore'

import AlbumCard from '../Components/AlbumCard'
import Panel from '../Components/Panel'
import Cover from '../Components/Cover'
import {Link} from "react-router-dom";


const Albums = observer((props) => {
    const {quantity, albums, loading, error} = albumStore
    const {albumLength} = coverStore

    useEffect(() => {
        albumStore.getAlbums(props.match.params.id)

        return () => {
            albumStore.cleanAlbums()
        }
    }, [])

    const renderAlbums = () => {
        if (!albums) return null
        return (
            <>
                <Link className="nav-link" to={'/'}>Back to users</Link>
                <div className="album flex">
                    {
                        albums.map((i, idx) => (
                            <AlbumCard
                                quantity={quantity}
                                key={i.id}
                                children={i}
                                link={`/photos/${i.id}/${props.match.params.id}`}
                                idx={idx}
                                length={albumLength}
                                cover={<Cover
                                    className="album__cover"
                                    id={i.id}
                                    idx={idx}
                                    quantity={quantity}
                                />}
                            />
                        ))
                    }
                </div>

            </>
        )
    }

    return (
        <Panel error={error} loading={loading}>
            {renderAlbums()}
        </Panel>
    )
})

export default Albums