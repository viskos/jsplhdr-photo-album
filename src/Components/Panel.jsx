import React from 'react'
import {Error} from './Error'
import {Loader} from './Loader'

const Panel = ({error, loading, children}) => {

    const renderContent = () => {
        if (error) return <Error/>
        if (loading) return <Loader/>
        if (children) return children
        return null
    }

    return renderContent()
}

export default Panel