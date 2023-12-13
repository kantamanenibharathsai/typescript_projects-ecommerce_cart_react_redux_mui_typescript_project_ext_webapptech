const productDetailsStyles = {
  mainContainer: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
  },

  childContainer: {
    width: { xs: "90%", sm: "80%" },
    margin: "auto",
    // border: "2px solid green",
    display: "flex",
    alignItems: "flex-start",
    boxSizing: "border-box",
  },

  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: "800px",
    width: "100%",
    // border: "5px solid green",
    flexGrow: "1",
    height: "99.5vh",
  },

  failureContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: "1",
    // height: "780px",
    height: "99vh",
    // border: "5px solid green",
  },

  apiErrorMsg: {
    fontfamily: "Roboto",
    fontSize: { xs: "24px", sm: "33px" },
    color: "#2E3542",
    fontWeight: "500",
  },

  bigImageContainer: {
    margin: "0",
    flexGrow: "1",
  },

  bigImg: {
    height: "300px",
    width: "100%",
  },

  productDetailsMainContainer: {
    background: "#f1f3f6",
    height: "100%",
    width: "100%",
  },

  logoutBox: {
    // textAlign: "end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    // border: "2px solid green",
    height: "100px",
  },

  cartBtnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
  },

  logoutBoxBtnContainer: {
    display: "flex",
    alignItems: "center",
    gap: "26px",
  },

  cartShopBtn: {
    color: "black",
    gap: "6px",
  },

  logoutBtn: {
    fontSize: "16px",
    color: "white",
    backgroundColor: "#4F5BB1 !important",
    textTransform: "capitaliZe",
    padding: "6px 16px",
    cursor: "pointer",
    "&: hover": {
      backgroundColor: "green !important",
    },
  },

  bodyContainer: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    gap: "30px",
  },

  leftContainer: {
    width: "40%",
    // border: "2px solid yellow",
    display: { xs: "none", md: "flex" },
  },

  imageBtnsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "13px",
  },

  imageBorderContainer: {
    width: "100%",
    border: "0.6px solid #c8c8c8",
    height: "400px",
    display: "grid",
    alignItems: "center",
    borderLeft: "none",
  },

  smallImagesContainer: {
    display: "flex",
    flexDirection: "column",
    width: "70px",
    border: "0.6px solid #c8c8c8",
    padding: "0",
    boxSizing: "border-box",
    alignItems: "center",
    height: "400px",
  },

  smallImageContainer: {
    cursor: "pointer",
    width: "70px",
    boxSizing: "border-box",
    height: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #c8c8c8",
    "&: hover": {
      border: "0.6px solid #2874f0",
    },
  },

  cardSmallImg: {
    width: "50px",
    height: "50px",
    display: "block",
    cursor: "pointer",
  },

  buttonsContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    border: "2px solid green",
    justifyContent: "space-between",
  },

  btnsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  addToCartBox: {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    outline: "none",
    background: "#FF9F00",
    color: "white",
    padding: "12px 0px",
    width: "200px",
    alignItems: "center",
    border: "3px solid red",
    height: "40px",
  },

  cartText: {
    fontFamily: "roboto",
    fontSize: "15px",
    fontWeight: "600",
    color: "white",
    // width: "60px",
  },

  increDecreBtnsContainer: {
    display: "flex",
    alignitems: "center",
    gap: "13px",
  },

  quantityBtn: {
    backgroundColor: "#b5adac",
    fontSize: "17px",
    border: "1px solid black",
    width: "15px",
    height: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  text: {
    fontSize: "20px",
  },

  hoverImg: {
    height: "370px",
    width: "95%",
    margin: "auto",
  },

  carouselContainer: {
    display: { xs: "grid", md: "none" },
    // border: "2px solid green",
    justifyContent: "center",
  },

  rightContainer: {
    width: { xs: "100%", md: "58%" },
  },

  ratings: {
    display: "flex",
    mt: 1.5,
    mb: 1.5,
    // border: "1px solid red",
    alignItems: "center",
    gap: "20px",
  },

  ratingBtnContainer: {
    display: "flex",
    alignItems: "center",
    background: "#388e3c",
    color: "white",
    borderRadius: "3px",
    px: 0.7,
    py: 0.6,
    gap: "5px",
  },

  starBox: {
    fontSize: { xs: "0.6rem", sm: "0.8rem" },
    fontWeight: 600,
  },

  startIcon: {
    fontSize: { xs: "0.6rem", sm: "0.8rem" },
  },

  ratingsText: {
    color: "#878787",
    fontSize: { xs: "0.7rem", sm: "0.8rem" },
  },

  extra: {
    color: "#388e3c",
    fontWeight: 600,
    fontSize: { xs: "12px", sm: "16px" },
  },

  ratingBox: {
    display: "flex",
    // border: "2px solid red",
    mt: 1,
    alignItems: "center",
    gap: "20px",
  },

  title: {
    fontWeight: 600,
    fontSize: { xs: "1rem", sm: "1.2rem" },
  },

  offPrice: {
    textDecoration: "line-through",
    color: "#878787",
    fontWeight: 100,
    fontSize: "1.2rem",
    lineHeight: 1,
  },

  percentage: {
    color: "#388e3c",
    fontWeight: 600,
    fontSize: "1.1rem",
    lineHeight: 1,
  },

  infoIcon: {
    color: "#878787",
    background: "white",
    fontSize: "1.3rem",
  },

  freeDeliveryText: {
    my: 1,
    fontSize: "0.9rem",
  },

  offerBox: {
    display: "flex",
    mt: 1.3,
    // border: "2px solid green",
    fontSize: "0.9rem",
    alignItems: "flex-start",
  },

  brand: {
    fontWeight: 600,
    mr: 1,
    fontSize: "0.8rem",
  },

  brandName: {
    fontSize: "0.8rem",
  },

  desc: {
    my: 1,
    fontSize: "0.9rem",
  },

  available: {
    fontWeight: 600,
    fontSize: "0.9rem",
  },

  sellIcon: {
    color: "#14be47",
    fontSize: { xs: "20px", sm: "25px" },
  },

  bankOfferText: {
    fontWeight: 600,
    mx: { xs: 0.5, sm: 1 },
    fontSize: "0.8rem",
  },

  tenPercentText: {
    fontSize: "0.8rem",
  },

  termsText: {
    ml: { xs: 0.5, sm: 1 },
    textDecoration: "none",
    lineHeight: 1.5,
    cursor: "pointer",
    fontSize: "0.8rem",
  },

  viewBox: {
    mt: 2,
    mb: 2,
  },

  view: {
    color: "#4b7bf1",
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
    fontSize: "0.8rem",
  },

  specificationsGrid: {
    mt: 5,
    // border: "3px solid red",
  },

  specifiGrid: {
    mb: { xs: 6, sm: 0 },
  },

  colorTxt: {
    color: "#878787",
    fontSize: "0.9rem",
  },

  mobileImages: {
    width: "23%",
    ml: 1,
  },

  bytes: {
    border: "1px solid #e0e0e0",
    p: 1,
    fontWeight: 500,
    ml: 1,
    fontSize: "0.8rem",
  },

  pincodeInput: {
    width: { xs: "220px", sm: "290px" },
    // border: "4px solid blue",
  },

  inputElement: {
    // border: "3px solid yellow",
    fontSize: "0.8rem",
  },

  locationIcon: {
    fontSize: "0.8rem",
  },

  checkTxt: {
    color: "#4b7bf1",
    display: { xs: "none", sm: "block" },
    fontSize: "0.8rem",
  },

  deliveryBox: {
    display: "flex",
    mt: 1,
  },

  deliText: {
    fontWeight: 600,
    fontSize: "0.8rem",
  },

  freeContainer: {
    display: "flex",
    alignItems: "center",
  },

  divider: {
    borderColor: "#c2c2c2",
    mx: 1,
  },

  freePrice: {
    textDecoration: "line-through",
    mx: 1,
    color: "#878787",
    fontWeight: 100,
    fontSize: "0.8rem",
  },

  helpIcon: {
    color: "#c2c2c2",
    fontSize: "1rem",
  },

  time: {
    fontSize: "0.8rem",
  },

  list: {
    p: 0,
  },

  listItem: {
    px: 0,
    pt: 0,
    fontSize: "0.8rem",
  },

  circleIcon: {
    fontSize: "0.6rem",
    mr: 1,
    color: "#c2c2c2",
  },

  helperIcon: {
    color: "#c2c2c2",
    fontSize: "1rem",
    ml: 1,
  },

  coinsImg: {
    mt: 3,
    width: "100%",
  },

  descText: {
    mb: 6,
    fontSize: "0.8rem",
  },
};

export default productDetailsStyles;
