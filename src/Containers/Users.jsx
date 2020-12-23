import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'

import usersStore from '../Store/UsersStore'

import Panel from '../Components/Panel'
import UserCard from '../Components/UserCadr'

const Users = observer(() => {
    const {users, loading, error} = usersStore

    useEffect(() => {
        usersStore.getUsers()

        return () => {
            usersStore.clearUsers()
        }
    }, [])

    const renderUsers = () => {
        if (!users) return null
        return users.map(i => (
            <UserCard
                key={i.id}
                children={i.name}
                link={{
                    pathname: `/album/${i.id}`,
                    state: {
                        name: i.name
                    }
                }}
            />
        ))
    }

    return (
        <Panel loading={loading} error={error}>
            <div className="users flex">
                {renderUsers()}
            </div>
        </Panel>
    )
})

export default Users