/*
  1- customHook (Ejemplo: Rick and Morty & Users)
*/

import { useState } from "react"
import { useFetch } from "../customHook/useFecth"

const Cuarto = () => {
  
  const [usuarios, setUsuarios] = useState([])
  const [personajes, setPersonajes] = useState([])
  
  const fetchDataBackend = useFetch()

  const getDataUsuarios = async()=>{
    const users = await fetchDataBackend("https://jsonplaceholder.typicode.com/users")
    setUsuarios(users)
    console.log(users)  
  }
  
  const getDataPersonajes = async()=>{
    // API estable de Rick and Morty
    const data = await fetchDataBackend("https://rickandmortyapi.com/api/character")
    setPersonajes(data.results) // Accedemos a .results porque así viene en esta API
    console.log(data.results)  
  }

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite encapsular lógica reutilizable y que puede ser utilizado en cualquier componente.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">

        <div className="w-120 border rounded-lg p-4 w-80 text-center">

          <h2 className="text-lg font-semibold mb-2 underline">Más información</h2>
          
          <p className="mb-3 text-left mb-4"></p>
          
          {/* Mostramos el nombre del primer usuario y del primer personaje */}
          <pre className="text-xs overflow-hidden">User: {JSON.stringify(usuarios[0]?.name)}</pre>
          <pre className="text-xs overflow-hidden">PJ: {JSON.stringify(personajes[0]?.name)}</pre>
          
          <button 
            className="bg-violet-700 text-white py-1 px-3 mx-1 rounded mt-4" 
            onClick={getDataUsuarios}
          >
            Obtener Usuarios
          </button>
          
          <button 
            className="bg-violet-700 text-white py-1 px-3 rounded mt-2" 
            onClick={getDataPersonajes}
          >
            Obtener Personajes
          </button>
        </div>

      </div>

    </>
  )
}

export default Cuarto