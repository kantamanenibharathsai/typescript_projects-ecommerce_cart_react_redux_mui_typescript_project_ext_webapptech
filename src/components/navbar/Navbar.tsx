import { Box, Button, Typography } from "@mui/material";
import navbarStyles from "./Navbar.Styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const removeTokenHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Box sx={navbarStyles.headerContainer}>
      <Typography component="h1" variant="h1" sx={navbarStyles.shopText}>
        Shop
      </Typography>
      <Box sx={navbarStyles.cartBtnContainer}>
        <Button sx={navbarStyles.cartShopBtn}>
          <AddShoppingCartIcon sx={{ width: "40px", height: "40px" }} />
          <Typography sx={{ color: "green", fontWeight: "800" }}>1</Typography>
        </Button>
        <Button
          onClick={removeTokenHandler}
          sx={navbarStyles.logoutBtn}
          type="button"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
