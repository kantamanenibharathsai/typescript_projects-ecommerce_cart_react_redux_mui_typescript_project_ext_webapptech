import {
    Typography,
    Card,
    CardMedia,
    CardContent,
    Rating,
    Box,
  } from "@mui/material";
  import eachProductStyles from "./EachProduct.Styles";
  import React from "react";
  import { Link } from "react-router-dom";
  
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
  
  interface MyProps {
    eachProduct: ProductObj;
  }
  const Product: React.FC<MyProps> = ({ eachProduct }) => {
    return (
      <Link
        to={`product-details/${eachProduct.id}`}
        style={{ textDecoration: "none" }}
      >
        <Card sx={eachProductStyles.cardContainer}>
          <CardMedia
            sx={{
              height: { xs: "195px", sm: "215px", md: "233px", lg: "270px" },
              borderRadius: "6px",
            }}
            image={eachProduct.thumbnail}
            title="Products"
          />
          <CardContent sx={eachProductStyles.cardContent}>
            <Typography component="h2" sx={eachProductStyles.text1}>
              {eachProduct.title}
            </Typography>
            <Typography component="h3" sx={eachProductStyles.text2}>
              {eachProduct.category}
            </Typography>
            <Typography component="p" sx={eachProductStyles.descriptionText}>
              {eachProduct.description}
            </Typography>
            <Box sx={eachProductStyles.cardBodyChildContainer1}>
              <Typography component="p" sx={eachProductStyles.text3}>
                Rs {eachProduct.price}
              </Typography>
              <Box sx={eachProductStyles.cardBodyChildContainer2}>
                <Rating
                  name="read-only"
                  value={eachProduct.rating}
                  sx={eachProductStyles.rating}
                  readOnly
                />
                <Typography variant="body1" sx={eachProductStyles.text4}>
                  {eachProduct.rating}
                </Typography>
              </Box>
            </Box>
            <Box sx={eachProductStyles.cardBodyChildContainer3}>
              <Box sx={eachProductStyles.cardBodyChildContainer4}>
                <Box sx={eachProductStyles.smallImagesContainer}>
                  {eachProduct.images.map((eachImg: string) => (
                    <Box
                      component="img"
                      sx={eachProductStyles.cardSmallImg}
                      alt="image"
                      src={eachImg}
                      key={eachProduct.images.indexOf(eachImg)}
                    />
                  ))}
                </Box>
              </Box>
              <Box sx={eachProductStyles.brandDiscountContainer}>
                <Typography component="p" sx={eachProductStyles.text5}>
                  {eachProduct.brand}
                </Typography>
                <Typography component="p" sx={eachProductStyles.text6}>
                  {eachProduct.discountPercentage}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Link>
    );
  };
  
  export default Product;