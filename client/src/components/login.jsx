import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
    useToast,
    Divider,
    Box,
    AbsoluteCenter,
  } from "@chakra-ui/react";
  import { FcGoogle } from "react-icons/fc";
  import { BsGithub } from "react-icons/bs";
  import React, { useState } from "react";
  import axios from "axios";
  import { Link, useNavigate } from "react-router-dom";
  
  export default function Login() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState();
  
    const toast = useToast();
    const navigate = useNavigate();
  
    const submitHandler = async () => {
      setLoading(true);
      if (!email || !password) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }
  
      console.log(email, password);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/user/login",
          {
            email,
            password,
          },
          config
        );
        console.log(data);
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
  
        // localStorage.setItem("userInfo", JSON.stringify(data));
  
        navigate("/chats");
        setLoading(false);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    };
  
    return (
      <div>
        <VStack>
          <Box w="500px" h="500px" paddingLeft="2rem">
            <Box
              mt="1"
              fontWeight="bold"
              lineHeight="tight"
              as="h1"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                style={{ maxHeight: "30px" }}
                src="https://ci3.googleusercontent.com/mail-sig/AIorK4yOtkRgrh06Cct1JlQYo9oLD0FQozoSQJC6PZwDEo5xy0bpZLcPBt95tcE6BGzoRaSJXHsL9Tg"
                alt="❌"
              />
              erocodee.
            </Box>
            <Box
              mt="1"
              fontWeight="bold"
              lineHeight="tight"
              as="h1"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Welcome !
            </Box>
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                Login To Your Account
              </AbsoluteCenter>
            </Box>
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
  
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              colorScheme="blue"
              width="100%"
              style={{ marginTop: 15 }}
              onClick={submitHandler}
              isLoading={loading}
            >
              Login
            </Button>
            <Box
              mt="1"
              fontWeight="bold"
              lineHeight="tight"
              as="h1"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              OR
            </Box>
  
            <Box display="flex" justifyContent="space-between">
              <Button colorScheme="gray" variant="outline" >
                Login with Google <FcGoogle />
              </Button>
  
              <Button colorScheme="gray" variant="outline">
                Login with GitHub <BsGithub />
              </Button>
            </Box>
  
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="10px"
            >
              Don't Have an Account ? <Link to="/signup">SIGN UP</Link>
            </Box>
          </Box>
        </VStack>
      </div>
    );
  }
  