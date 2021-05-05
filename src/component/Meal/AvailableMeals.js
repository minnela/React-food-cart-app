import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import React, {useState} from 'react'
import AddMeal from './AddMealCart/AddMeal'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Fettucine Alfredo',
      description: 'With chicken and mashrooms',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () =>{

  const [addNewMealIsShown, setAddNewMealIsShown] = useState(false);
  const[meals, setMeals] = useState(DUMMY_MEALS);

  const addMealHandler = meal => {
    setMeals((prevMeals) => {
      return [meal, ...prevMeals];
    });
  }

  const showAdditionMealHandler = () => {
      setAddNewMealIsShown(true);
  }

  const hideAdditionMealHandler = () => {
      setAddNewMealIsShown(false);
  }

    const mealsList = DUMMY_MEALS.map((meal) => ( <MealItem
        key = {meal.id} 
        id = {meal.id}
        name = {meal.name}
        description = {meal.description}
        price = {meal.price}
        /> ));

    return( <section className={classes.meal}>
        <Card>
        <ul>{mealsList}</ul>
        <button className= {classes.button} onClick={showAdditionMealHandler}>
            <span>Add Meal!</span>  
        </button>
        {addNewMealIsShown &&<AddMeal onClose = {hideAdditionMealHandler} onAddMeal = {addMealHandler}/>}
        <div> <br></br></div>
        </Card> 
    </section>)

}
export default AvailableMeals;