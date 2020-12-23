import React, {useEffect} from 'react'
import coverStore from '../Store/CoverStore'
import {observer} from "mobx-react-lite";
import {Loader} from "./Loader";

const Cover = observer(({id, idx, quantity}) => {
    const {loading, prevPhoto} = coverStore

    useEffect(() => {
        coverStore.getPhotos(id, quantity)
        return () => {
            coverStore.clearPreviews()
        }
    }, [])

    return (
        <>
            {
                !loading ?
                    <img src={prevPhoto[idx][0].thumbnailUrl}/> :
                    <Loader />
            }
        </>
    )
})

export default Cover