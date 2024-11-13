import { useState } from 'react'
import React from 'react'

function FormUser() {
// las variables de estado guardan un valor en la memoria, y cada varible de estado tiene dos componentes, un nombre para leerla y un nombre para escribirla, por lo general es ponerle "nombre de variable. Set nombre de variable"

    const [nombreUsuario, setNombreUsuario] = useState(''); // En los () es con lo que va a iniciar esa variable
    const [edadUsuario, setEdadUsuario] = useState('');
    const [correoUsuario, setCorreoUsuario] = useState('');
    const [contraseñaUsuario, setContraseñaUsuario] = useState('');
    const [ciudadUsuario, setCiudadUsuario] = useState('');
    const [fechaRegistro, setFechaRegistro] = useState('');
    const [telefonoUsuario, setTelefonoUsuario] = useState('');

    function procesarFormulario(evento){
        evento.preventDefault()
      let datosUsuario={
       nombre: nombreUsuario,
       edad: edadUsuario,
       correo: correoUsuario,
       contraseña: contraseñaUsuario,
       ciudad: ciudadUsuario,
       fecha: fechaRegistro,
       tlefono: telefonoUsuario
      }
      console.log(datosUsuario) // muestra los datos en consola
    }

  return (
    <>
        <br />
        <div className="container-form my-5">
            <div className="row">
                <div className="col-12">
                    <h3 className="registerUser">Registro de Usuario</h3>
                    <form className='p-5 border rounded shadow' onSubmit={procesarFormulario}>
                        <div className="row">
                            <div className="col-12">
                                
                                <label className='form-label'>Nombre: </label>
                                <input 
                                
                                
                                type="text" 
                                className="form-control" 
                                value={nombreUsuario}
                                onChange={function(evento){setNombreUsuario(evento.target.value)}}
                                />

                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-md-6">

                                <label className='form-label'>Edad:</label>
                                <input 

                                type="text" 
                                className="form-control" 
                                value={edadUsuario}
                                onChange={function(evento){setEdadUsuario(evento.target.value)}}
                                
                                />

                            </div>
                            <div className="col-12 col-md-6">
                                
                                <label className='form-label'>Correo:</label>
                                <input 
                                
                                type="mail" 
                                className="form-control" 
                                value={correoUsuario}
                                onChange={function(evento){setCorreoUsuario(evento.target.value)}}

                                />

                            </div>
                        </div>

                        
                        <div className="row mt-3">
                            <div className="col-12 col-md-6">

                                <label className='form-label'>Contraseña:</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                value={contraseñaUsuario}
                                onChange={function(evento){setContraseñaUsuario(evento.target.value)}}
                                
                                />

                            </div>
                            <div className="col-12 col-md-6">
                                
                                <label className='form-label'>Ciudad:</label>
                                <input 
                                
                                type="text" 
                                className="form-control" 
                                value={ciudadUsuario}
                                onChange={function(evento){setCiudadUsuario(evento.target.value)}}
                                
                                />

                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12 col-md-6">

                                <label className='form-label'>Fecha de Registro:</label>
                                <input 
                                
                                type="text" 
                                className="form-control" 
                                value={fechaRegistro}
                                onChange={function(evento){setFechaRegistro(evento.target.value)}}
                                
                                
                                />

                            </div>
                            <div className="col-12 col-md-6">
                                
                                <label className='form-label'>Teléfono:</label>
                                <input 
                                
                                type="number" 
                                className="form-control" 
                                value={telefonoUsuario}
                                onChange={function(evento){setTelefonoUsuario(evento.target.value)}}
                                
                                
                                />

                            </div>
                        </div>
                        <button type="submit" className='btn btn-outline-success my-5 w-100'>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormUser