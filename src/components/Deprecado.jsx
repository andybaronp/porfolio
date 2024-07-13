import React from 'react'

import { Box, Text } from '@chakra-ui/react';

const DeprecadoTag = () => (
  <Box
    position="fixed"
    top="80px"
    left="-90px"
    width="450px"
    backgroundColor="red.500"
    color="white"
    textAlign="center"
    transform="rotate(-45deg)"
    fontSize="20px"
    fontWeight="bold"
    padding="5px 0"

  >
    Deprecado
  </Box>
);
const Deprecado = () => {
  return (

    <DeprecadoTag />
  )
}

export default Deprecado