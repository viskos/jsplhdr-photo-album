import React from 'react'
import {observer} from 'mobx-react-lite'

import popupStore from '../Store/PopupStore'

import {Loader} from './Loader'

const Popup = observer(({image}) => {
    return (
        <div className='popup'>
            <div className='popup__overlay'>
                {
                    !popupStore.loading ?
                        <img src={image} alt='popup img' onClick={() => popupStore.closePopup()}/> : <Loader/>
                }
                <button className='popup__close-button close' onClick={() => popupStore.closePopup()}>&times;</button>
                <button onClick={() => popupStore.popupNavigation('prev')}/>
                <button onClick={() => popupStore.popupNavigation('next')}/>
            </div>
        </div>
    )
})

export default Popup