import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
      </header>
      <main style={{ marginTop: '1.5em' }}>{children}</main>
    </div>
  )
}
