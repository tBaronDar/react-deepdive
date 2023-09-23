import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(cartActions.cartToggle());
  };

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
