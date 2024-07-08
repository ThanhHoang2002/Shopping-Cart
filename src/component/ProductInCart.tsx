/* eslint-disable prettier/prettier */
import { Select } from 'antd'
import { CartItem } from '../types'
import { useAppDispatch } from '../hooks/reduxHooks'
import { changeQuantity, deleteItem } from '../store/features/cartSlice'
import { DeleteOutlined } from '@ant-design/icons'

interface ProductInCartProps {
  productInCart: CartItem
}
const ProductInCart = (props: ProductInCartProps) => {
  const { productInCart } = props
  const dispatch = useAppDispatch()
  const options = Array.from({ length: 9 }, (_, i) => ({
    value: i + 1,
    label: i + 1
  }))

  const handleChangeQuantity = (value: number) => {
    dispatch(changeQuantity({ productId: productInCart.product.id, quantity: value }))
  }
  const handleDeleteItem = () => {
    console.log('delete item')
    dispatch(deleteItem(productInCart.product.id))
  }
  return (
    <div className='flex w-full laptop:border-t-0 laptop:border-x-0 border p-5 '>
      <img
        className='laptop:w-[164px] laptop:h-[164px] w-[154px] h-[154px] object-contain'
        src={productInCart.product.image}
        alt={productInCart.product.title}
      />
      <div className='ml-3  w-[50%] laptop:flex' >
        <div className='laptop:max-w-[50%]  '>
          <p className='font-semibold truncate '>{productInCart.product.title}</p>
          <div className='flex items-center justify-between mt-5'>
            <div className='text-gray-600 flex items-center'>
              <p className='mr-3'>Quantity</p>
              <Select defaultValue={productInCart.quantity} options={options} onChange={handleChangeQuantity} />
            </div>
            <DeleteOutlined className='cursor-pointer' onClick={handleDeleteItem} />
          </div>
        </div>
        <div className='font-semibold mt-5 laptop:ml-auto laptop:mt-0'>
          <p>{productInCart.product.price * productInCart.quantity}$</p>
        </div>
      </div>
    </div>
  )
}

export default ProductInCart
