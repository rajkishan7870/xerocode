import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

export default function Organisation() {
  return (
    <Box display="flex" paddingTop="50px" >
        <Input placeholder='Organisation Name' /> 
        <Button>SUBMIT</Button>
    </Box>
  )
}
