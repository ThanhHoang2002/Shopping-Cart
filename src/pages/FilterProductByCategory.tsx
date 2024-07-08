/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import ProductList from '../component/ProductList'
import { useAppDispatch } from '../hooks/reduxHooks'
import { useLocation } from 'react-router-dom'
import { fetchProductByCategory } from '../store/features/productListSlice'
import { getImageByPath } from '../utils/format'

const FilterProductByCategory = () => {
  const dispath = useAppDispatch()
  const location = useLocation()
  const image = getImageByPath(location.pathname) as string
  useEffect(() => {
    const category = location.pathname
    dispath(fetchProductByCategory(category))
  }, [location.pathname])
  return (
    <div className='flex flex-col items-center'>
      <img src={image} alt='category' />
      <h1 className='text-2xl pl-5 pt-5 self-start font-bold capitalize'>
        {location.pathname.slice(1).replace('%20', ' ')}
      </h1>
      <ProductList />
    </div>
  )
}

export default FilterProductByCategory
