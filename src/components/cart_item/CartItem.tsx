import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteFromCart, increment } from "../../store/ProductSlice";
import { AppDispatch, RootState } from "../../store/Store";
import Navbar from "../navbar/Navbar";

const CartItem = () => {
  const { itemsInCart } = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Navbar />
      <Stack direction={"row"} mt={1}>
        {itemsInCart.map((each, index) => (
          <Card key={index} sx={{ maxWidth: 345, m: 1 }}>
            <CardMedia
              component="img"
              alt="Product Image"
              height="140"
              image={each.thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {each.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ height: "30px", textOverflow: "ellipsis" }}
              >
                {each.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Stack
                direction={"row"}
                justifyContent={"space-around"}
                width={"100px"}
                alignItems={'center'}
              >
                <IconButton disabled={each.quantity === 1}>
                  <RemoveCircleOutlineIcon
                    onClick={() => dispatch(decrement(each))}
                  />
                </IconButton>
                <Typography variant="body2">{each.quantity}</Typography>
                <IconButton>
                  <AddCircleOutlineIcon
                    onClick={() => dispatch(increment(each))}
                  />
                </IconButton>
              </Stack>
              <Button
                size="small"
                onClick={() => dispatch(deleteFromCart(each))}
              >
                Remove Item
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default CartItem;