import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views"; // npm i --save-dev @types/react-swipeable-views
import { autoPlay } from "react-swipeable-views-utils"; // npm i --save-dev @types/react-swipeable-views-utils

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface MyProps {
  carouselImages: string[] | undefined;
}

function SwipeableTextMobileStepper(props: MyProps) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props?.carouselImages?.length ?? 0;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 450 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props?.carouselImages?.map((eachImgUrl: string, i) => (
          <div key={props?.carouselImages?.indexOf(eachImgUrl)}>
            {Math.abs(activeStep - i) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 285,
                  display: "block",
                  maxWidth: 450,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={eachImgUrl}
                alt={`${eachImgUrl}${i}`}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          justifyContent: "center",
          marginTop: "20px",
          backgroundColor: "#f1f3f6",
        }} // Center-align the dots
        nextButton={<></>}
        backButton={<></>}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;

