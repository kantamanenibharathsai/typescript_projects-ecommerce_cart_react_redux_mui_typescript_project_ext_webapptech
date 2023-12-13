import { Box, Typography, Button } from "@mui/material";
import homeStyles from "./Home.Styles";
import React, { useState, useEffect } from "react";
import Product from "../../components/each_product/EachProduct";
import { ThreeDots as Loader } from "react-loader-spinner";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

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

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

interface IState {
  apiProductsData: { limit: number; products: ProductObj[] };
  apiErrorMsg: string;
  apiStatus: string;
}
const Home: React.FC = () => {
  const [apiProductsData, setApiProductsData] = useState<
    IState["apiProductsData"]
  >({ limit: 0, products: [] });
  const [apiErrorMsg, setApiErrorMsg] = useState<IState["apiErrorMsg"]>("");
  const [apiStatus, setApiStatus] = useState<IState["apiStatus"]>(
    apiStatusConstants.initial
  );
  const navigate = useNavigate();

  useEffect(() => {
    setApiStatus(apiStatusConstants.inProgress);
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setApiStatus(apiStatusConstants.success);
          setApiProductsData(data);
        } else {
          throw new Error("API Call Failed");
        }
      } catch (error) {
        if (error instanceof Error) {
          setApiStatus(apiStatusConstants.failure);
          setApiErrorMsg(error.message);
        }
      }
    };

    fetchData();
  }, []);

  const renderProductsSuccessView = () => {
    return (
      <Box component="ul" sx={homeStyles.unorderedList}>
        {apiProductsData.products.map((eachProduct: ProductObj) => (
          <Product key={eachProduct.id} eachProduct={eachProduct} />
        ))}
      </Box>
    );
  };

  const renderProductsFailureView = () => {
    return (
      <Box sx={homeStyles.failureContainer}>
        <Typography sx={homeStyles.apiErrorMsg}>{apiErrorMsg}</Typography>
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
              {apiProductsData.limit}
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
