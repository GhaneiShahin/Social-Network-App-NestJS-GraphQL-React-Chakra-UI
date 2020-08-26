import { VStack } from '@chakra-ui/core';
import Post from '../Post/Post';

const Feed = ({ posts }) => {
  return (
    <VStack spacing="3">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </VStack>
  );
};

export default Feed;
