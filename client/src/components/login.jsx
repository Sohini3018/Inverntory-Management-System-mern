import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Assets/Inventory_image.jpg";
import logoimage from "../Assets/Logo_image.png";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Component = styled(Box)`
  display: flex;
  justify-content: space-around;
  margin: 0 5px;
`;
const MainComponent = styled(Box)``;

const LogoImage = styled("img")({
  height: "120px",
  width: "120px",
  position: "absolute",
  right: "60px",
  top: "30px",
});
const FormComponent = styled(Box)`
  width: 550px;
  padding: 50px 45px;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
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

const Text = styled(Typography)`
  text-align: center;
`;

// const Logo = styled("img")({
//   marginLeft: "5px",
// });
const ImageComponent = styled("img")({
  marginTop: "100px",
  marginRight: "80px",
  width: "550px",
  height: "550px",
});

function Login() {
  const [account, toggleAccount] = useState("loggedIn");
  const [input, setInput] = useState({
    name: "",
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const getInput = async () => {
    try {
      const userData = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!userData.ok) {
        throw new Error("Registration failed");
      }

      const userDataJson = await userData.json();
      console.log(userDataJson);

      localStorage.setItem("user", JSON.stringify(userDataJson));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <MainComponent>
      <LogoImage src={logoimage} alt="" />
      <Component>
        {account === "loggedIn" ? (
          <FormComponent>
            <Tagline variant="h6">See Your Growth and Get Support!</Tagline>

            <Input type="email" label="Email" variant="outlined" />
            <Input type="password" label="Password" variant="outlined" />
            <LoginButton
              type="submit"
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </LoginButton>

            <Text>Not registered yet?</Text>
            <SignInButton
              type="submit"
              variant="outlined"
              onClick={() => {
                toggleAccount("notLoggedIn");
              }}
            >
              Create a New Account
            </SignInButton>
          </FormComponent>
        ) : (
          <FormComponent style={{ gap: "15px" }}>
            <Tagline variant="h6">See Your Growth and Get Support!</Tagline>

            <Input
              type="text"
              label="Full Name"
              variant="outlined"
              name="name"
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Phone Number"
              variant="outlined"
              name="phoneNumber"
              onChange={handleChange}
            />
            <Input
              type="email"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
            />
            <Input
              type="password"
              label="Create a Password"
              variant="outlined"
              name="password"
              onChange={handleChange}
            />
            <LoginButton type="submit" variant="contained" onClick={getInput}>
              Create a New Account
            </LoginButton>

            <Text>Already Have an Account?</Text>

            <SignInButton
              type="submit"
              variant="outlined"
              onClick={() => {
                toggleAccount("loggedIn");
              }}
            >
              Login
            </SignInButton>
          </FormComponent>
        )}

        <ImageComponent
          src={backgroundImage}
          alt="Login Background"
          className="login-image"
        />
      </Component>
    </MainComponent>
  );
}

export default Login;
