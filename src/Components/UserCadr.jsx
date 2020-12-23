import React from 'react'
import {Link} from 'react-router-dom'

const UserCard = ({link, children}) => {
    return (
        <div className="users__item">
            <Link className="users__link" to={link}>
                {/* //TODO: Пустые круги дабы ничего лишнего не тянуть*/}
                <div className="users__avatar"/>
                <p>{children}</p>
            </Link>
        </div>
    )
}

export default UserCard