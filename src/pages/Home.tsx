/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Banner from '../component/Banner'
import ProductList from '../component/ProductList'
import { useAppDispatch } from '../hooks/reduxHooks'
import { fetchAllProducts } from '../store/features/productListSlice'

const Home = () => {
  const dispath = useAppDispatch()
  useEffect(() => {
    dispath(fetchAllProducts())
  }, [])
  return (
    <div className=''>
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home
