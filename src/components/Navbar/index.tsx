import { Box, Flex, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue, Button, Icon, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { FaIndent } from "react-icons/fa";
import { useSidebarDrawer } from "../../hooks/useSidebarDrawer";
import { ActiveLink } from "../ActiveLink";
import { SidebarNav } from "./SidebarNav";
import { NavSection } from "./NavSection";

export const Navbar = () => {
  const { isOpen, onClose, onOpen } = useSidebarDrawer();
  const btnRef = useRef()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!!isDrawerSidebar) {
    return (
      <>
        <Flex
          w="100vw"
          h="14vh"
          position="fixed"
          bg="transparent"
          zIndex="100"
          align="center"
          justify="flex-start"
          py="6"
          px="6"
        >
          <Button ref={btnRef} colorScheme='red' size="lg" bg="red.600" onClick={onOpen}>
            <Icon as={FaIndent} />
          </Button>
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
              <DrawerCloseButton color="gray.50" mt="6" />
              <DrawerHeader display="flex" flexDirection="row" mb="12" color="gray.50">
                <Text color="red.600" fontWeight="800">XF</Text>ORCE
              </DrawerHeader>
              <DrawerBody>
                <SidebarNav />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }

  return (
    <Flex
      w="100vw"
      h="11vh"
      position="fixed"
      bg="gray.900"
      zIndex="100"
      borderColor="red.600"
      borderBottomWidth="2px"
      align="center"
      justify="space-between"
      py="6"
      px="10rem"
    >
      <NavSection />
    </Flex>
  );
}