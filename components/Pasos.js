import { useRouter } from 'next/router'

const pasos =[
    {paso: 1, nombre: 'Menu', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Pago', url: '/total'}
]

const Pasos = () => {
    const router = useRouter()

    const calcularProgreso = () => {        
        let porcentaje 

        if(router.pathname === "/") {
            porcentaje = 5
        }else if (router.pathname === "/resumen"){
            porcentaje = 40
        }else {
            porcentaje = 100
        }


        return porcentaje
    }
  return (
    <>
        <div className="flex justify-between"> 
            {pasos.map(paso => (
                <button 
                onClick={() => {
                    router.push(paso.url)
                }}
                key={paso.paso}
                className="text-2xl font-bold mb-5"
                >
                    {paso.nombre}
                </button>
            ))}
        </div>
        <div className='bg-gray-100 mb-10'>
            <div 
                className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white'
                style={{ width: `${calcularProgreso()}%` }}
            ></div>
        </div>
    </>
  )
}

export default Pasos