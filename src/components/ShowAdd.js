import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
  Badge,
  Menu,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 5,
  },
}));

export default function ShowAdd() {
  const cart = useSelector((state) => state.data);

  const cartItems = Object.values(cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.newcounter, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum + item.newcounter * parseFloat(item.product.offerprice || 0),
    0
  );
  const savedAmount = cartItems.reduce(
    (sum, item) =>
      sum +
      item.newcounter *
        (parseFloat(item.product.price || 0) -
          parseFloat(item.product.offerprice || 0)),
    0
  );

  return (
    <Box>
      <PopupState variant="popover" popupId="shopping-cart-popup">
        {(popupState) => (
          <>
            <IconButton aria-label="cart" {...bindTrigger(popupState)}>
              <StyledBadge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>

            <Menu
              {...bindMenu(popupState)}
              PaperProps={{
                style: {
                  width: 400,
                  borderRadius: 16,
                  padding: "16px",
                },
              }}
            >
              <Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography fontWeight="bold">Cart Items</Typography>
                  <Typography fontWeight="bold">{totalItems} Item(s)</Typography>
                </Box>

                {cartItems.map((item) => (
                  <Box key={item.product.Productid} mb={1}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography noWrap maxWidth="240px">
                        {item.product.Productname}
                      </Typography>
                      <Typography>
                        ₹{parseFloat(item.product.offerprice).toFixed(2)} × {item.newcounter}
                      </Typography>
                    </Box>
                  </Box>
                ))}

                <Divider sx={{ my: 1 }} />

                <Box display="flex" justifyContent="space-between" mt={1}>
                  <Typography fontWeight="bold">
                    Total amount to be paid
                  </Typography>
                  <Typography fontWeight="bold">
                    ₹{totalAmount.toFixed(2)}
                  </Typography>
                </Box>

                {savedAmount > 0 && (
                  <Typography color="green" mt={0.5} fontWeight="bold">
                    You Saved ₹{savedAmount.toFixed(2)}
                  </Typography>
                )}

                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    borderRadius: "25px",
                    textTransform: "none",
                    fontWeight: "bold",
                  }}
                >
                  Proceed to Cart
                </Button>
              </Box>
            </Menu>
          </>
        )}
      </PopupState>
    </Box>
  );
}
