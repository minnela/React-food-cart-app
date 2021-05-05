import Modal from '../../UI/Modal'
import classes from './AddMeal.module.css'
import React, {useState} from 'react'

const AddMeal = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const submitHandler =(event) => {
        event.preventDefault();

        const mealData = {
            name : enteredName,
            description: enteredDescription,
            price :enteredPrice
        };

        props.onAddMeal(mealData)

        setEnteredName('');
        setEnteredDescription('');
        setEnteredPrice('');

    };

    return(<Modal onSubmit={submitHandler} onClose={props.onClose}>
        <div className={classes['new-expense_controls']}>
           <div className={classes['new-expense__control']}>
                 <label>Name</label>
                 <input type='text'
                 value= {enteredName} onChange={nameChangeHandler} 
                 />
           </div>
           <div className={classes['new-expense__control']}>
                 <label>Description</label>
                 <input type='text' 
                 value= {enteredDescription} onChange={descriptionChangeHandler}
                  />
           </div>
           <div className={classes['new-expense__control']}>
                 <label>Price</label>
                 <input type='number' 
                 value= {enteredPrice} onChange={priceChangeHandler}    
                  />
           </div>
        </div>
        <div><br></br></div>
        <div className={classes.actions}>
        <button className={classes.button}  type="submit" >Add</button>
        <button className= {classes['button--alt']} onClick={props.onClose}>Close</button>
        </div>
    </Modal>)

}
export default AddMeal;