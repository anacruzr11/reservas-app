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
      <div>
  <div className="container text-center">
    <h1>Menú</h1>
    <div className="seccion1">
      <div className="row">
        <div className="col">
          <h6>Entradas</h6>
        </div>
        <div className="col">
          <h6>Res</h6>
        </div>
        <div className="col">
          <h6>Cerdo</h6>
        </div> 
        <div className="col">
          <h6>Pollo</h6>
        </div>          
      </div>
      <div className="row">
        <div className="col">
          <li className="list-group-item">Patacón con hogao</li>
          <li className="list-group-item">Mini chorizo con melao</li>
          <li className="list-group-item">Chicharrones de cuajada</li>
          <li className="list-group-item">Empanaditas</li>
          <li className="list-group-item">Arepa boyacense</li>
          <li className="list-group-item">Chunchullo</li>                    
          <li className="list-group-item">Chicharrón con criolla</li>                    
          <li className="list-group-item">Yuquitas con suero</li>        
          <li className="list-group-item">Aros de cebolla</li>
        </div>
        <div className="col">
          <li className="list-group-item">Cola sudada</li>
          <li className="list-group-item">Churrasco</li>
          <li className="list-group-item">Lomo en salsa</li>
          <li className="list-group-item">Sobrebarriga sudada</li>
          <li className="list-group-item">Sobrebarriga en salsa</li>
          <li className="list-group-item">Punta de anca</li>                    
          <li className="list-group-item">Mamona</li>                    
          <li className="list-group-item">Filete asado</li>        
          <li className="list-group-item">Posta cartagenera</li>
          <li className="list-group-item">Bandeja paisa</li>
        </div>
        <div className="col">
          <li className="list-group-item">Chuleta asada</li>
          <li className="list-group-item">Chuleta apanada</li>
          <li className="list-group-item">Costillas BBQ</li>
          <li className="list-group-item">Costillas sudadas</li>
          <li className="list-group-item">Cocido boyacense</li>
          <li className="list-group-item">Lomo asado</li>
          <li className="list-group-item">Lomo sudado</li>
          <li className="list-group-item">Frijolada</li>                 
          <li className="list-group-item">Lechona</li>                 
        </div>
        <div className="col">
          <li className="list-group-item">Pechuga gratinada</li>
          <li className="list-group-item">Pollo sudado</li>
          <li className="list-group-item">Arroz con pollo</li>
          <li className="list-group-item">Sancocho</li>
          <li className="list-group-item">Pollo a la criolla</li>
          <li className="list-group-item">Pollo asado</li>
          <li className="list-group-item">Pechuga con salsa de queso</li>
          <li className="list-group-item">Pechuga rellena de jamón y queso</li>
        </div>          
      </div> 
    </div>         
    <div className="seccion2">
      <div className="row">
        <div className="col">
          <h6>Sopas</h6>
        </div>
        <div className="col">
          <h6>Postres</h6>
        </div>
        <div className="col">
          <h6>Bebidas sin alcohol</h6>
        </div> 
        <div className="col">
          <h6>Bebidas con alcohol</h6>
        </div>          
      </div>
      <div className="row">
        <div className="col">
          <li className="list-group-item">Patacón con hogao</li>
          <li className="list-group-item">Mini chorizo con melao</li>
          <li className="list-group-item">Chicharrones de cuajada</li>
          <li className="list-group-item">Empanaditas</li>
          <li className="list-group-item">Arepa boyacense</li>
          <li className="list-group-item">Chunchullo</li>                    
          <li className="list-group-item">Chicharrón con criolla</li>                    
          <li className="list-group-item">Yuquitas con suero</li>        
          <li className="list-group-item">Aros de cebolla</li>
        </div>
        <div className="col">
          <li className="list-group-item">Cola sudada</li>
          <li className="list-group-item">Churrasco</li>
          <li className="list-group-item">Lomo en salsa</li>
          <li className="list-group-item">Sobrebarriga sudada</li>
          <li className="list-group-item">Sobrebarriga en salsa</li>
          <li className="list-group-item">Punta de anca</li>                    
          <li className="list-group-item">Mamona</li>                    
          <li className="list-group-item">Filete asado</li>        
          <li className="list-group-item">Posta cartagenera</li>
          <li className="list-group-item">Bandeja paisa</li>
        </div>
        <div className="col">
          <li className="list-group-item">Chuleta asada</li>
          <li className="list-group-item">Chuleta apanada</li>
          <li className="list-group-item">Costillas BBQ</li>
          <li className="list-group-item">Costillas sudadas</li>
          <li className="list-group-item">Cocido boyacense</li>
          <li className="list-group-item">Lomo asado</li>
          <li className="list-group-item">Lomo sudado</li>
          <li className="list-group-item">Frijolada</li>                 
          <li className="list-group-item">Lechona</li>                 
        </div>
        <div className="col">
          <li className="list-group-item">Pechuga gratinada</li>
          <li className="list-group-item">Pollo sudado</li>
          <li className="list-group-item">Arroz con pollo</li>
          <li className="list-group-item">Sancocho</li>
          <li className="list-group-item">Pollo a la criolla</li>
          <li className="list-group-item">Pollo asado</li>
          <li className="list-group-item">Pechuga con salsa de queso</li>
          <li className="list-group-item">Pechuga rellena de jamón y queso</li>
        </div>          
      </div> 
    </div>  
  </div>
  <div className="image col-6">
    <div className="reserInfo">
      <div className="texts">
        <h3>Reserva con nosotros</h3>
        <h5>Déjanos tus datos y pronto estaremos comunicándonos contigo para completar tu reserva. También puedes llamarnos o contactarnos por correo.</h5>
      </div>
      <div className="contact-info">
        <div className="phone">
          <span>+57 (310) 011-0498</span>
        </div>
        <div className="email">
          <span>contact-info@biacol.com</span>
        </div>
        <p>Carrera 4 #11c-98</p>
      </div>                    
    </div>                   
  </div>
</div>

      <footer className="footer">
       <div className="footertext">
        <p>© 2023 Ana María Cruz Rodríguez</p>
       </div>
      </footer>
    </div>
  )
}

export default Menu
