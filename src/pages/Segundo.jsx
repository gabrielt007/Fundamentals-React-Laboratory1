import { useState } from "react"

const Segundo = () => {
  // Estado inicial: false (el mensaje está oculto)
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <h1 className="font-bold text-2xl">Ejemplo de Uso - Use State</h1>
      <hr className="border-gray-400 mb-6"/>

      <div className="bg-gray-100 p-6 rounded-lg text-center">
        {/* El botón cambia el estado al valor contrario de 'mostrar' */}
        <button 
          className="bg-blue-600 text-white px-4 py-2 rounded shadow"
          onClick={() => setMostrar(!mostrar)}
        >
          {mostrar ? "Ocultar Mensaje" : "Mostrar Mensaje"}
        </button>

        {/* Condicional simple: si 'mostrar' es true, enseña el párrafo */}
        {mostrar && (
          <p className="mt-4 text-lg font-medium text-green-700">
            ¡Hola! Este es el mensaje oculto Bv. 
          </p>
        )}
      </div>
    </>
  )
}

export default Segundo;