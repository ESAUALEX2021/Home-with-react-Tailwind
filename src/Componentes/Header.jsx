import { NanBar } from './NanBar'
import  logo from '../assets/images/logo.svg'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center mb-5' >
        <img src= {logo} ></img>
        <NanBar />
        
    </header>
  )
}
