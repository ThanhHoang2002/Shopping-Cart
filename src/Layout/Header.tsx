import Drawer from '../component/Drawer'
import { toggleTheme } from '../store/features/themeSlice'
import { useAppDispatch, useAppSelector } from '..//hooks/reduxHooks'
import dark from '../assets/icons/dark_mode.png'
import light from '../assets/icons/light_mode.png'
import darkCart from '../assets/icons/dark_cart.png'
import lightCart from '../assets/icons/light_cart.png'
import NavBar from '../component/NavBar'
import { nameStore } from '../utils/constants'
import { Link } from 'react-router-dom'
const Header = () => {
  const isDarkTheme = useAppSelector((state) => state.themeState.isDark)
  const totalItemInCart = useAppSelector((state) => state.cartState.totalItem)
  const dispatch = useAppDispatch()
  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }
  return (
    <div className='w-full flex justify-between items-center border-b dark:bg-black bg-white '>
      <div className='laptop:hidden'>
        <Drawer />
      </div>
      <Link className='cursor-pointer' to={'/'}>
        <h1 className='text-2xl font-bold dark:text-white ml-3'>{nameStore}</h1>
      </Link>
      <div className='hidden laptop:block h-full'>
        <NavBar />
      </div>
      <div className='flex'>
        <img
          className='h-10 w-10 m-3 cursor-pointer'
          src={isDarkTheme ? dark : light}
          alt='theme'
          onClick={handleToggleTheme}
        />
        <Link to={'/cart'} className='relative m-3 cursor-pointer'>
          <img className='h-10 w-10' src={isDarkTheme ? darkCart : lightCart} alt='cart' />
          <div className='h-4 w-4 text-center absolute text-white text-xs top-[1px] right-[-5px] bg-[#f44336] rounded-full '>
            {totalItemInCart}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
