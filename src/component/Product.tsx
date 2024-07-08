import { Product } from '../types'
import { useAppDispatch } from '../hooks/reduxHooks'
import { toast } from 'react-toastify'
import { addCart } from '../store/features/cartSlice'
import { Rate } from 'antd'

interface ProductComponentProps {
  product: Product
}
const ProductComponent = (props: ProductComponentProps) => {
  const { product } = props
  const dispatch = useAppDispatch()
  const handleAddToCart = (item: Product) => {
    dispatch(addCart({ product: item, quantity: 1 }))
    toast.success('Add to cart successfully!')
  }
  return (
    <div
      key={product.id}
      className='flex flex-col justify-between items-center h-full cursor-pointer shadow-md rounded-[4px] p-4 laptop:border'
    >
      <div className='flex flex-col items-center'>
        <img
          className='object-contain h-[150px] w-[84px] transition-transform duration-500 transform hover:scale-[1.2] z-10 '
          src={product.image}
          alt={product.title}
        />

        <h3 className='text-center dark:text-white max-'>{product.title}</h3>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-center text-[#e10020] mb-3'>{product.price}$</p>
        <Rate disabled defaultValue={product.rating.rate} />
        <div className=' flex justify-between items-center'>
          <button
            className='bg-[#212121] text-white px-4 py-1 rounded-md hover:scale-125 transition-transform duration-500 mt-5'
            onClick={() => handleAddToCart(product)}
          >
            Add cart
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductComponent
