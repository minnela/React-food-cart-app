import Modal from '../../UI/Modal'
import classes from './MealDescription.module.css'


const MealDescription = (props) => {

    return(<Modal onClose={props.onClose}>
        <div className={classes.total}>Description</div>
        <div>{props.description}</div>
        <div className= {classes.actions}> 
        <button className= {classes['button--alt']} onClick={props.onClose}>Close</button></div>
    </Modal>)

}
export default MealDescription;