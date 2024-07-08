import { Drawer as D } from 'antd'
import { useState } from 'react'
import logo from '../assets/images/logos/Logo.png'
import { RightOutlined } from '@ant-design/icons'
import { useAppSelector } from '../hooks/reduxHooks'
import dark_menu from '../assets/icons/dark_menu.png'
import light_menu from '../assets/icons/light_menu.png'
import { Categories } from '../utils/constants'
import { Link } from 'react-router-dom'
const Drawer = () => {
  const [open, setOpen] = useState<boolean>(false)
  const categories = Object.values(Categories)
  const isDart = useAppSelector((state) => state.themeState.isDark)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <div className='h-7 w-7 flex justify-center items-center ml-3 my-3'>
        <img src={isDart ? dark_menu : light_menu} alt='theme' onClick={showDrawer} />
      </div>
      <D placement={'left'} closable={false} onClose={onClose} open={open}>
        <Link to={'/'} onClick={onClose}>
          <img src={logo} alt='logo' />
        </Link>
        {categories.map((category, index) => (
          <div key={index}>
            <Link
              className='text-xl py-3 flex justify-between items-center border-b'
              to={category.path}
              onClick={onClose}
            >
              {category.name}
              <RightOutlined />
            </Link>
          </div>
        ))}
      </D>
    </div>
  )
}

export default Drawer
