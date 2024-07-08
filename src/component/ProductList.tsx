import { useState } from 'react'
import { useAppSelector } from '../hooks/reduxHooks'
import { Pagination, Spin } from 'antd'
import { numberProductPerPage } from '../utils/constants'
import ProductComponent from './Product'

const ProductList = () => {
  const { products, state } = useAppSelector((state) => state.productListState)
  const [current, setCurrent] = useState<number>(1)
  const onChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setCurrent(page)
  }

  return (
    <>
      <div className='grid grid-cols-2 gap-5 mt-10 p-5 laptop:grid-cols-4 laptop:gap-6 laptop:p-16 '>
        {state === 'loading' ? (
          <Spin className='col-span-full' size='large' />
        ) : (
          products
            .slice((current - 1) * numberProductPerPage, current * numberProductPerPage)
            .map((product) => <ProductComponent key={product.id} product={product} />)
        )}
      </div>
      <div>
        <Pagination
          current={current}
          onChange={onChange}
          total={products.length}
          pageSize={numberProductPerPage}
          align='center'
        />
      </div>
    </>
  )
}

export default ProductList
