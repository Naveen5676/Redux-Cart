import classes from './CartButton.module.css';
import { useDispatch , useSelector } from 'react-redux';
import { uiActions } from '../../Store/UISlice';

const CartButton = (props) => {

  const cartQuantity =  useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch();

  const tooglecartHandler=()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick={tooglecartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
