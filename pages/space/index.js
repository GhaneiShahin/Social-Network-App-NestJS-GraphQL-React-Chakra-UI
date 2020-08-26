import { Fragment } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  useColorMode,
  Container,
} from '@chakra-ui/core';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { HiOutlineCog } from 'react-icons/hi';
import { FaRegBell } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { PostData, suggestedUsers, NAVIGATION } from '../../fixtures';
import Feed from '../../components/Feed/Feed';
import UserList from '../../components/UserList/UserList';
import ContentInput from '../../components/ContentInput/ContentInput';
import Navigation from '../../components/widgets/Navigation/Navigation';

const SpacePage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Fragment>
      <Header />
      <Container maxWidth="xl">
        <Flex ml="2" mr="2">
          <Box w="322px" pr="2" mr="3">
            <Flex mb="3">
              <Button onClick={() => toggleColorMode()} flex="1">
                Test the Dark Mode!
              </Button>
            </Flex>
            <Navigation menu={NAVIGATION} />
          </Box>

          <Box flex="1" mr="3">
            <Card mb="5">
              <Flex>
                <Box flex="1">
                  <Text as="b">Home</Text>
                </Box>
                <Box>
                  <Button variant="ghost">
                    <HiOutlineCog />
                  </Button>
                  <Button variant="ghost">
                    <FaRegBell />
                  </Button>
                </Box>
              </Flex>
            </Card>
            <ContentInput />
            <Feed posts={[PostData, PostData, PostData]} />
          </Box>

          <Box w="322px" pl="2">
            <Card>
              <Flex align="center">
                <Text fontWeight="500" as="b" flex="1">
                  Recently Active
                </Text>
                <IconButton
                  variant="ghost"
                  color="gray.500"
                  icon={<FaEllipsisH />}
                />
              </Flex>
              <hr />
              <Box mt="4">
                <UserList size="sm" users={suggestedUsers} />
              </Box>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Fragment>
  );
};

export default SpacePage;
