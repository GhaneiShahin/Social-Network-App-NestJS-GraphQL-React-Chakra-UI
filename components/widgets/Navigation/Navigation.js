import {
  Box,
  Text,
  Link,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from '@chakra-ui/core';
import UserBar from '../../UserBar/UserBar';
import { FaSlackHash } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { FiLink } from 'react-icons/fi';

const Navigation = ({ menu, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      {menu.map((c) => (
        <Box mb="3">
          <Flex align="center">
            <Text
              display="block"
              p="1"
              mb="2"
              as="b"
              flex="1"
              color={colorMode === 'light' ? 'black' : 'white'}
            >
              {c.name}
            </Text>
            {c.menu.length ? (
              <Menu>
                <MenuButton>
                  <IconButton
                    variant="ghost"
                    icon={<FaEllipsisH />}
                    color="gray.500"
                  />
                </MenuButton>
                <MenuList borderColor="gray.300">
                  {c.menu.map((item) => (
                    <MenuItem>{item.name}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            ) : null}
            {c.actions.map((action) => (
              <IconButton
                variant="ghost"
                icon={<HiOutlinePlusCircle />}
                color="gray.500"
              />
            ))}
          </Flex>
          <Box>
            {c.children.map((child) => (
              <Link
                href="#"
                color={
                  child.active
                    ? 'white'
                    : colorMode === 'light'
                    ? 'gray.600'
                    : 'gray.300'
                }
                bg={child.active ? 'blue.500' : null}
                display="block"
                mb="1"
                p="1"
                borderRadius="4px"
              >
                <Flex align="center">
                  {child.type === 'link' ? <FiLink /> : <FaSlackHash />}
                  <Text flex="1" ml="1">
                    {child.name}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
