import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import UsernameSearch from "./projects/UsernameSearch"
import history from '../history'
import ProjectList from './projects/ProjectList'
import ProjectShow from './projects/ProjectShow'

const App = () => {
    return (
        <div className = 'ui container'>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path='/' exact component={UsernameSearch}/>
                        <Route path='/:username' exact component={ProjectList}/>
                        <Route path='/:username/:projectname' exact component={ProjectShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App