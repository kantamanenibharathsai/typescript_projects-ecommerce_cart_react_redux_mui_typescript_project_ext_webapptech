import { Box, Typography, Button } from "@mui/material";
import homeStyles from "./Home.Styles";
import React, { useEffect } from "react";
import EachProduct from "../../components/each_product/EachProduct";
import { ThreeDots as Loader } from "react-loader-spinner";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { getProducts } from "../../store/ProductSlice";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const apiProductsData = useSelector(
    (state: RootState) => state.items.products
  );
  const apiStatus = useSelector(
    (state: RootState) => state.items.allProductsApiStatus
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const renderProductsSuccessView = () => {
    return (
      <Box component="ul" sx={homeStyles.unorderedList}>
        {apiProductsData.map((eachProduct) => (
          <EachProduct key={eachProduct.id} eachProduct={eachProduct} />
        ))}
      </Box>
    );
  };

  const renderProductsFailureView = () => {
    return (
      <Box sx={homeStyles.failureContainer}>
        <Typography sx={homeStyles.apiErrorMsg}>apiErrorMsg</Typography>
      </Box>
    );
  };

  const renderLoadingView = () => {
    return (
      <Box sx={homeStyles.loaderContainer}>
        <Loader color="#0b69ff" height={50} width={50} />
      </Box>
    );
  };

  const renderJSXBasedOnApiStatus = (): React.ReactNode => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderProductsSuccessView();
      case apiStatusConstants.failure:
        return renderProductsFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <Box sx={homeStyles.homeContainer}>
      <Box sx={homeStyles.homeChildContainer}>
        <Navbar />
        <Box sx={homeStyles.horizontalLine} component="hr" />
        <Box sx={homeStyles.homeHeader}>
          <Typography component={"p"} sx={homeStyles.showingResultsText}>
            Showing all{" "}
            <Box sx={homeStyles.spanElLimit} component="span">
              {apiProductsData.length}
            </Box>{" "}
            results
          </Typography>
        </Box>
        {renderJSXBasedOnApiStatus()}
      </Box>
    </Box>
  );
};

export default Home;
