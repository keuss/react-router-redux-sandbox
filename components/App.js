import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  console.log('render App with', children)
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/foo">Foo</Link>
        <Link to="/bar">Bar</Link>
      </header>
      <main style={{ marginTop: '1.5em' }}>{children}</main>
    </div>
  )
}
