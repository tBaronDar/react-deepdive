import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, getCartData } from "./components/store/cart-fetch";

//import { uiActions } from "./components/store/ui-slice";

let isInitial = true;

function App() {
  const toggleCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  // useEffect(() => { //FAT COMP METHOD
  //   const sendRequest = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "Sending",
  //         message: "Sending request to server...",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://mealsapp-e50cf-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Sending request has failed...");
  //     }
  //     if (isInitial) {
  //       isInitial = false;
  //       return;
  //     }
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Sent",
  //         message: "Cart sent to the server.",
  //       })
  //     );
  //   };
  //   sendRequest().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Failed",
  //         message: "Failed to send request!",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
//
