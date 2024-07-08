import { NavLink } from 'react-router-dom'
import { Categories } from '../utils/constants'

const NavBar = () => {
  const categories = Object.values(Categories)
  return (
    <div className='flex h-full'>
      {categories.map((category, index) => (
        <NavLink
          to={category.path}
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
                ? 'uppercase mx-4 dark:text-white font-bold bg-[rgb(241,245,249)] p-5 dark:bg-gray-800'
                : 'uppercase mx-4 dark:text-white font-bold p-5'
          }
          key={index}
        >
          <div className='h-full'>{category.name}</div>
        </NavLink>
      ))}
    </div>
  )
}

export default NavBar
