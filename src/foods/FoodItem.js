import React from 'react'
import StarRating from '../ui/StarRating'
import {FaPlus} from 'react-icons/fa'

const FoodItem = ({ meal }) => {
  const {strMealThumb, strMeal, price, description, ratings} = meal
  const trimDescription = description.slice(0, 100);
  return (
    <div className="card">
      <img src={strMealThumb} alt="" />
      <div className="card-content">
        <div className="space-between">
          <span>
            <h3>{strMeal}</h3>
            <p>Served with french fries + drink</p>
          </span>
          <span>
            <h3>{price}</h3>
          </span>
        </div>
        <p>{`${trimDescription} and more..`}</p>
      </div>
      <div className="space-between absolute">
        <div className="rating">
          <StarRating
            count={5}
            size={100}
            value={ratings}
            activeColor={'#FA9E0D'}
            inactiveColor={'#ddd'} 
            />
        </div>
          <button className='btn'><FaPlus /></button>
      </div>
    </div>
  )
}

export default FoodItem
