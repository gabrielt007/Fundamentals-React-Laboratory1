import { useEffect, useState } from "react"

const Decimo = () => {

  const [userToken, setUserToken] = useState({})

  // Integrante 1
  const integrante1 = {
    name: "Lubswer Catagña",
    rol: "Scrum Máster",
    token: "Lubswer-123***"
  }

  const obtenerTokenIntegrante1 = () => {
    localStorage.setItem("token-user", JSON.stringify(integrante1))
    const token = JSON.parse(localStorage.getItem("token-user"))
    setUserToken(token)
  }

  // Integrante 2
  const integrante2 = {
    name: "Gabriel Toaquiza",
    rol: "Frontend developer",
    token: "Gabriel-456***"
  }
  
  const obtenerTokenIntegrante2 = () => {
    localStorage.setItem("token-user", JSON.stringify(integrante2))
    const token = JSON.parse(localStorage.getItem("token-user"))
    setUserToken(token)
  }
  

  // Integrante 3
  const integrante3 = {
    name: "Jossue Chulde",
    rol: "Backend developer",
    token: "Jossue-789***"
  }

  const obtenerTokenIntegrante3 = () => {
    localStorage.setItem("token-user", JSON.stringify(integrante3))
    const token = JSON.parse(localStorage.getItem("token-user"))
    setUserToken(token)
  }
  

  const limpiarToken = () => {
    localStorage.removeItem("token-user")
    setUserToken(null)
  }

  return (
    <>
      <h1 className="font-bold text-2xl">Localstorage - Ejemplo</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          LocalStorage sirve para mantener información en el navegador incluso después de recargar o cerrar la página.
        </li>
        <li>
          Los datos se guardan en pares clave–valor (como un diccionario).
        </li>
        <li>
          Solo admite strings → si se quiere guardar se debe usar JSON.stringify() y para leerlos se usa JSON.parse()
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">

        <div className="w-120 border rounded-lg p-4 w-80 text-center">

          <h2 className="text-lg font-semibold mb-2">{userToken?.name || "Sin usuario"}</h2>

          <p className="mb-3">{userToken?.rol || "Sin rol"}</p>
          
          <p className="mb-3">{userToken?.token || "Sin token"}</p>

          <div className="flex flex-col gap-2">
            <button 
              className="bg-blue-700 text-white py-1 px-3 rounded mt-4" 
              onClick={obtenerTokenIntegrante1}
            >
              Obtener Token de integrante 1
            </button>
            
            <button 
              className="bg-green-700 text-white py-1 px-3 rounded" 
              onClick={obtenerTokenIntegrante2}
            >
              Obtener Token de integrante 2
            </button>
            
            <button 
              className="bg-orange-700 text-white py-1 px-3 rounded" 
              onClick={obtenerTokenIntegrante3}
            >
              Obtener Token de integrante 3
            </button>
            
            <button 
              className="bg-red-700 text-white py-1 px-3 rounded mt-2" 
              onClick={limpiarToken}
            >
              Limpiar Token
            </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Decimo
