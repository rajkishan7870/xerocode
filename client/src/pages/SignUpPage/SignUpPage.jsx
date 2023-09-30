import {
  Box,
  HStack,
  Divider,
} from "@chakra-ui/react";

import React from "react";
import SignUp from "../../components/SignUp";

export default function SignUpPage() {


  return (
    <div>
      <HStack spacing="5px">
        <Box w="500px" h="500px" paddingLeft="2rem" >
          <SignUp/>
        </Box>

        <Box w="100px" h="500px" paddingLeft="3rem" paddingTop="3rem">
          <Divider orientation="vertical" height="500px" />
        </Box>
        <Box w="500px" h="500px" paddingLeft="100px">
          <h1>some content</h1>
        </Box>
        
      </HStack>
    </div>
  );
}
