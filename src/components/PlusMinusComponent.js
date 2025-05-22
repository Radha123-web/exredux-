import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function PlusMinusComponent({ product }) {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    dispatch({
      type: "ADD_ITEMS",
      payload: [product.Productid, { product, newcounter: newCount }],
    });
  };

  const handleDecrement = () => {
    if (counter > 0) {
      const newCount = counter - 1;
      setCounter(newCount);
      dispatch({ type: "REMOVE_ITEMS", payload: product.Productid });
    }
  };

  const commonButtonStyle = {
    height: 30,
    width: 30,
    minWidth: 25,
    borderRadius: "50%",
    border: "0.5px solid #dcdcdc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      {counter === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleIncrement}
            style={{
              width: "96%",
              height:'40px',
              borderRadius: "20px",
              border: "2px solid #dcdcdc",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 16px",
            }}
          >
            <span>Add</span>
            <AddIcon />
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" ,marginRight:10}}>
          <Button onClick={handleDecrement} style={{ ...commonButtonStyle, marginRight:7  }}>
            <RemoveIcon style={{ fontSize: 18, color: "#575fcf" }} />
          </Button>
          <span style={{ fontSize: 18, color: "darkgrey", marginRight: 7 }}>
            {counter}
          </span>
          <Button onClick={handleIncrement} style={{ ...commonButtonStyle }}>
            <AddIcon style={{ fontSize: 18, color: "#575fcf" }} />
          </Button>
        </div>
      )}
    </div>
  );
}
