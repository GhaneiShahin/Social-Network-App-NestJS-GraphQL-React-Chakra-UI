import { Avatar, Box, Button, Flex, Input } from '@chakra-ui/core';
import Card from '../Card/Card';
import UserBar from '../UserBar/UserBar';
import { BiHeart } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { GoHeart } from 'react-icons/go';

const Post = ({ post }) => {
  const { user, createdAt, content, liked } = post;
  return (
    <Box>
      <Card borderBottomRadius="0" borderBottom="1px solid #E2E8F0">
        <UserBar user={user} subtitle={createdAt} />
        {content}
      </Card>
      <Card
        borderTopRadius="0"
        borderBottomRadius="0"
        borderBottom="1px solid #E2E8F0"
        p="1"
      >
        <Flex>
          <Button
            variant="ghost"
            flex="1"
            leftIcon={liked ? <GoHeart /> : <BiHeart />}
            color={liked ? 'red.500' : 'gray.500'}
          >
            {liked ? 'Dislike' : 'Like'}
          </Button>
          <Button
            variant="ghost"
            flex="1"
            leftIcon={<FaRegCommentDots />}
            color="gray.500"
          >
            Comment
          </Button>
        </Flex>
      </Card>
      <Card borderTopRadius="0">
        <Flex align="center">
          <Avatar size="sm" name="Shahin Ghanei" src={user.profile.picture} />
          <Input ml="2" variant="filled" placeholder="Add a comment" />
        </Flex>
      </Card>
    </Box>
  );
};

export default Post;
