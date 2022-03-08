import { Box, Button, Flex, Heading, HStack, Img, Stack, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";

export default function Blog() {
  return (
    <Flex
      w="100vw"
      h="auto"
      justify="flex-start"
      align="center"
      direction="column"
      bg="gray.900"
    >
      <Head><title>Blog | XForce</title></Head>

      <Navbar />

      <Banner src="home-bg-2.jpg" />

      <VStack
        w="100vw"
        h="auto"
        mt="5rem"
        mb="5rem"
        align="center"
        justify="center"
        spacing="10"
      >
        <Heading color="red.600" fontSize="3xl" fontWeight="semibold">Posts</Heading>

        <Stack
          spacing={["8", "4"]}
          w={["80%", "80rem"]}
          direction={["column", "row"]}
          flexWrap="wrap"
          align="center"
          justify="center"
        >
          <Box w="22rem" h="29rem" bg="gray.800">
            <Img
              w="100%"
              h="15rem"
              objectFit="cover"
              src="/images/blog-1.jpg"
            />
            <VStack p="4" align="flex-start" justify="space-between">
              <Text color="red.600" fontSize="md" fontWeight="thin">
                Usuário | 21d May, 2021
              </Text>
              <Text color="red.50" fontSize="lg" fontWeight="semibold">
                Máscara na academia
              </Text>
              <Text color="gray.400" fontSize="md" fontWeight="thin">
                Depois de um período de adaptação, é possível manter o bom ritmo de treino
              </Text>
              <Button
                bg="red.600"
                color="red.50"
                fontSize="md"
                py="4"
                px="6"
                fontWeight="semibold"
                _hover={{
                  color: 'red.600',
                  bg: 'red.50',
                }}
              >
                Ver Mais
              </Button>
            </VStack>
          </Box>

          <Box w="22rem" h="29rem" bg="gray.800">
            <Img
              w="100%"
              h="15rem"
              objectFit="cover"
              src="/images/blog-2.jpg"
            />
            <VStack p="4" align="flex-start" justify="space-between">
              <Text color="red.600" fontSize="md" fontWeight="thin">
                Usuário | 21d May, 2021
              </Text>
              <Text color="red.50" fontSize="lg" fontWeight="semibold">
                O papel dos pais para educar crianças
              </Text>
              <Text color="gray.400" fontSize="md" fontWeight="thin">
                Como ensinar os filhos sobre alimentação saudável e prática de exercícios? Comece dando um bom exemplo
              </Text>
              <Button
                bg="red.600"
                color="red.50"
                fontSize="md"
                py="4"
                px="6"
                fontWeight="semibold"
                _hover={{
                  color: 'red.600',
                  bg: 'red.50',
                }}
              >
                Ver Mais
              </Button>
            </VStack>
          </Box>

          <Box w="22rem" h="29rem" bg="gray.800">
            <Img
              w="100%"
              h="15rem"
              objectFit="cover"
              src="/images/blog-3.jpg"
            />
            <VStack p="4" align="flex-start" justify="space-between">
              <Text color="red.600" fontSize="md" fontWeight="thin">
                Usuário | 21d May, 2021
              </Text>
              <Text color="red.50" fontSize="lg" fontWeight="semibold">
                Benefícios da meditação e como começar
              </Text>
              <Text color="gray.400" fontSize="md" fontWeight="thin">
                Ter um momento para prestar atenção em você e nas sensações do seu corpo.
              </Text>
              <Button
                bg="red.600"
                color="red.50"
                fontSize="md"
                py="4"
                px="6"
                fontWeight="semibold"
                _hover={{
                  color: 'red.600',
                  bg: 'red.50',
                }}
              >
                Ver Mais
              </Button>
            </VStack>
          </Box>
        </Stack>
      </VStack>

      <Footer />
    </Flex>
  );
}