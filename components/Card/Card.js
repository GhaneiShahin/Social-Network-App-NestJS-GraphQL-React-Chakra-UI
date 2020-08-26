import { Box, useColorMode } from '@chakra-ui/core';

const Card = ({ children, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === 'light' ? 'white' : 'black'}
      color={colorMode === 'light' ? 'black' : 'white'}
      boxShadow="0px 0px 1px rgba(0, 0, 0, 0.25);"
      borderRadius="4px"
      p="4"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
