import React from 'react'
import './Menu.css'

import NavButton from '../NavButton'

export default (props) => {

  return (

    <nav className="Menu">

      <p><NavButton link='/'> Pedro º-º </NavButton></p>

      <p><NavButton link='/carlos'> Carlos 0-0 </NavButton></p>

    </nav>
  )
}
