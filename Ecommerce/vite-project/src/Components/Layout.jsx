import React from 'react'
import Footer from './Footer'
import Navabar from './Navabar'

const Layout = ({children}) => {
  return (
    <div>
        <Navabar/>
        <div>
            {children}
        </div>
        <footer />
    </div>
  )
}

export default Layout