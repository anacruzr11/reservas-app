import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <nav className='navBar'>
       <Link to={"/"}>Inicio</Link>
       <Link to={"/reservas"}>Reservas</Link>
       <Link to={"/menu"}>Menu</Link>
      </nav>
      <main className='informacion'>
         <div className="description col-5">
           <div className="titles">
             <h1 className="firtsTitle">Biacol</h1>
             <h2 className="subtitle">La mejor comida colombiana</h2>
          </div>
         <div className="text">
           <p>Desde 1998 traemos para ti, tu familia y amigos, los mejores sabores de las familias colombianas para que los disfruten juntos en cualquier ocasión.</p>
           <p>Atrévete a probar nuevos sabores traídos desde cada una de las regiones del país a tu mesa.</p>
         </div>
          </div>            
           <div className="imgPrincipal col-7">  
          </div>
      </main>
      <footer className="footer">
       <div className="footertext">
        <p>© 2023 Ana María Cruz Rodríguez</p>
       </div>
      </footer>
    </>
  )
}

export default App
