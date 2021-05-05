import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import {useContext, useState} from 'react'
import CartContext from '../../../store/cart-context'
import MealDescription from '../MealDescription/MealDescription'

const MealItem = props =>{
    //const price = '$${props.price.toFixed(2)}';

    const [descriptionIsShown, setDescriptionIsShown] = useState(false);

    const showDescriptonHandler = () => {
        setDescriptionIsShown(true);
    }

    const hideDescriptonHandler = () => {
        setDescriptionIsShown(false);
    }

    const cartCtx = useContext(CartContext)

    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return(
        <li className={classes.meal}>
             <div>
                 <h3>{props.name}</h3>
                 <div className={classes.decription}>{props.decription}</div>
                 <div className={classes.price}>${props.price}</div>
             </div>
             <button className={classes.button_description} 
             onClick= {showDescriptonHandler}>Click For Description!</button>
             {descriptionIsShown && <MealDescription onClose={hideDescriptonHandler} 
             description = {props.description}/>}
             <div>
                 <MealItemForm onAddToCart={addToCartHandler}/>
             </div>
        </li>
        );
}
export default MealItem;