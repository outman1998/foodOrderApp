import React from 'react'
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

export default function AvailableMeals() {

  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {

    const fetchMeals = async () => {
      const response = await fetch('https://meals-5d87e-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();


      if(!response.ok) {
        throw new Error('something went wrong!');
      }

      const loadedMeals = [];

      for(const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price

        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals().catch((error) => {
      setHttpError(error.message);
    });

  }, []);

  if(httpError) {
    return <section className={classes.MealsError}> <p>{httpError}</p></section>
  }

    const mealsList = meals.map(meal => {
        return <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description}
        price={meal.price}
        />;
    });

  return (
    <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
  )
}
