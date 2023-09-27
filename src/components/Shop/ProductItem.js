import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const addToCartHandler = () => {
    const newItem = {
      title: props.title,
      price: props.price,
      description: props.description,
      id: props.id,
    };
    //console.log(cartItem);

    dispatch(cartActions.addItemToCart(newItem));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
