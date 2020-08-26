import { Flex, Box, Avatar, Text } from '@chakra-ui/core';
import Card from '../Card/Card';

const UserBar = ({ user, subtitle, size }) => {
  return (
    <Flex mb="4" align="center">
      <Box mr="3">
        <Avatar
          size={size}
          name={user?.profile?.name}
          src={user?.profile?.picture}
        />
      </Box>
      <Box flex="1">
        <Text as="b">{user?.profile?.name}</Text>
        {subtitle ? <Text color="gray.500">{subtitle}</Text> : null}
      </Box>
    </Flex>
  );
};

export default UserBar;
