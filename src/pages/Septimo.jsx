import storeTecnologia from "../context/storeTecnologia"
import Octavo from "./Octavo"


const Septimo = () => {

  const {detalle,setComponente} = storeTecnologia()

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand - Ejemplo</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Librería para manejar el estado global. Además, funciona como un store que cualquier componente puede usar.
        </li>
      </ul>


      <h2 className="text-red-700 text-center mt-8">Padre</h2>

      <div className="border-2 border-red-500 flex-colum justify-center items-center w-120 mx-auto mb-8">

        <Octavo/>
        
        <p>Nombre: {detalle.nombre}</p>
        
        <p>Tipo: {detalle.tipo}</p>

        <p>Precio: ${detalle.precio.toFixed(2)}</p>

        <button className="bg-orange-600 text-white py-1 px-3 rounded w-full mt-4" onClick={()=>{setComponente({nombre: "NVIDIA GeForce RTX 4070 Super", tipo: "Tarjeta Gráfica (GPU)", precio: 699.99})}}>Cambiar</button>

        
      </div>

    </>
  )
}

export default Septimo
