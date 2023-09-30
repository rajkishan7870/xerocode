import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    VStack,
    useToast,
    Divider,
    AbsoluteCenter,
  } from "@chakra-ui/react";
  import { FcGoogle } from "react-icons/fc";
  import { BsGithub } from "react-icons/bs"
  import React, { useState } from "react";
  import axios from "axios";
  import { Link, useNavigate } from "react-router-dom";
  
  export default function SignUp() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
  
    const [f_Name, setF_Name] = useState();
    const [l_Name, setL_Name] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
  
    const toast = useToast();
    const navigate = useNavigate();
  
    const submitHandler = async () => {
      setLoading(true);
      if (!f_Name || !l_Name || !email || !password || !confirmpassword) {
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
      if (password !== confirmpassword) {
        toast({
          title: "Passwords Do Not Match",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }
      console.log(f_Name, l_Name, email, password);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/user/signup",
          {
            f_Name,
            l_Name,
            email,
            password,
          },
          config
        );
        console.log(data);
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
  
        // localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/signin2")
  
        setLoading(false);
      } catch (error) {
        toast({
          title: "Not Registered Error Occured!",
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
        <VStack spacing="5px">
          <Box w="500px" h="500px" paddingLeft="2rem" >
          <Box
              mt="1"
              fontWeight="bold"
              lineHeight="tight"
              as="h1"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img style={{maxHeight : "30px"}} src="https://ci3.googleusercontent.com/mail-sig/AIorK4yOtkRgrh06Cct1JlQYo9oLD0FQozoSQJC6PZwDEo5xy0bpZLcPBt95tcE6BGzoRaSJXHsL9Tg" alt="❌" />erocodee.
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
              Hello!{" "}
            </Box>
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                Create Your Account
              </AbsoluteCenter>
            </Box>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="Enter Your First Name"
                onChange={(e) => setF_Name(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Second Name</FormLabel>
              <Input
                placeholder="Enter Your Second Name"
                onChange={(e) => setL_Name(e.target.value)}
              />
            </FormControl>
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
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
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
              Sign Up
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
  
            <Box
            display="flex"
            justifyContent="space-between"
            >
              <Button colorScheme='teal' variant='outline'>
                SignUp with Google <FcGoogle/>
              </Button>
  
              <Button colorScheme='teal' variant='outline'>
                SignUp with GitHub <BsGithub/>
              </Button>
            </Box>
  
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="10px"
            >Already Have an Account? <Link to="/login">LOGIN</Link>
            </Box>
          </Box>
          
        </VStack>
      </div>
    );
  }
  