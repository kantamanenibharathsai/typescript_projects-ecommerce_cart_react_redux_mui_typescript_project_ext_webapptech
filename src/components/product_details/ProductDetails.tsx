import productDetailsStyles from "./ProductDetails.Styles";

import {
  Box,
  Button,
  Typography,
  Grid,
  Link,
  FormControl,
  Input,
  InputAdornment,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SellIcon from "@mui/icons-material/Sell";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import { ThreeDots as Loader } from "react-loader-spinner";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Carousel from "react-material-ui-carousel";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SwipeableTextMobileStepper from "../slider/Slider";
import Navbar from "../navbar/Navbar";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

interface ProductObj {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  discountPercentage: number;
}

interface IState {
  apiProductData: ProductObj | null;
  apiErrorMsg: string;
  apiStatus: string;
  apiImage: string;
  isHovered: boolean;
  mainImage: string;
  iscartBtnClicked: boolean;
}

const ProductDetails = () => {
  const [apiProductData, setApiProductData] =
    useState<IState["apiProductData"]>(null);
  const [apiErrorMsg, setApiErrorMsg] = useState<IState["apiErrorMsg"]>("");
  const [apiStatus, setApiStatus] = useState<IState["apiStatus"]>(
    apiStatusConstants.initial
  );
  const [mainImage, setMainImage] = useState<IState["mainImage"]>("");
  const [apiImage, setApiImage] = useState<IState["apiImage"]>("");
  const [iscartBtnClicked, setIscartBtnClicked] =
    useState<IState["iscartBtnClicked"]>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = Number(id);

  if (!isNaN(numericId) && numericId % 2 === 1) {
    navigate(`/product-details/${numericId}`, { replace: true });
  }

  useEffect(() => {
    setApiStatus(apiStatusConstants.inProgress);
    (async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setApiStatus(apiStatusConstants.success);
          setApiProductData(data);
        } else {
          throw new Error("API Call Failed");
        }
      } catch (error) {
        if (error instanceof Error) {
          setApiStatus(apiStatusConstants.failure);
          setApiErrorMsg(error.message);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (
      apiProductData &&
      apiProductData.images &&
      apiProductData.images.length > 0
    ) {
      setMainImage(apiProductData.images[0]);
    }
  }, [apiProductData]);

  const renderProductFailureView = () => {
    return (
      <Box sx={productDetailsStyles.failureContainer}>
        <Typography sx={productDetailsStyles.apiErrorMsg}>
          {apiErrorMsg}
        </Typography>
      </Box>
    );
  };

  const renderLoadingView = () => {
    return (
      <Box sx={productDetailsStyles.loaderContainer}>
        <Loader color="#0b69ff" height={50} width={50} />
      </Box>
    );
  };

  const addToCartButton = () => {
    setIscartBtnClicked(true);
  };

  const onHoverMouseMoveImageClick = (item: string) => {
    setMainImage(item);
  };

  const onHoverMouseLeaveImageClick = (item: string) => {
    setMainImage(item);
  };

  const renderProductSuccessView = () => {
    return (
      <Box sx={productDetailsStyles.productDetailsMainContainer}>
        <Navbar />
        <Box sx={productDetailsStyles.bodyContainer}>
          <Box sx={productDetailsStyles.leftContainer}>
            <Box sx={productDetailsStyles.smallImagesContainer}>
              {apiProductData?.images.map((eachImg) => (
                <Box
                  sx={{
                    ...productDetailsStyles.smallImageContainer,
                    border:
                      mainImage === eachImg
                        ? "0.5px solid #2874f0"
                        : "0.5px solid #c8c8c8",
                    borderBottom:
                      mainImage === eachImg
                        ? "0.5px solid #2874f0"
                        : "0.1px solid #c8c8c8",
                  }}
                  key={apiProductData.images.indexOf(eachImg)}
                >
                  <Box
                    component="img"
                    src={eachImg}
                    sx={productDetailsStyles.cardSmallImg}
                    onMouseMove={() => {
                      onHoverMouseMoveImageClick(eachImg);
                    }}
                    onMouseLeave={() => {
                      onHoverMouseLeaveImageClick(eachImg);
                    }}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={productDetailsStyles.imageBtnsContainer}>
              <Box sx={productDetailsStyles.imageBorderContainer}>
                <Box
                  component="img"
                  src={mainImage}
                  sx={productDetailsStyles.hoverImg}
                />
              </Box>
              <Box sx={productDetailsStyles.buttonsContainer}>
                <Box sx={productDetailsStyles.btnsContainer}>
                  <Box sx={productDetailsStyles.addToCartBox}>
                    <ShoppingCartIcon />
                    <Button
                      onClick={addToCartButton}
                      sx={productDetailsStyles.cartText}
                    >
                      ADD TO CART
                    </Button>
                  </Box>
                  {iscartBtnClicked && (
                    <Box sx={productDetailsStyles.increDecreBtnsContainer}>
                      <Box
                        component="button"
                        sx={productDetailsStyles.quantityBtn}
                      >
                        -
                      </Box>
                      <Box component="button" sx={productDetailsStyles.text}>
                        1
                      </Box>
                      <Box
                        component="button"
                        sx={productDetailsStyles.quantityBtn}
                      >
                        +
                      </Box>
                    </Box>
                  )}
                </Box>

                <Box
                  sx={{
                    ...productDetailsStyles.addToCartBox,
                    backgroundColor: "#fb641b",
                  }}
                >
                  <FlashOnIcon />
                  <Typography sx={productDetailsStyles.cartText}>
                    BUY NOW
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={productDetailsStyles.carouselContainer}>
            <SwipeableTextMobileStepper
              carouselImages={apiProductData?.images}
            />
          </Box>

          <Box sx={productDetailsStyles.rightContainer}>
            <Typography variant="h6">{apiProductData?.title}</Typography>
            <Box sx={productDetailsStyles.ratings}>
              <Box sx={productDetailsStyles.ratingBtnContainer}>
                <Box sx={productDetailsStyles.starBox}>
                  {apiProductData?.rating}
                </Box>
                <StarIcon sx={productDetailsStyles.startIcon} />
              </Box>
              <Typography sx={productDetailsStyles.ratingsText}>
                51,010 Ratings & 3,018 Reviews
              </Typography>
            </Box>
            <Typography sx={productDetailsStyles.extra}>
              Extra 6000 off
            </Typography>
            <Box sx={productDetailsStyles.ratingBox}>
              <Typography variant="h4" sx={productDetailsStyles.title}>
                $ {apiProductData?.price}
              </Typography>
              <Typography sx={productDetailsStyles.offPrice}>
                ${" "}
                {apiProductData?.price !== undefined
                  ? apiProductData.price - 10
                  : "N/A"}
              </Typography>
              <Typography sx={productDetailsStyles.percentage}>
                {apiProductData?.discountPercentage}% off
              </Typography>
              <InfoIcon sx={productDetailsStyles.infoIcon} />
            </Box>
            <Typography sx={productDetailsStyles.freeDeliveryText}>
              + ₹49 Secured Packaging Fee
            </Typography>
            <Box sx={productDetailsStyles.offerBox}>
              <Typography sx={productDetailsStyles.brand}>Brand :</Typography>
              <Typography sx={productDetailsStyles.brandName}>
                {apiProductData?.brand}
              </Typography>
            </Box>
            <Box sx={productDetailsStyles.offerBox}>
              <Typography sx={productDetailsStyles.brand}>
                In-stock :{" "}
              </Typography>
              <Typography sx={productDetailsStyles.brandName}>
                {apiProductData?.stock}
              </Typography>
            </Box>
            <Typography sx={productDetailsStyles.desc}>
              {apiProductData?.description}
            </Typography>
            <Typography sx={productDetailsStyles.available}>
              Available offers
            </Typography>
            <Box sx={productDetailsStyles.offerBox}>
              <SellIcon sx={productDetailsStyles.sellIcon} />
              <Typography sx={productDetailsStyles.bankOfferText}>
                Bank Offer
              </Typography>
              <Typography sx={productDetailsStyles.tenPercentText}>
                10% off on Samsung Axis Bank Infinite Credit Card
                <Link sx={productDetailsStyles.termsText}>T&C</Link>
              </Typography>
            </Box>
            <Box sx={productDetailsStyles.offerBox}>
              <SellIcon sx={productDetailsStyles.sellIcon} />
              <Typography sx={productDetailsStyles.bankOfferText}>
                Bank Offer
              </Typography>
              <Typography sx={productDetailsStyles.tenPercentText}>
                10% off on Samsung Axis Bank Signature credit card
                <Link sx={productDetailsStyles.termsText}>T&C</Link>
              </Typography>
            </Box>
            <Box sx={productDetailsStyles.offerBox}>
              <SellIcon sx={productDetailsStyles.sellIcon} />
              <Typography sx={productDetailsStyles.bankOfferText}>
                Bank Offer
              </Typography>
              <Typography sx={productDetailsStyles.tenPercentText}>
                5% Cashback on Flipkart Axis Bank Card
                <Link sx={productDetailsStyles.termsText}>T&C</Link>
              </Typography>
            </Box>
            <Box sx={productDetailsStyles.offerBox}>
              <SellIcon sx={productDetailsStyles.sellIcon} />
              <Typography sx={productDetailsStyles.bankOfferText}>
                Special Price
              </Typography>
              <Typography sx={productDetailsStyles.tenPercentText}>
                Get extra ₹6000 off (price inclusive of cashback/coupon)
                <Link sx={productDetailsStyles.termsText}>T&C</Link>
              </Typography>
            </Box>
            <Box sx={productDetailsStyles.offerBox}>
              <SellIcon sx={productDetailsStyles.sellIcon} />
              <Typography sx={productDetailsStyles.bankOfferText}>
                Freebie
              </Typography>
              <Typography sx={productDetailsStyles.tenPercentText}>
                Spotify Premium - 3M at ₹119
                <Link sx={productDetailsStyles.termsText}>T&C</Link>
              </Typography>
            </Box>
            <Box sx={productDetailsStyles.offerBox}>
              <SellIcon sx={productDetailsStyles.sellIcon} />
              <Typography sx={productDetailsStyles.tenPercentText}>
                Buy for 100 get ₹75 off your Next Buy
                <Link sx={productDetailsStyles.termsText}>T&C</Link>
              </Typography>
            </Box>
            <Box sx={productDetailsStyles.viewBox}>
              <Link sx={productDetailsStyles.view}>View 1 more offer</Link>
            </Box>
            <Grid container sx={productDetailsStyles.specificationsGrid}>
              <Grid item xs={3.8} sm={1.85}>
                <Box>
                  <Box
                    component="img"
                    src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/d/y/-original-imagueey98xhezph.jpeg?q=70"
                    width="15%"
                    sx={{ border: "1px solid #e0e0e0", p: 0.6, px: 3 }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={8.2} sm={10.15}>
                <Typography sx={productDetailsStyles.tenPercentText}>
                  1 Year of Device & 6 Months for Inbox Accessories
                  <Link sx={productDetailsStyles.termsText}>Know More</Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={productDetailsStyles.specificationsGrid}>
              <Grid item xs={12} sm={6} sx={productDetailsStyles.specifiGrid}>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Typography sx={productDetailsStyles.colorTxt}>
                      Color
                    </Typography>
                  </Grid>
                  <Grid item xs={8.5}>
                    <Box
                      component="img"
                      src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/d/y/-original-imagueey98xhezph.jpeg?q=70"
                      sx={productDetailsStyles.mobileImages}
                    ></Box>
                    <Box
                      component="img"
                      src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/d/y/-original-imagueey98xhezph.jpeg?q=70"
                      sx={productDetailsStyles.mobileImages}
                    ></Box>
                    <Box
                      component="img"
                      src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/d/y/-original-imagueey98xhezph.jpeg?q=70"
                      sx={productDetailsStyles.mobileImages}
                    ></Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Typography sx={productDetailsStyles.colorTxt}>
                      RAM
                    </Typography>
                  </Grid>
                  <Grid item xs={8.5} sx={{ display: "flex" }}>
                    <Box sx={productDetailsStyles.bytes}>4GB</Box>
                    <Box sx={productDetailsStyles.bytes}>6GB</Box>
                    <Box sx={productDetailsStyles.bytes}>8GB</Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sx={productDetailsStyles.specificationsGrid}>
              <Grid item xs={3.5} sm={1.8}>
                <Typography sx={productDetailsStyles.colorTxt}>
                  Delivery
                </Typography>
              </Grid>
              <Grid item xs={8.5} sm={10.2}>
                <FormControl
                  sx={productDetailsStyles.pincodeInput}
                  variant="standard"
                >
                  <Input
                    placeholder="Enter Delivery Pincode"
                    id="pincode"
                    sx={productDetailsStyles.inputElement}
                    startAdornment={
                      <InputAdornment position="start">
                        <LocationOnIcon
                          sx={productDetailsStyles.locationIcon}
                        />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <Typography sx={productDetailsStyles.checkTxt}>
                          Check
                        </Typography>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Box sx={productDetailsStyles.deliveryBox}>
                  <Typography sx={productDetailsStyles.deliText}>
                    Delivery by 30 Nov, Thursday
                  </Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={productDetailsStyles.divider}
                  />
                  <Box sx={productDetailsStyles.freeContainer}>
                    <Typography sx={productDetailsStyles.extra}>
                      Free
                    </Typography>
                    <Typography sx={productDetailsStyles.freePrice}>
                      $5
                    </Typography>
                    <HelpOutlineIcon sx={productDetailsStyles.helpIcon} />
                  </Box>
                </Box>
                <Typography sx={productDetailsStyles.time}>
                  if ordered before 7:28 PM
                </Typography>
                <Box sx={productDetailsStyles.viewBox}>
                  <Link sx={productDetailsStyles.view}>View Details</Link>
                </Box>
              </Grid>
            </Grid>
            <Grid container sx={productDetailsStyles.specificationsGrid}>
              <Grid item xs={12} sm={6} sx={productDetailsStyles.specifiGrid}>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Typography sx={productDetailsStyles.colorTxt}>
                      Highlights
                    </Typography>
                  </Grid>
                  <Grid item xs={8.5}>
                    <List sx={productDetailsStyles.list}>
                      <ListItem sx={productDetailsStyles.listItem}>
                        <FiberManualRecordIcon
                          sx={productDetailsStyles.circleIcon}
                        />
                        8 GB RAM | 128 GB ROM
                      </ListItem>
                      <ListItem sx={productDetailsStyles.listItem}>
                        <FiberManualRecordIcon
                          sx={productDetailsStyles.circleIcon}
                        />
                        16.71 cm (6.58 inch) Full HD+ Display
                      </ListItem>
                      <ListItem sx={productDetailsStyles.listItem}>
                        <FiberManualRecordIcon
                          sx={productDetailsStyles.circleIcon}
                        />
                        50MP + 2MP | 8MP Front Camera
                      </ListItem>
                      <ListItem sx={productDetailsStyles.listItem}>
                        <FiberManualRecordIcon
                          sx={productDetailsStyles.circleIcon}
                        />
                        5000 mAh Battery
                      </ListItem>
                      <ListItem sx={productDetailsStyles.listItem}>
                        <FiberManualRecordIcon
                          sx={productDetailsStyles.circleIcon}
                        />
                        Dimensity 6020 Processor
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container>
                  <Grid item xs={3.5}>
                    <Typography sx={productDetailsStyles.colorTxt}>
                      Easy Payment Options
                    </Typography>
                  </Grid>
                  <Grid item xs={8.5}>
                    <List sx={productDetailsStyles.list}>
                      <ListItem sx={productDetailsStyles.listItem}>
                        <FiberManualRecordIcon
                          sx={productDetailsStyles.circleIcon}
                        />
                        EMI starting from $10/month
                      </ListItem>
                      <ListItem sx={productDetailsStyles.listItem}>
                        <FiberManualRecordIcon
                          sx={productDetailsStyles.circleIcon}
                        />
                        Cash on Delivery
                      </ListItem>
                      <ListItem sx={productDetailsStyles.listItem}>
                        <FiberManualRecordIcon
                          sx={productDetailsStyles.circleIcon}
                        />
                        Net banking & Credit/ Debit/ ATM card
                      </ListItem>
                      <Link sx={productDetailsStyles.view}>View Details</Link>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sx={productDetailsStyles.specificationsGrid}>
              <Grid item xs={3.5} sm={1.75}>
                <Typography sx={productDetailsStyles.colorTxt}>
                  Seller
                </Typography>
              </Grid>
              <Grid item xs={8.5} sm={10.25}>
                <Link sx={productDetailsStyles.view}>Flashtech Retail</Link>
                <List>
                  <ListItem sx={productDetailsStyles.listItem}>
                    <FiberManualRecordIcon
                      sx={productDetailsStyles.circleIcon}
                    />
                    7 Days Service Center Replacement/Repair{" "}
                    <HelpOutlineIcon sx={productDetailsStyles.helperIcon} />
                  </ListItem>
                  <ListItem sx={productDetailsStyles.listItem}>
                    <FiberManualRecordIcon
                      sx={productDetailsStyles.circleIcon}
                    />
                    GST invoice available{" "}
                    <HelpOutlineIcon sx={productDetailsStyles.helperIcon} />
                  </ListItem>
                  <Link sx={productDetailsStyles.view}>See other sellers</Link>
                </List>
              </Grid>
            </Grid>
            <Box
              component="img"
              src="https://rukminim2.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50"
              sx={productDetailsStyles.coinsImg}
            />
            <Grid container sx={productDetailsStyles.specificationsGrid}>
              <Grid item xs={3.8} sm={1.75}>
                <Box>
                  <Typography sx={productDetailsStyles.colorTxt}>
                    Description
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8.2} sm={10.25}>
                <Typography sx={productDetailsStyles.descText}>
                  Enjoy seamless connectivity and an uninterrupted movie
                  marathon with the impressive Samsung Galaxy F13 that is
                  designed specifically to impress the entertainment fanatics.
                  This smartphone features a terrific 16.62 cm (6.6) FHD+ LCD
                  Display that can effortlessly blow your mind with its
                  incredible performance. Furthermore, this phone boasts a 50 MP
                  Triple Camera setup that allows you to capture awesomeness
                  with a gentle tap. Moreover, the Samsung Galaxy F13 sports up
                  to 8 GB of RAM and features an innovative RAM plus technology
                  that taps into the phone’s internal storage to elevate its
                  performance.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  };

  const renderJSXBasedOnApiStatus = (): React.ReactNode => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderProductSuccessView();
      case apiStatusConstants.failure:
        return renderProductFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <Box sx={productDetailsStyles.mainContainer}>
      <Box sx={productDetailsStyles.childContainer}>
        {renderJSXBasedOnApiStatus()}
      </Box>
    </Box>
  );
};

export default ProductDetails;
