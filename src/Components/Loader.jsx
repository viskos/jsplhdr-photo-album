import React from 'react'
import '../Styles/loaderStyles.scss'

export const Loader = () => {
    return (
        <div className="flex">
            <div className="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}