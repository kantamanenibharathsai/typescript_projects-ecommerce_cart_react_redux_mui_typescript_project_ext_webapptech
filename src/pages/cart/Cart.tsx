import { Box, Typography, Button } from "@mui/material";
import cartStyles from "./cart.Styles";
import Navbar from "../../components/navbar/Navbar";

const Cart = () => {
  return (
    <Box sx={cartStyles.cartParentContainer}>
      <Box sx={cartStyles.cartChildContainer}>
        <Navbar />
        <Box sx={cartStyles.cartBodyContainer}>
          <Typography component="h2" sx={cartStyles.myCartHeading}>
            My Cart
          </Typography>
          <Box component="ul" sx={cartStyles.cartItemsListContainer}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
