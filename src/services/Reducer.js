const initialState = {
  data: {}, // key = productid, value = { product, newcounter }
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEMS": {
      const [productId, payload] = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [productId]: payload,
        },
      };
    }

    case "REMOVE_ITEMS": {
      const updatedCart = { ...state.data };
      if (updatedCart[action.payload]) {
        if (updatedCart[action.payload].newcounter > 1) {
          updatedCart[action.payload].newcounter -= 1;
        } else {
          delete updatedCart[action.payload];
        }
      }
      return {
        ...state,
        data: updatedCart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
