import { Button, VStack, Box, Divider, AbsoluteCenter } from "@chakra-ui/react";
import React, { useState } from "react";
import Organisation from "../../components/Organisation";
import Company from "../../components/Company";

export default function SignIn2() {
  const [openDeveloper, setOpenDeveloper] = useState(false);
  const [openOrganisation, setOpenOrganisation] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  function handleDeveloper() {
    setOpenDeveloper(!openDeveloper);
    setOpenOrganisation(false);
    setOpenCompany(false);
  }
  function handleOrganisation() {
    setOpenDeveloper(false);
    setOpenOrganisation(!openOrganisation);
    setOpenCompany(false);
  }
  function handleCompany() {
    setOpenDeveloper(false);
    setOpenOrganisation(false);
    setOpenCompany(!openCompany);
  }

  return (
    <div>
      <VStack>
        <Box w="500px" h="500px">
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
              Choose From the Following
            </AbsoluteCenter>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Button
              onClick={handleDeveloper}
              colorScheme="gray"
              variant="outline"
            >
              Developer
            </Button>
            <Button
              onClick={handleOrganisation}
              colorScheme="gray"
              variant="outline"
              bg={openOrganisation ? "lightblue" : null}
            >
              Organisation
            </Button>
            <Button
              onClick={handleCompany}
              colorScheme="gray"
              variant="outline"
              bg={openCompany ? "lightblue" : null}
            >
              Company
            </Button>
          </Box>

          {openOrganisation && <Organisation />}
          {openCompany && <Company />}
        </Box>
      </VStack>
    </div>
  );
}
