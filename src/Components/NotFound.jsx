import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="error">
            <h3>You are in the wrong place.</h3>
            <Link className="error__link" to={'/'}>Go home</Link>
        </div>
    )
}

export default NotFound