import {useState} from 'react'
import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from '../components/Categoria'
import AcercaDe from './AcercaDe'

const Sidebar = () => {
  const { categorias } = useQuiosco()
  const [sobre, setSobre] = useState(false)


  const handleMouseOver = () => {
    setSobre(true);
  };

  const handleMouseOut = () => {
    setSobre(false);
  };

  return (
    <>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Image width={150} height={100} src="/assets/img/logo.svg" alt="imagen logotipo"/>
        </div>
        {sobre && (
          <AcercaDe />
        )}
        
        <nav className='mt-10'>
        {categorias.map( categoria => (
          <Categoria 
          key={categoria.id}
          categoria={categoria}
          />
        ))}
        </nav>
    </>
  )
}

export default Sidebar