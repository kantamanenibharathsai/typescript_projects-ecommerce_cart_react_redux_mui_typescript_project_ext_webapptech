const navbarStyles = {
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "2px solid red",
    height: "80px",
    mb: "20px",
  },

  shopText: {
    fontfamily: "Roboto",
    fontSize: { xs: "30px", sm: "40px" },
    color: "#2E3542",
    fontWeight: "500",
  },

  cartBtnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
  },

  cartShopBtn: {
    color: "black",
    gap: "6px",
  },

  logoutBtn: {
    backgroundColor: "#4F5BB1 !important",
    textTransform: "capitaliZe",
    color: "white",
    padding: "6px 16px",
  },
};

export default navbarStyles;
