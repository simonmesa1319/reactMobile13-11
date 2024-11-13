import {useState,useEffect} from "react";
import React from 'react'

function ListadoUsuarios() {
    let usuarios=[
        {
            id: 5,
            nombre: "Alfredo Morelos",
            telefono: "2524978",
            ciudad: "Manizales"
        } ,

        {
            id: 5,
            nombre: "Daniel Mantilla",
            telefono: "2524979",
            ciudad: "Medellin"
        } ,

        {
            id: 5,
            nombre: "Jose Cabrera",
            telefono: "2524980",
            ciudad: "Bogota"
        } ,

        {
            id: 5,
            nombre: "Frank Santos",
            telefono: "2524981",
            ciudad: "Cali"
        } ,

        {
            id: 5,
            nombre: "Andres Roman",
            telefono: "2524982",
            ciudad: "Barranquilla"
        }

      ]

      const [datosAPI, setDatosApi]=useState(null)
      const [estadoCarga, setestadoCarga]=useState(true)

      //PROGRAMO EL USEEFFECT PARA GARANTIZAR QUE LLAMARE EL SERVICIOY TRAER LOS DATOS
      
      /*useEffect(function(){},[
        //ACA SE LLAMA AL SERVICIO (back)

        function(){

        //SE CARGA LA VARIABLE DE ESTADO CON LOS DATOS DE SERVICIO
        setDatosApi(usuarios)
        //SE CAMBIA LA VARIABLE DE ESTADO DE CARGA
        setestadoCarga(false)

        }
      ])*/
      
  return (
    <>
    <br /><br /><br /><br />
    {
        console.log(datosAPI)
    }
    <h3>ListadoUsuarios</h3>
    <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3">
        
    {
        //Renderizando un arrreglo de objetos
        usuarios.map(function(usuario){
            return(
                <div className="col">
                    <div className="card h-100 shadow p-5">
                        <h5>{usuario.nombre}</h5>
                        <h4>ciudad: {usuario.ciudad}</h4>
                        <h4>telefono: {usuario.telefono}</h4>
                    </div>
                </div>
            )
        })
    }
        </div>
    </div>


    </>
  )
}

export default ListadoUsuarios