import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <nav className='navBar'>
       <Link to={"/"}>Inicio</Link>
       <Link to={"/reservas"}>Reservas</Link>
       <Link to={"/menu"}>Menu</Link>
      </nav>
      <footer className="footer">
       <div className="footertext">
        <p>© 2023 Ana María Cruz Rodríguez</p>
       </div>
      </footer>
    </div>
  )
}

export default Menu
