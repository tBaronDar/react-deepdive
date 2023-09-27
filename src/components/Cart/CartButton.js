import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemsSum = useSelector((state) => state.cart.totalQuantity);

  const cartButtonHandler = () => {
    dispatch(uiActions.cartToggle());
  };

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemsSum}</span>
    </button>
  );
};

export default CartButton;
