import React from 'react'
import styled from 'styled-components'
import { bool } from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { NotFoundPage, MainPage } from 'components'

const MainApp = props => (
    <Switch>
      <Route path="/" component={MainPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
)

export default MainApp
