/*
  1- useEffect (Ejemplo: Posts con estructura original)
*/

import { useEffect, useState } from "react"

const Tercero = () => {

  const [post, setPost] = useState({})
  const [buscar, setBuscar] = useState(0)

  const getPostApi = async() =>
  {
    const id = Math.floor(Math.random() * 100) + 1
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const response = await request.json()
    console.log(response)
    setPost(response)
  }
  
  useEffect(() => {
    getPostApi()
  }, [buscar])

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite ejecutar efectos secundarios, como peticiones a APIs o actualizar el DOM.
        </li>
      </ul>

      {/* Mantengo los contenedores de posición (flex y centrado) */}
      <div className="flex justify-center mb-8 mt-8">

        {/* Mantengo el recuadro (border, padding y ancho) pero sin colores extra */}
        <div className="border rounded-lg p-4 w-80 text-center">

          <h2 className="text-lg font-semibold mb-2">Publicación #{post.id}</h2>

          <p className="mb-3 text-left font-bold">Título: {post.title}</p>
          
          <p className="mb-3 text-left text-sm">{post.body}</p>

          {/* Único elemento con estilos de color y diseño */}
          <button 
            className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-800 transition-colors" 
            onClick={() => setBuscar(buscar + 1)}
          >
            Actualizar Contenido
          </button>
          
        </div>

      </div>

    </>
  )
}

export default Tercero