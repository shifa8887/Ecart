import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Whishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state => state.wishlistReducer)

  const handleCart = (product)=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id==product.id)
    dispatch(removeWishlistItem(product.id))
    if(existingProduct){
      alert("Product quantity is incrementing!!!")
    }
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className="text-5xl font-bold text-red-500">My Wishlist</h1>
              <div className='grid grid-cols-4 gap-4 mt-5'>
                {
                  userWishlist?.map(product => (
                    <div key={product?.id} className='rounded border p-2 shadow'>
                      <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                      <div className='text-center'>
                        <h3 className='text-xl font-bold'>{product?.title}</h3>
                        <div className="flex justify-evenly mt-3">
                          <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                          <button onClick={()=>handleCart(product)} className='text-xl'><i className='fa-solid fa-cart-plus text-green-600'></i></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='flex flex-col justify-center items-center'>
              <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="" />
            </div>
        }
      </div>
    </>
  )
}

export default Whishlist