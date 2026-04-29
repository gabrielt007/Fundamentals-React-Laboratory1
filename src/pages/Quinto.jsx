import Sexto from "./Sexto"
import imagenLubswer from "../../public/imgLubswer.jpeg"
import imagenGabriel from "../../public/imgGabriel.jpeg"
import imagenJossue from "../../public/imgJossue.jpeg"

const Quinto = () => {

  const integrante1 = {
    name: "Lubswer Catagña",
    rol: "Scrum Máster",
    img: imagenLubswer,
  }

    const integrante2 = {
    name: "Gabriel Toaquiza",
    rol: "Frontend developer",
    img: imagenGabriel,
  }

    const integrante3 = {
    name: "Jossue Chulde",
    rol: "Backend developer",
    img: imagenJossue,
  }

  return (
    <>
      <h1 className="font-bold text-2xl">Props - Ejemplo</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Permiten pasar datos de un componente padre a un hijo.
        </li>
      </ul>
      
      <h2 className="text-green-700 text-center mt-8">Estudiantes (Padre)</h2>
      
      <div className="border-2 border-green-500 flex-colum justify-center items-center w-120 mx-auto mb-8">
    
        <Sexto data={integrante1}/>
        <Sexto data={integrante2}/>
        <Sexto data={integrante3}/>
        
      </div>
    
    </>
  )
}

export default Quinto
