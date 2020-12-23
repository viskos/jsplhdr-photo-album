import React, {Suspense, lazy} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Loader} from './Components/Loader'

const Albums = lazy(() => import('./Containers/Albums'))
const Photos = lazy(() => import('./Containers/Photos'))
const Users = lazy(() => import('./Containers/Users'))
const NotFound = lazy(() => import('./Components/NotFound'))

const RootRouter = () => {
    return(
        <Suspense fallback={<Loader />}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Users}/>
                    <Route path='/album/:id' component={Albums}/>
                    <Route path='/photos/:id/:albumId' component={Photos}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default RootRouter