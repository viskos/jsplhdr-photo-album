import React from 'react'
import ReactDOM from 'react-dom'

import RootRouter from './RootRouter'

import './Styles/Styles.scss'

ReactDOM.render(
    <React.StrictMode>
        <RootRouter />
    </React.StrictMode>,
    document.getElementById('root')
)
