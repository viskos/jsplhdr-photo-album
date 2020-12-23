import React from 'react'

export const Error = () => {

    const tryAgainClick = () => {
        window.location.reload()
    }

    return (
        <div className="error">
            <h3>Oops. Something seems to be wrong. Please try again or later.</h3>
            <button onClick={tryAgainClick}>Try again now</button>
        </div>
    )
}