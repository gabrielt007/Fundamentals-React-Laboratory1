import { create } from "zustand";


const storeTecnologia = create((set)=>({
    
    detalle:{
        nombre: "AMD Ryzen 7 7800X3D",
        tipo: "Procesador (CPU)",
        precio: 499.99,
    },
    
    setComponente: (newComponente) => set({ detalle: newComponente })
    
}))


export default storeTecnologia
