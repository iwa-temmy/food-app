import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import FoodGrid from './foods/FoodGrid';

function App() {

  const [meals, setMeals] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMeals = async () => {
      const result = await axios.get('https://asm-dev-api.herokuapp.com/api/v1/food')

      const response = result.data.data.meals
      console.log('response', response)
      setMeals(response)

      setIsLoading(false)
    }
    fetchMeals()
  }, [])

  return (
    <div>
      <div className="container">
        <FoodGrid isLoading={isLoading} meals={meals} />
      </div>
      
    </div>
  );
}

export default App;
