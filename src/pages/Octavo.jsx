import storeTecnologia from "../context/storeTecnologia"

const Octavo = () => {

  const {detalle} = storeTecnologia()

  return (
    <>

      <h2 className="text-cyan-700">Hijo</h2>

      <div className="flex justify-center mb-8">

        <div className="max-w-sm border-2 border-cyan-500 rounded-lg p-4 w-80 text-center">

          <p>Nombre: {detalle.nombre}</p>

          <p>Tipo: {detalle.tipo}</p>

          <p>Precio: ${detalle.precio.toFixed(2)}</p>

        </div>

      </div>

    </>
  )
  }

export default Octavo
