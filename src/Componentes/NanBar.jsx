import menu from '../assets/images/icon-menu.svg'
export const NanBar = () => {
  return (

   <>
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center ">
         <li className='hover:text-SoftRed'>
            <a  href="#">Home</a>
         </li>
         <li className='hover:text-SoftRed'>
            <a href="#">New</a>
         </li>
         <li className='hover:text-SoftRed'>
            <a href="#">Popular</a>
         </li>
         <li className='hover:text-SoftRed'>
            <a href="#">Treding</a>
         </li>
         <li className='hover:text-SoftRed'>
            <a href="#">Categoria</a>
         </li>
      </ul>
      <img className=' cursor-pointer w-10 h-4 sm:hidden' src={menu}></img>
   </>
  )
}
