import { Text, Box, Flex, Input } from '@chakra-ui/core';
import Card from '../Card/Card';
import { BiPlus } from 'react-icons/bi';

const ContentInput = ({user}) => {
  return (
      <Card mb="4">
        <Flex align="center">
          <Box color="gray.500" mr="4">
            <BiPlus />
          </Box>
          <Text flex="1" color="gray.400">
            What's on your mind?
          </Text>
        </Flex>
      </Card>
  );
};

export default ContentInput;
