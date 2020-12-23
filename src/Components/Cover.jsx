import React, {useEffect} from 'react'
import coverStore from '../Store/CoverStore'
import {observer} from "mobx-react-lite";
import {Loader} from "./Loader";

const Cover = observer(({id, idx, quantity}) => {
    const {loading, prevPhotos} = coverStore

    useEffect(() => {
        coverStore.fetchPhotos(id, quantity)
        return () => {
            coverStore.clearPreviews()
        }
    }, [])

    return (
        <>
            {
                !loading ?
                    <img src={prevPhotos[idx][0].thumbnailUrl}/> :
                    <Loader />
            }
        </>
    )
})

export default Cover