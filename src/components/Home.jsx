import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase/firebase'

const Home = () => {

  const [users, setUser] = useState([])
  const userCollectionRef = collection(db, 'reservas')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(0)
  const [comments, setComments] = useState("")

  const [formUpdate, setFormUpdate] = useState(false)
  const [item, setItem] = useState(null)

  const createUser = async() =>{
    await addDoc(userCollectionRef, {nombre:name, correo:email, telefono:phone, comentario:comments})
    getUsers()
  }

  const getUsers = async() =>{
    const data = await getDocs(userCollectionRef)
    setUser(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
  }

  const borrarUsuario = async(id) =>{
    const userDoc = doc(db,'reservas',id)
    await deleteDoc(userDoc)
    getUsers()
  }

  const formUpdateOpen = (data) => {
    setFormUpdate(true)
    setItem(data)
  }

  const handleChange = (e) =>{
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
    console.log(setItem)
  }
 
  const onUpdate = async(id) =>{
    await updateDoc(doc(db,'reservas',id), item);
    getUsers()
  }

  useEffect(() =>{
    getUsers();
  },[]);

  return (
    <div>
      <nav className='navBar'>
       <Link to={"/"}>Inicio</Link>
       <Link to={"/reservas"}>Reservas</Link>
       <Link to={"/menu"}>Menu</Link>
      </nav>
      <h1>Reserva con nosotros</h1>      
      <div className="form col-6">
         <div className="mb-3">
           <input type="text" placeholder='Nombre' className="form-control" onChange={(e) => {setName(e.target.value)}}/>
         </div>
         <div className="mb-3">
           <input type="email" placeholder='Correo' className="form-control" onChange={(e) => {setEmail(e.target.value)}}/>
         </div>
         <div className="mb-3">
           <input type="number" placeholder='Telefono' className="form-control" onChange={(e) => {setPhone(e.target.value)}}/>
         </div>
         <div className="mb-3">
           <textarea placeholder='Comentarios' className="form-control" rows={3} defaultValue={""} onChange={(e) => {setComments(e.target.value)}}/>
         </div>
         <div className="d-grid gap-2 col-4 mx-auto">
           <button id="btnCrear" className="btn btn-success" onClick={createUser()}>Enviar</button>
         </div>
       </div>
       {users.map((item)=>{
       return(
         <div key={item.id}>
           <h5>Nombre: <p>{item.nombre}</p></h5>
           <h5>Telefono: <p>{item.telefono}</p></h5>
           <h5>Correo: <p>{item.correo}</p></h5>
           <h5>Comentarios: <p>{item.comentarios}</p></h5>

          <button className="btn btn-danger" onClick={()=> borrarUsuario(item.id)}>Borrar</button>
          <button className="btn btn-warning" onClick={()=> formUpdateOpen(item)}>Editar</button>
         </div>
       )
     })}

    {
      formUpdate &&
      <>
      <input type="text" placeholder='Nombre' value={item.nombre} name="nombre" onChange={handleChange}/>
      <input type="text" placeholder='Correo' value={item.correo} name="correo" onChange={handleChange}/>
      <input type="text" placeholder='Telefono' value={item.telefono} name="telefono" onChange={handleChange}/>
      <input type="text" placeholder='Comentarios' value={item.comentarios} name="comentarios" onChange={handleChange}/>

      <button className="btn btn-info" onClick={()=> onUpdate(item.id)}>Guardar</button>
      </>
    }
    <footer className="footer">
     <div className="footertext">
       <p>© 2023 Ana María Cruz Rodríguez</p>
     </div>
    </footer>
   </div>
  )
}

export default Home
