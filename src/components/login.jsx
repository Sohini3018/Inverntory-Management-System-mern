import React from "react";
import backgroundImage from "../Assets/Inventory_image.jpg";
import logo from "../Assets/flat-color-icons_google.png";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Component = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin: 0 5px;
`;

const FormComponent = styled(Box)`
  width: 550px;
  padding: 50px 45px;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 50px 35px;
`;

const Tagline = styled(Typography)`
  font-size: 30px;
  color: rgba(0, 0, 0, 68%);
`;

const SignInButton = styled(Button)`
  font-size: 15px;
  text-transform: none;
  color: #000000;
  border: 1px solid #000000;
  border-radius: 30px;
  height: 52px;
`;

const LoginButton = styled(Button)`
  font-size: 15px;
  background-color: #101540;
  border-radius: 30px;
  color: #ffffff;
  text-transform: none;
  height: 60px;
`;

const Input = styled(TextField)`
  background-color: #eef5f9;
`;

const Logo = styled("img")({
  marginLeft: "5px",
});
const ImageComponent = styled("img")({
  marginTop: "30px",
  width: "700px",
  height: "700px",
});

function login() {
  return (
    <Component>
      <FormComponent>
        <Tagline variant="h6">See Your Growth and Get Support!</Tagline>

        <Input type="email" label="Email" variant="outlined" />
        <Input type="password" label="Password" variant="outlined" />
        <LoginButton type="submit" variant="contained">
          Login
        </LoginButton>

        <Typography>Not registered yet? Create a new account</Typography>
        <SignInButton type="submit" variant="outlined">
          Sign in with Google <Logo src={logo} alt="" />
        </SignInButton>
      </FormComponent>

      <ImageComponent
        src={backgroundImage}
        alt="Login Background"
        className="login-image"
      />
    </Component>
  );
}

export default login;
