import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending request to server...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://mealsapp-e50cf-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending request has failed...");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sent",
          message: "Cart sent to the server.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed",
          message: "Failed to send request!",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch(
        "https://mealsapp-e50cf-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Failed to get cart data!");
      }

      const data = response.json();

      return data;
    };

    try {
      const receivedData = await getRequest();
      dispatch(
        cartActions.replaceCart({
          cartItems: receivedData.cartItems || [],
          totalQuantity: 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed",
          message: "Failed to get cart data!",
        })
      );
    }
  };
};
