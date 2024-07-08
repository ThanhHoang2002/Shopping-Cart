import ProductInCart from '../component/ProductInCart'
import { useAppSelector } from '../hooks/reduxHooks'

const Cart = () => {
  const listProductInCart = useAppSelector((state) => state.cartState.cart)
  const totalItemInCart = useAppSelector((state) => state.cartState.totalItem)
  const totalPrice = useAppSelector((state) => state.cartState.totalPrice)
  return (
    <div className='p-3 dark:text-white'>
      <div className='flex flex-col w-full laptop:px-10 laptop:flex-row '>
        <div className='laptop:w-[60%] '>
          <div>
            <p className='font-semibold text-xl text-center '>Cart</p>
            <p className='text-center laptop:hidden'>
              {totalItemInCart} Items | <span className='font-semibold'>{totalPrice}$</span>
            </p>
          </div>
          <div className='flex flex-col laptop:border-none mt-12 mb-6 laptop:mt-0'>
            {listProductInCart.length === 0 ? (
              <p className='text-center font-bold'>Your Cart is empty</p>
            ) : (
              listProductInCart.map((productInCart) => (
                <ProductInCart key={productInCart.product.id} productInCart={productInCart} />
              ))
            )}
          </div>
        </div>
        <div className='laptop:w-[40%] '>
          <p className='font-semibold text-xl'>Summary</p>
          <div className='flex justify-between font-semibold mt-5'>
            <p>Subtotal</p>
            <p>{totalPrice}$</p>
          </div>
          <div className='flex justify-between font-semibold '>
            <p>Estimateed Delivery & Hanlding</p>
            <p>Free</p>
          </div>
          <div className='flex justify-between mt-5'>
            <p>Total</p>
            <p>{totalPrice}$</p>
          </div>
          <div className='px sticky bottom-0'>
            <button className='w-full mt-5 bg-black text-white p-3 rounded-md dark:text-black dark:bg-white'>
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
