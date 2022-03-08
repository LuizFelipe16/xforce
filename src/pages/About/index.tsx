import { Box, Flex, Heading, HStack, Img, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCheck, FaQuoteRight } from 'react-icons/fa';
import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import styles from './styles.module.scss';

export default function About() {
  return (
    <Flex
      w="100vw"
      h="auto"
      justify="flex-start"
      align="center"
      direction="column"
      bg="gray.900"
    >
      <Head><title>Sobre | XForce</title></Head>

      <Navbar />

      <Stack
        w="100vw"
        h="auto"
        mt="8rem"
        align="center"
        justify="center"
        spacing="10"
        direction={["column-reverse", "row"]}
      >
        <Img
          w={["90%", "26rem"]}
          h="30rem"
          objectFit="cover"
          src="/images/about-img.jpg"
          borderBottomEndRadius="10rem"
          borderTopLeftRadius="10rem"
          transition="0.2s"
          _hover={{
            transformBox: '1.1'
          }}
        />

        <VStack
          w={["90%", "35rem"]}
          h="30rem"
          align="flex-start"
          px="4"
        // borderWidth="1px"
        // borderColor="red.600"
        >
          <Heading color="red.600" fontSize="2xl" fontWeight="normal">Sobre</Heading>
          <Text color="red.50" fontSize="4xl" fontWeight="semibold">
            Cada dia é uma chance de
            <br />
            Tornar-se Melhor
          </Text>
          <Text color="gray.400" fontSize="md" fontWeight="thin">
            Se prepare e se torne a melhor versão de si mesmo com nossos equipamentos e nossos
            métodos únicos para disparar sua evolução.
          </Text>
          <br />
          <Flex w="100%" align="center" justify="space-between">
            <VStack w="49%" spacing="6">
              <Box w="100%">
                <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="semibold">
                  <FaCheck />
                  <Text color="red.50">Corpo e Mente</Text>
                </HStack>
                <Text color="gray.400" fontSize="sm" fontWeight="thin">
                  Para elevar sua versão, preparamos seu corpo e sua mente.
                </Text>
              </Box>
              <Box w="100%">
                <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="semibold">
                  <FaCheck />
                  <Text color="red.50">Equipamentos</Text>
                </HStack>
                <Text color="gray.400" fontSize="sm" fontWeight="thin">
                  Sempre atualizados para suas melhores versões.
                </Text>
              </Box>
            </VStack>
            <VStack w="49%" spacing="6">
              <Box w="100%">
                <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="semibold">
                  <FaCheck />
                  <Text color="red.50">Atendimento</Text>
                </HStack>
                <Text color="gray.400" fontSize="sm" fontWeight="thin">
                  Se sinta bem no treino com a qualidade Top de nossos Trainers.
                </Text>
              </Box>
              <Box w="100%">
                <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="semibold">
                  <FaCheck />
                  <Text color="red.50">Venha</Text>
                </HStack>
                <Text color="gray.400" fontSize="sm" fontWeight="thin">
                  Começe seu plano hoje mesmo, é rapído e fácil.
                </Text>
              </Box>
            </VStack>
          </Flex>
        </VStack>
      </Stack>

      <br />

      <VStack
        w="100vw"
        align="center"
        justify="center"
        spacing="10"
        mb="24"
      >
        <Heading color="red.600" fontSize="3xl" fontWeight="semibold">Trainers</Heading>

        <Stack
          direction={["column", "row"]}
          spacing="4"
          w={["100%", "60rem"]}
          flexWrap="wrap"
          align="center"
          justify="center"
        >
          <div className={styles.card}>
            <div>
              <img src="/images/trainer-1.jpg" alt="Trainer" />
            </div>
            <h1>Expert</h1>
            <p>Cam</p>
          </div>
          <div className={styles.card}>
            <div>
              <img src="/images/trainer-2.jpg" alt="Trainer" />
            </div>
            <h1>Expert</h1>
            <p>Mila</p>
          </div>
          <div className={styles.card}>
            <div>
              <img src="/images/trainer-3.jpg" alt="Trainer" />
            </div>
            <h1>Expert</h1>
            <p>Mitchel</p>
          </div>
          {/* <Box w="18rem" h="25rem" bg="gray.800">
            <Img
              w="100%"
              h="20rem"
              objectFit="cover"
              src="/images/trainer-3.jpg"
            />
            <Text ml="4" mt="2" color="red.600" fontSize="lg" fontWeight="thin">Expert</Text>
            <Text ml="4" color="red.50" fontSize="2xl" fontWeight="semibold">Mitchel</Text>
          </Box> */}
        </Stack>
      </VStack>

      <Footer />
    </Flex>
  );
}