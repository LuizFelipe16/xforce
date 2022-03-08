import { Heading, VStack, Text } from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";
import { NavItem } from "./NavItem";

export const SidebarNav = () => {
  return (
    <>
      <ActiveLink href="/" passHref shouldMatchExactHref>
        <Text
          color="gray.50"
          fontSize="lg"
          bg="red.600"
          borderRadius="10px"
          fontWeight="semibold"
          py="3"
          px="15"
          cursor="pointer"
          transition="0.2s"
        >
          Home
        </Text>
      </ActiveLink>
      <br />
      <ActiveLink href="/About" passHref shouldMatchExactHref>
        <Text
          color="gray.50"
          fontSize="lg"
          bg="red.600"
          borderRadius="10px"
          fontWeight="semibold"
          py="3"
          px="15"
          cursor="pointer"
          transition="0.2s"
        >
          Sobre
        </Text>
      </ActiveLink>
      <br />
      <ActiveLink href="/Pricing" passHref shouldMatchExactHref>
        <Text
          color="gray.50"
          fontSize="lg"
          bg="red.600"
          borderRadius="10px"
          fontWeight="semibold"
          py="3"
          px="15"
          cursor="pointer"
          transition="0.2s"
        >
          Preços
        </Text>
      </ActiveLink>
      <br />
      <ActiveLink href="/Blog" passHref shouldMatchExactHref>
        <Text
          color="gray.50"
          fontSize="lg"
          bg="red.600"
          borderRadius="10px"
          fontWeight="semibold"
          py="3"
          px="15"
          cursor="pointer"
          transition="0.2s"
        >
          Blogs
        </Text>
      </ActiveLink>
    </>
  );
}