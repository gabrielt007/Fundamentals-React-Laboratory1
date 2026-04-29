import { useState } from "react";

const Noveno = () => {
  const [login, setLogin] = useState(false);

  const [materiasTercerSemestre] = useState([
    { materia: "PROGRAMACIÓN ORIENTADA A OBJETOS", creditos: 4 },
    { materia: "DISEÑO DE INTERFACES", creditos: 2 },
    { materia: "GESTIÓN DE PROYECTOS DE SOFTWARE", creditos: 3 },
    { materia: "BASES DE DATOS", creditos: 3 },
    { materia: "ANÁLISIS DE DATOS", creditos: 3 },
  ]);

  const [materiasCuartoSemestre] = useState([
    { materia: "DESARROLLO DE APLICACIONES WEB", creditos: 4 },
    { materia: "DESARROLLO DE loT", creditos: 2 },
    { materia: "FUNDAMENTOS DE INTELIGENCIA ARTIFICIAL", creditos: 1 },
    { materia: "METODOLOGÍA DE LA INVESTIGACIÓN", creditos: 1 },
    { materia: "PRÁCTICAS DE SERVICIO COMUNITARIO", creditos: 2 },
    { materia: "PRÁCTICAS LABORALES", creditos: 5 },
  ]);

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado - Ejemplo</h1>

      <hr className="border-gray-400 mb-8" />

      <ul className="list-disc pl-5">
        <li>
          <strong>Renderizado condicional:</strong> Permite mostrar u ocultar
          elementos de la interfaz según ciertas condiciones.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Permite mostrar múltiples
          elementos a partir de un array usando métodos de los arreglos.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-120 mx-auto text-center">
          <h2 className="text-1xl font-bold text-left underline mb-4">
            Condicional
          </h2>

          {login ? (
            <p>
              Ya estas en el Cuarto Semestre, preparate para las próximas
              materias
            </p>
          ) : (
            <p>Revisa la lista de materias del tercer semestre.</p>
          )}

          <button
            className={`mt-2 text-white py-1 px-3 rounded ${
              login ? "bg-orange-600" : "bg-green-600"
            }`}
            onClick={() => setLogin(!login)}
          >
            {login ? "No pase todas las materias" : "3er Semestre Completado "}
          </button>
        </div>
      </div>

      {login ? (
        <div className="flex justify-center mb-8">
          <div className=" border rounded-lg p-4 w-120 mx-auto text-center">
            <h2 className="text-1xl font-bold text-left underline mb-4">
              Listas
            </h2>
            <h2 className="text-red-700 font-bold text-left mb-4">
              Creditos - Materias
            </h2>

            <ul className="list-disc pl-5 text-left">
              {materiasCuartoSemestre.map((materia, index) => (
                <li key={index}>
                  {materia.creditos} - {materia.materia}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mb-8">
          <div className=" border rounded-lg p-4 w-120 mx-auto text-center">
            <h2 className="text-1xl font-bold text-left underline mb-4">
              Listas
            </h2>
            <h2 className="text-green-700 font-bold text-left mb-4">
              Creditos - Materias
            </h2>
            <ul className="list-disc pl-5 text-left">
              {materiasTercerSemestre.map((materia, index) => (
                <li key={index}>
                  {materia.creditos} - {materia.materia}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Noveno;
