const Producto = () => {
  // 1. Variable: Objeto para almacenar información (como en tu ejemplo)
  const item = {
    nombre: "Laptop Pro 14",
    precio: 1200,
    stock: 1, // Usaremos esto para el condicional
  };

  return (
    // 2. Fragment: Agrupamos todo sin crear nodos extra
    <>
      <h1 className="font-bold text-2xl text-blue-600">React ejemplo de uso Nro 1</h1>
      
      <hr className="border-blue-200 mb-8"/>
      
      {/* 3. JSX: Lista de conceptos aplicados en este bloque */}
      <ul className="list-decimal pl-5 mb-6 text-gray-700">
        <li>
          <strong>Props/Data:</strong> Los datos fluyen desde objetos de JavaScript.
        </li>
        <li>
          <strong>Operador Ternario:</strong> Ideal para cambiar etiquetas o colores según el estado.
        </li>
        <li>
          <strong>Tailwind:</strong> Estilizado rápido mediante clases de utilidad.
        </li>
      </ul>

      {/* Contenedor tipo Card */}
      <div className="flex justify-center mt-10">
        
        <div className="border-2 border-indigo-100 rounded-xl p-6 w-72 shadow-lg">
          
          <h2 className="text-xl font-bold mb-1">{item.nombre}</h2>
          
          <p className="text-gray-500 mb-4 font-mono">${item.precio}</p>
          
          {/* 4. Condicional: Si el stock es mayor a 0 muestra "Disponible", si no "Agotado" */}
          <div className={`mb-4 py-1 text-sm font-medium rounded ${item.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {item.stock > 0 ? "En Stock" : "Agotado"}
          </div>
          
          {/* 5. Evento: Función anónima en el onClick */}
          <button 
            className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg w-full transition-colors"
            onClick={() => { alert(`Añadido: ${item.nombre}`) }}
          >
            Comprar ahora
          </button>
        
        </div>
      
      </div>
    </>
  )
}

export default Producto;