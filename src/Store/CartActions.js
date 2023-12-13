import { uiActions } from "./UISlice";
import { cartActions } from "./CartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-b4b95-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("could not fetch cart data");
      }
      const resData = await response.json();

      return resData;
    };

    try {
      const cartData = await fetchData();

      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "!Error....",
          message: "Fetching Cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending....",
        message: "sending",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cart-b4b95-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error sending Data");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success....",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "!Error....",
          message: "Sending Cart data failed",
        })
      );
    }
  };
};
