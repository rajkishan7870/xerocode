import {
  HStack,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";

import Login from "../../components/login";

export default function LoginPage() {
  

  return (
    <div>
      <HStack>
        <Box w="500px" h="500px" paddingLeft="2rem">
          <Login />
        </Box>
        <Box w="100px" h="500px" paddingLeft="3rem" paddingTop="2rem">
          <Divider orientation="vertical" height="500px" />
        </Box>
        <Box w="500px" h="500px" paddingLeft="100px">
          <h1>some content</h1>
        </Box>
      </HStack>
    </div>
  );
}
