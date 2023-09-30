import React from "react";
import { Button, VStack, Box, Divider, AbsoluteCenter } from "@chakra-ui/react";

export default function SignIn5() {
  function handleSelfHosting() {}

  function handleXeroCodeHosting() {}
  return (
    <div>
      <VStack>
        <Box w="900px" h="500px">
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
              Choose From the Following Deployment Option
            </AbsoluteCenter>
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Button
              onClick={handleSelfHosting}
              colorScheme="gray"
              variant="outline"
              width="20rem"
            >
              Self Hosting
            </Button>
            <Button
              onClick={handleXeroCodeHosting}
              colorScheme="gray"
              variant="outline"
              width="20rem"
            >
              XeroCode Hosting
            </Button>
          </Box>
        </Box>
      </VStack>
    </div>
  );
}
