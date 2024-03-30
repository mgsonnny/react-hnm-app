import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='card' onClick={showDetail}>
      <img className='card-img' width={300}  src={item?.img}/>
      <div className='choice'>{item?.choice == true?"Conscious choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div className='new-product'>{item?.new == true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard
