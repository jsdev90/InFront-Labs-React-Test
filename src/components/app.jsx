import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Route } from 'react-router-dom'
import { routes } from '../routing'
import Header from './header'

function App({ location }) {

  const elements = routes.map((item, index) => {
    const { path, exact, component } = item
    const routeProps = { path, exact }
    return (<Route key={index} {...routeProps} component={component} />)
  })

  return (
    <div>
      {location.pathname !== '/login' && <Header pathname={location.pathname}/>}
      {elements}
    </div>
  )
}

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withRouter(App)
