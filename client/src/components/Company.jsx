import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

export default function Company() {
  return (
    <Box display="flex" paddingTop="50px" >
        <Input placeholder='Company Name' /> 
        <Button>SUBMIT</Button>
    </Box>
  )
}
