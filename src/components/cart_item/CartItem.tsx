import { Box, Button, Typography } from "@mui/material";

import cartItemStyles from "./CartItem.Styles";

const CartItem = () => {
  return <Box component="li" sx={cartItemStyles.listItem}></Box>;
};

export default CartItem;
