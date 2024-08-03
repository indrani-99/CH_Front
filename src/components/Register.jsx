import { Box, Input, Button, Heading, Center } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const base_url = `http://localhost:5000`;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSignup = async () => {
   const response= await axios.post(`${base_url}/user/register`, {
      username: username,
      email: email,
      password: password,
    });
    if(response.data=='Registration successful')
        navigate('/country')
    else
        alert("Try again");
    
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
        Sign up
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
          placeholder="Enter Username "
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          placeholder="Enter email "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Enter password "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button colorScheme="blue" onClick={handleSignup}>
          Sign up
        </Button>
      </Box>
    </>
  );
}

export default Register;
