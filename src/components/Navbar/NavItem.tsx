import { ElementType } from 'react';
import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ActiveLink } from '../ActiveLink';
import Link from 'next/link';

interface NavItemProps {
  text: string;
  href: string;
  active?: boolean;
}

export const NavItem = ({ text, href, active = false }: NavItemProps) => {
  return (
    <>
      {/* <Link href={href} passHref>
        {!!active ? (
          <Text
            color="gray.50"
            fontSize="lg"
            bg="red.600"
            borderRadius="10px"
            py="10"
            px="15"
            cursor="pointer"
          >
            {text}
          </Text>
        ) : (
          <Text
            color="gray.50"
            fontSize="lg"
            py="10"
            px="15"
            borderRadius="10px"
            _hover={{
              bg: 'red.600',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {text}
          </Text>
        )}
      </Link> */}

      <ActiveLink href={href} passHref shouldMatchExactHref>
        <Text
          color="gray.50"
          fontSize="lg"
          bg="red.600"
          borderRadius="10px"
          fontWeight="semibold"
          py="10"
          px="15"
          cursor="pointer"
          transition="0.2s"
          _hover={{
            bg: 'red.600',
            cursor: 'pointer',
            color: 'gray.50'
          }}
        >
          {text}
        </Text>
      </ActiveLink>
    </>
  );
}