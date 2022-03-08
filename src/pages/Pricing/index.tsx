import { Box, Button, Divider, Flex, Heading, HStack, Icon, Img, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCheck, FaCheckCircle, FaQuoteRight, FaRegCheckCircle } from 'react-icons/fa';
import { BiXCircle } from 'react-icons/bi';
import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function Pricing() {
  return (
    <Flex
      w="100vw"
      h="auto"
      justify="flex-start"
      align="center"
      direction="column"
      bg="gray.900"
    >
      <Head><title>Planos | XForce</title></Head>

      <Navbar />

      <Heading color="red.600" fontSize="3xl" fontWeight="bold" mt="7rem" mb="1rem">
        Conheça nossos Planos
      </Heading>

      <Text w={["80%", "35rem"]} color="gray.400" fontSize="md" fontWeight="thin" mb="3rem" textAlign="center">
        É hora de se mexer, bora pra XForce mais perto de você.
        Treine o quanto quiser com nossos planos.
        Todos oferecem áreas de musculação, aeróbico, aulas especiais e de ginástica.
      </Text>

      <Stack
        w="100vw"
        h="auto"
        mb="6rem"
        align="center"
        justify="center"
        spacing="10"
        direction={["column", "row"]}
      >
        <VStack
          w="22rem"
          height="auto"
          bg="gray.800"
          py="5"
          borderBottom="2px"
          borderBottomColor="red.600"
          borderTopColor="red.600"
          _hover={{
            borderTop: '2px',
            borderTopColor: 'red.600',
            transition: '0.2s',
          }}
          position="relative"
          align="center"
        >
          <Text
            position="absolute"
            top="0px"
            bg="gray.50"
            p="3"
            px="6"
            fontWeight="bold"
            borderBottomRadius="full"
            mt="-3"
            borderTop="2px"
            borderTopColor="red.600"
          >
            RECOMENDADO
          </Text>
          <VStack borderTopRadius="3xl" w="100%" h="9rem" bg="red.600" justify="center" align="center">
            <Heading textAlign="center" fontSize="2xl" fontWeight="semibold">
              Plano <br />
              <Text fontWeight="bold" fontSize="3xl">Monster</Text>
            </Heading>
            <Text>a partir de R$ 109,00</Text>
          </VStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Acesso ilimitado a todas áreas da academia</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Aulas de Ginástica</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Área e aulas de KickBox</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Área de musculação e aeróbicos</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Leve amigos para treinar com você</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Cadeira de messagem pós treino</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Sem taxa de cancelamento</Text>
          </HStack>
          <Button
            w="80%"
            bg="red.600"
            borderRadius="lg"
            fontWeight="bold"
          >
            APROVEITE
          </Button>
        </VStack>
        <VStack
          w="22rem"
          height="auto"
          bg="gray.800"
          py="5"
          borderBottom="2px"
          borderBottomColor="red.600"
          borderTopColor="red.600"
          _hover={{
            borderTop: '2px',
            borderTopColor: 'red.600',
            transition: '0.2s',
          }}
          position="relative"
          align="center"
        >
          <VStack borderTopRadius="3xl" w="100%" h="9rem" bg="red.600" justify="center" align="center">
            <Heading textAlign="center" fontSize="2xl" fontWeight="semibold">
              Plano <br />
              <Text fontWeight="bold" fontSize="3xl">Force</Text>
            </Heading>
            <Text>a partir de R$ 79,00</Text>
          </VStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Acesso ilimitado a todas áreas da academia</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Aulas de Ginástica</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Área e aulas de KickBox</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Área de musculação e aeróbicos</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={BiXCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Leve amigos para treinar com você</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={BiXCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Cadeira de messagem pós treino</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={BiXCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Sem taxa de cancelamento</Text>
          </HStack>
          <Button
            w="80%"
            bg="red.600"
            borderRadius="lg"
            fontWeight="bold"
          >
            APROVEITE
          </Button>
        </VStack>
        <VStack
          w="22rem"
          height="auto"
          bg="gray.800"
          py="5"
          borderBottom="2px"
          borderBottomColor="red.600"
          borderTopColor="red.600"
          _hover={{
            borderTop: '2px',
            borderTopColor: 'red.600',
            transition: '0.2s',
          }}
          position="relative"
          align="center"
        >
          <VStack borderTopRadius="3xl" w="100%" h="9rem" bg="red.600" justify="center" align="center">
            <Heading textAlign="center" fontSize="2xl" fontWeight="semibold">
              Plano <br />
              <Text fontWeight="bold" fontSize="3xl">Básico</Text>
            </Heading>
            <Text>a partir de R$ 33,00</Text>
          </VStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Acesso ilimitado a todas áreas da academia</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Aulas de Ginástica</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={BiXCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Área e aulas de KickBox</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={FaRegCheckCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Área de musculação e aeróbicos</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={BiXCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Leve amigos para treinar com você</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={BiXCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Cadeira de messagem pós treino</Text>
          </HStack>
          <HStack w="100%" px="8" py="3" spacing="4">
            <Icon as={BiXCircle} color="red.600" fontSize="lg" />
            <Text color="gray.50">Sem taxa de cancelamento</Text>
          </HStack>
          <Button
            w="80%"
            bg="red.600"
            borderRadius="lg"
            fontWeight="bold"
          >
            APROVEITE
          </Button>
        </VStack>
      </Stack>

      <Footer />
    </Flex>
  );
}