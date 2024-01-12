import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const {cart} = useSelector((state)=>state.products)

  return (
    <>
     <header className= ' h-16'>
          <nav className='flex justify-between w-4/5 items-center mx-auto'>
            <div className='logo'>
            <a href="/"><img  className=' h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9E3tKDk0sz2KCHW7m9r909IaMFHYFzYZsw&usqp=CAU" alt="" /></a>
            </div>

            <div className='lg:hidden flex '><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path opacity="1" fill="#1E3050" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></div>
            <div className='lg:flex hidden' >
              <ul  className='flex gap-6 text-xl font-medium' >
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/category"}>Categoroy</Link></li>
                <li><Link className='flex items-center gap-4' to={"/cart"}>Cart {cart.length} <div><svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path opacity="1" fill="#1E3050" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></div></Link></li>
              </ul>
            </div>
          </nav>
     </header>
    </>
  )
}

export default Navbar