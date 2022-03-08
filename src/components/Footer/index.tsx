import { Flex, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <Stack
        w="100vw"
        h="auto"
        minH="65vh"
        align="center"
        justify="flex-start"
        spacing={["16", "40"]}
        px="20"
        py="12"
        bg="gray.800"
        direction={['column', 'row']}
      >
        <VStack spacing="6" align="flex-start">
          <Text color="gray.50" fontWeight="semibold" fontSize="2xl">Outras Sessões</Text>
          <Link href="/">
            <Text as="a" color="gray.50" fontWeight="thin" fontSize="md" cursor="pointer">Home</Text>
          </Link>
          <Link href="/">
            <Text as="a" color="gray.50" fontWeight="thin" fontSize="md" cursor="pointer">Sobre</Text>
          </Link>
          <Link href="/">
            <Text as="a" color="gray.50" fontWeight="thin" fontSize="md" cursor="pointer">Preços</Text>
          </Link>
          <Link href="/">
            <Text as="a" color="gray.50" fontWeight="thin" fontSize="md" cursor="pointer">Blogs</Text>
          </Link>
        </VStack>

        <VStack spacing="6" align="flex-start">
          <Text color="gray.50" fontWeight="semibold" fontSize="2xl">Horários</Text>
          <Text color="gray.50" fontWeight="thin" fontSize="md">Segunda: 7:00am - 10:30pm</Text>
          <Text color="gray.50" fontWeight="thin" fontSize="md">Terça: 7:00am - 10:30pm</Text>
          <Text color="gray.50" fontWeight="thin" fontSize="md">Quarta: 7:00am - 10:30pm</Text>
          <Text color="gray.50" fontWeight="thin" fontSize="md">Sexta: 7:00am - 10:30pm</Text>
        </VStack>

        <VStack spacing="6" align="flex-start">
          <Text color="gray.50" fontWeight="semibold" fontSize="2xl">Contato</Text>
          <Text color="gray.50" fontWeight="thin" fontSize="md">+55 19 99801-1221</Text>
          <Text color="gray.50" fontWeight="thin" fontSize="md">+55 19 99801-1221</Text>
          <Text color="gray.50" fontWeight="thin" fontSize="md">shaki@gmail.com</Text>
          <Text color="gray.50" fontWeight="thin" fontSize="md">Mumbai, Barra Limpa - 81271</Text>
        </VStack>

        <VStack spacing="6" align="flex-start">
          <Text color="gray.50" fontWeight="semibold" fontSize="2xl">Redes</Text>
          <Flex
            w="4rem"
            h="4rem"
            bg="gray.900"
            borderRadius="5rem"
            color="gray.50"
            align="center"
            justify="center"
            borderWidth="thin"
            borderColor="red.600"
            _hover={{
              bg: 'red.600',
              transition: '0.2s',
            }}
          >
            <Icon
              as={FaFacebookF}
              color="red.600"
              fontSize="3xl"
              _hover={{
                color: 'gray.900',
                transition: '0.2s',
              }}
            />
          </Flex>
          <Flex
            w="4rem"
            h="4rem"
            bg="gray.900"
            borderRadius="5rem"
            color="gray.50"
            align="center"
            justify="center"
            borderWidth="thin"
            borderColor="red.600"
            _hover={{
              bg: 'red.600',
              transition: '0.2s',
            }}
          >
            <Icon
              as={FaInstagram}
              color="red.600"
              fontSize="3xl"
              _hover={{
                color: 'gray.900',
                transition: '0.2s',
              }}
            />
          </Flex>
        </VStack>
      </Stack>

      <Flex w="100vw" h="auto" p="4" align="center" justify="center">
        <Text
          as="a"
          target="_blank"
          href="https://www.cybernegocio.com.br"
          color="red.600"
          fontSize="md"
          _hover={{
            textDecoration: 'underline'
          }}
        >
          Created by CyberNegócios
        </Text>
      </Flex>
    </>
  );
}