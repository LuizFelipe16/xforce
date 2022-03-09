import { Heading, HStack, Text } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

export const NavSection = () => {
  return (
    <>
      <Heading as="div" display="flex" flexDirection="row" color="red.600">
        XF<Text color="red.100">ORCE</Text>
      </Heading>

      <HStack spacing="12">
        <NavItem href="/" text="Home" />
        <NavItem href="/About" text="Sobre" />
        <NavItem href="/Pricing" text="Preços" />
        <NavItem href="/Blog" text="Blog" />
      </HStack>
    </>
  );
}