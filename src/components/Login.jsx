import { Box, Input, Button, Heading, Center } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const base_url = `http://localhost:5000`;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await axios.post(`${base_url}/user/login`, {
      email: email,
      password: password,
    });
    
    const token = response.data.token;
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if(response.data.msg=="Login successful")
        navigate('/country');
  };

  const handleNewAcc = () => {
    navigate("/register");
  };
  return (
    <>
      <Heading
        style={{
          textAlign: "center",
          marginTop: "150px",
          marginBottom: "25px",
        }}
      >
        Login
      </Heading>
      <Box
        w="400px"
        h="300px"
        boxShadow="md"
        p="6"
        rounded="base"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <Input
          placeholder="Enter your email "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Enter your password "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
        <Button onClick={handleNewAcc}>Create Account</Button>
      </Box>
    </>
  );
}

export default Login;
