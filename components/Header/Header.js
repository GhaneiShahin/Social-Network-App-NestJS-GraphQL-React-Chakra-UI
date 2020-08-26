import { Flex, Box } from '@chakra-ui/core';

const Header = () => {
  return (
    <Flex mb="4">
      <Box pt="4" pb="4" flex="1" bg="black" color="white" textAlign="center">
        <b>Tribe Menu</b>
      </Box>
    </Flex>
  );
};

export default Header;
