import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { NotFoundPage, MainPage } from 'components'

const MainApp = props => (
    <Switch>
      <Route path="/" component={MainPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
)

export default MainApp
