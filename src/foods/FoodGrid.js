import React from 'react'
import Spinner from '../ui/Spinner'
import FoodItem from './FoodItem'

const FoodGrid = ({isLoading, meals}) => {
    return isLoading ? <Spinner /> : 
    <div>
        <section className="cards">
        {meals.map(meal => (
        <FoodItem key={meal.id} meal={meal} />
      ))}
        </section>
        <button className="loadBtn">Learn More</button>
    </div>
}

export default FoodGrid
