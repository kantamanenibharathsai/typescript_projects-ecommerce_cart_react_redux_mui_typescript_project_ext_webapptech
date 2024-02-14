import { Box, Button, Paper, Typography } from "@mui/material";
import signInStyles from "./Login.Styles";
import React, { useState } from "react";
import loginImg from "../../assets/loginImg.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { loginSubmission } from "../../store/LoginSlice";

interface ILoginFormState {
  email: string;
  password: string;
  isPasswordVisible: boolean;
  authenticateText: string;
}

const Login: React.FC = () => {
  const [formState, setFormState] = useState<ILoginFormState>({
    email: "",
    password: "",
    isPasswordVisible: false,
    authenticateText: "",
  });
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  const apiStatus = useSelector(
    (state: RootState) => state.login.apiStatus
  );

  React.useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token") ?? "null");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setFormState((prevState) => ({
      ...prevState,
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setFormState((prevState) => ({
        ...prevState,
        email: value,
      }));
    } else if (name === "password") {
      setFormState((prevState) => ({ ...prevState, password: value }));
    }
  };

  const authenticateUser = async () => {
    const { email, password } = formState;
  
    // try {
    //   const response = await fetch("https://reqres.in/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     const token = data.token;
    //     setFormState((prevState) => ({
    //       ...prevState,
    //       authenticateText: "Login Successful",
    //     }));
    //     localStorage.setItem("token", JSON.stringify(token));
    //     navigate("/");
    //   } else {
    //     setFormState((prevState) => ({
    //       ...prevState,
    //       authenticateText: "Invalid email or password",
    //     }));
    //   }
    // } catch (error: any) {
    //   setFormState((prevState) => ({
    //     ...prevState,
    //     authenticateText: error.message,
    //   }));
    // }
    dispatch(loginSubmission({ email, password }))
    if (apiStatus === "SUCCESS") navigate("/")

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authenticateUser();
  };

  return (
    <Box sx={signInStyles.mainContainer}>
      <Box sx={signInStyles.logoText}>Your Logo</Box>
      <Box sx={signInStyles.parentContainer}>
        <Box sx={signInStyles.childContainer}>
          <Paper sx={signInStyles.signUpContainer}>
            <Box sx={signInStyles.signUpChildContainer}>
              <Box sx={signInStyles.welcomeText}>Welcome !</Box>
              <Box sx={signInStyles.signinTextContainer}>
                <Box sx={signInStyles.signintoText}>Sign in to</Box>
                <Box sx={signInStyles.loremText}>Lorem Ipsum is simply</Box>
              </Box>
              <Box
                sx={signInStyles.formContainer}
                component="form"
                onSubmit={handleSubmit}
              >
                <Box sx={signInStyles.inputLabelContainer}>
                  <Box sx={signInStyles.labelText}>Email</Box>
                  <Box sx={signInStyles.inputContainer}>
                    <Box
                      sx={signInStyles.inputEl}
                      placeholder="Enter your Email"
                      onChange={handleInputChange}
                      name="email"
                      type="email"
                      value={formState.email}
                      component="input"
                    />
                  </Box>
                </Box>
                <Box>
                  <Box sx={signInStyles.inputLabelContainer}>
                    <Box sx={signInStyles.labelText}>Password</Box>
                    <Box sx={signInStyles.inputContainer}>
                      <Box
                        sx={signInStyles.inputEl}
                        placeholder="Enter your Password"
                        type={formState.isPasswordVisible ? "password" : "text"}
                        onChange={handleInputChange}
                        name="password"
                        value={formState.password}
                        component="input"
                      />
                      {formState.isPasswordVisible ? (
                        <VisibilityOffIcon
                          sx={signInStyles.eye}
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <VisibilityIcon
                          sx={signInStyles.eye}
                          onClick={togglePasswordVisibility}
                        />
                      )}
                    </Box>
                  </Box>
                  <Box sx={signInStyles.rememberContainer}>
                    <Box sx={signInStyles.labelContainer}>
                      <Box
                        sx={signInStyles.checkbox}
                        placeholder="Enter your Password"
                        type="checkbox"
                        id="checkbox"
                        component="input"
                      />
                      <Box
                        sx={signInStyles.remember}
                        htmlFor="checkbox"
                        component="label"
                      >
                        Remember me
                      </Box>
                    </Box>
                    <Box sx={signInStyles.forget}>Forgot Password ?</Box>
                  </Box>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  sx={signInStyles.formBtn}
                >
                  Login
                </Button>
              </Box>
              {formState.authenticateText && (
                <Typography sx={signInStyles.errorMsgText}>
                  {formState.authenticateText}
                </Typography>
              )}
              <Box sx={signInStyles.haveContainer}>
                Don't have an Account ?
                <Box sx={signInStyles.register} component="span">
                  Register
                </Box>
              </Box>
            </Box>
          </Paper>

          <Box sx={signInStyles.imgContainer}>
            <Box
              component="img"
              sx={signInStyles.img}
              src={loginImg}
              alt="Login"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
