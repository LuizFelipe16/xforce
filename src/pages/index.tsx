import Head from 'next/head';
import { Avatar, Box, Button, Flex, Heading, HStack, Icon, Img, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { FaCheck, FaQuoteRight } from 'react-icons/fa';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Banner } from '../components/Banner';
import Link from 'next/link';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      w="100vw"
      h="auto"
      justify="flex-start"
      align="center"
      direction="column"
      bg="gray.900"
    >
      <Head><title>Home | XForce</title></Head>
      <Navbar />
      <Banner src="home-bg-3.jpg" />

      <VStack
        w="100vw"
        h="auto"
        minH="100vh"
        align="center"
        justify="center"
        spacing="10"
      >
        <Heading color="red.600" mt="14" fontSize="3xl" fontWeight="semibold">Nossa Academia</Heading>

        <Flex w={["100%", "70rem"]} align="center" justify="center" px="10" flexWrap="wrap" direction={['column', 'row']}>
          <VStack spacing="3" w={["100%", "20rem"]} h="17rem" p="6" bg="gray.300">
            <Img
              w="5rem"
              objectFit="cover"
              src="/images/icon-2.png"
            />
            <Text color="red.600" fontSize="lg" fontWeight="semibold">Para Homens</Text>
            <Text textAlign="center" color="gray.900" fontSize="md" fontWeight="normal">
              Aumento de massa muscular acelerado com nossos equipamentos.
            </Text>
            <Link href="/Pricing" passHref>
              <Button
                bg="red.600"
                color="red.50"
                fontSize="md"
                fontWeight="normal"
                _hover={{
                  bg: 'gray.900',
                }}
              >
                Quero Começar
              </Button>
            </Link>
          </VStack>
          <Img
            w={["100%", "20rem"]}
            h="17rem"
            objectFit="cover"
            src="/images/f-img-2.jpg"
          />
          <VStack spacing="3" w={["100%", "20rem"]} h="17rem" p="6" bg="gray.300">
            <Img
              w="5rem"
              objectFit="cover"
              src="/images/icon-3.png"
            />
            <Text color="red.600" fontSize="lg" fontWeight="semibold">Para Mulheres</Text>
            <Text textAlign="center" color="gray.900" fontSize="md" fontWeight="normal">
              Prepara para você emagrecer, se fortalecer e mais saúde.
            </Text>
            <Link href="/Pricing" passHref>
              <Button
                bg="red.600"
                color="red.50"
                fontSize="md"
                fontWeight="normal"
                _hover={{
                  bg: 'gray.900',
                }}
              >
                Quero Começar
              </Button>
            </Link>
          </VStack>

          <Img
            w={["100%", "20rem"]}
            h="17rem"
            objectFit="cover"
            src="/images/f-img-1.jpg"
          />
          <VStack spacing="3" w={["100%", "20rem"]} h="17rem" p="6" bg="gray.300">
            <Img
              w="5rem"
              objectFit="cover"
              src="/images/icon-1.png"
            />
            <Text color="red.600" fontSize="lg" fontWeight="semibold">Para Todos</Text>
            <Text textAlign="center" color="gray.900" fontSize="md" fontWeight="normal">
              Que desejam aperfeiçoar corpo e mente para uma vida melhor.
            </Text>
            <Link href="/Pricing" passHref>
              <Button
                bg="red.600"
                color="red.50"
                fontSize="md"
                fontWeight="normal"
                _hover={{
                  bg: 'gray.900',
                }}
              >
                Quero Começar
              </Button>
            </Link>
          </VStack>
          <Img
            w={["100%", "20rem"]}
            h="17rem"
            objectFit="cover"
            src="/images/f-img-3.jpg"
          />
        </Flex>
      </VStack>

      <Stack
        w="100vw"
        h="auto"
        minH="100vh"
        mt="5rem"
        align="center"
        justify="center"
        spacing={["24", "10"]}
        direction={['column', 'row']}
        px={["10", "0"]}
      >
        <VStack
          w={["100%", "30rem"]}
          h="30rem"
          align={["center", "flex-start"]}
        >
          <Heading color="red.600" fontSize="2xl" fontWeight="normal">Preços</Heading>
          <Text textAlign={["center", "left"]} color="red.50" fontSize="4xl" fontWeight="semibold">
            Preço Acessível
            <br />
            Os melhores planos
          </Text>
          <Text textAlign={["center", "left"]} color="gray.400" fontSize="md" fontWeight="thin">
            É hora de se mexer, bora pra XForce mais perto de você.
            Treine o quanto quiser com nossos planos.
            Todos oferecem áreas de musculação, aeróbico, aulas especiais e de ginástica.
          </Text>
          <br />
          <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="thin">
            <FaCheck />
            <Text color="red.50">Bike inteligente</Text>
          </HStack>
          <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="thin">
            <FaCheck />
            <Text color="red.50">Hipertrofia</Text>
          </HStack>
          <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="thin">
            <FaCheck />
            <Text color="red.50">Cardio</Text>
          </HStack>
          <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="thin">
            <FaCheck />
            <Text color="red.50">Musculação</Text>
          </HStack>
          <HStack spacing="2" color="red.600" fontSize="lg" fontWeight="thin">
            <FaCheck />
            <Text color="red.50">Ginástica Funcional</Text>
          </HStack>
          <br />

          <Link href="/Pricing" passHref>
            <Button
              mt="4rem"

              bg="red.600"
              color="red.50"
              fontSize="md"
              py="4"
              px="8"
              fontWeight="normal"
              _hover={{
                color: 'red.600',
                bg: 'red.50',
              }}
            >
              Ver Planos
            </Button>
          </Link>
        </VStack>

        <Img
          w={["100%", "26rem"]}
          h="30rem"
          objectFit="cover"
          src="/images/trainer-4.jpg"
          borderBottomEndRadius="10rem"
          borderTopLeftRadius="10rem"
        />
      </Stack>

      <Box
        w="100vw"
        h="auto"
        minH="50vh"
        mt="5rem"
        bgClip="content-box"
        bgImage="/images/banner-bg.jpg"
        bgAttachment="fixed"
        objectFit="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        align="center"
        justify="center"
      >
        <VStack
          w="100%"
          h="100%"
          bg="#0a0a0ab2"
          align="center"
          justify="center"
          py="12"
        >
          <Text color="red.600" fontWeight="thin" fontSize="lg">Junte-se a nós Agora</Text>
          <Text color="red.50" fontWeight="semibold" fontSize="4xl">GANHE ATÉ 50% DE DESCONTO</Text>
          <Text w="50%" textAlign="center" color="gray.400" fontSize="md" fontWeight="thin">
            Tudo o que você precisa, Um ecossistema fitness que oferece mais liberdade na hora de treinar.
            Uma experiência completa para você cuidar da sua saúde onde quiser.
          </Text>
          <br />
          <Button
            bg="red.600"
            color="red.50"
            fontSize="md"
            py="4"
            px="6"
            fontWeight="normal"
            _hover={{
              color: 'red.600',
              bg: 'red.50',
            }}
          >
            Ter Desconto
          </Button>
        </VStack>
      </Box>

      <Stack
        w="100vw"
        h="auto"
        mt="5rem"
        mb="5rem"
        align="center"
        justify="center"
        spacing="10"
        direction={['column', 'row']}
      >
        <VStack align="flex-start" w="25rem">
          <Text color="red.600" fontWeight="thin" fontSize="lg">Junte-se a nós Agora</Text>
          <Text color="red.50" fontWeight="semibold" fontSize="4xl">O que Nossos Clientes Dizem</Text>
          <Text color="gray.400" fontSize="md" fontWeight="thin">
            Nossos clientes são incríveis. É por isso que nós acreditamos que o seu lugar também é aqui.
          </Text>
          <br />
          <Link href="/Blog" passHref>
            <Button
              bg="red.600"
              color="red.50"
              fontSize="md"
              py="4"
              px="6"
              fontWeight="normal"
              _hover={{
                color: 'red.600',
                bg: 'red.50',
              }}
            >
              Ver Blog
            </Button>
          </Link>
        </VStack>

        <VStack
          w={["90%", "23rem"]}
          spacing="6"
          p="5"
          bg="gray.800"
          borderRadius="lg"
          borderBottomRightRadius="8rem"
          position="relative"
        >
          <Text w="100%" textAlign="left" color="gray.200" fontSize="md" fontWeight="thin">
            A qualidade do serviço é, de forma geral, realmente superior aos concorrentes do mercado.

            Além disso, o suporte é excelente! Estou muito satisfeito. Vocês estão de parabéns em tudo!!! Obrigado e um grande abraço :)
          </Text>
          <HStack w="100%">
            <HStack spacing="4">
              <Avatar src="/images/pic-1.png" />

              <VStack align="flex-start" justify="flex-start">
                <Text p="0" color="gray.100" fontWeight="semibold" fontSize="2xl">
                  Marcos
                  <Text p="0" color="red.600" fontWeight="thin" fontSize="md">Designer</Text>
                </Text>
              </VStack>
            </HStack>

            <Icon as={FaQuoteRight} fontSize="6xl" position="absolute" color="red.600" bottom="15px" right="15px" />
          </HStack>
        </VStack>

        <VStack
          w={["90%", "23rem"]}
          spacing="6"
          p="5"
          bg="gray.800"
          borderRadius="lg"
          borderBottomRightRadius="8rem"
          position="relative"
        >
          <Text w="100%" textAlign="left" color="gray.200" fontSize="md" fontWeight="thin">
            Desde o começo o atendimento já foi diferente do padrão das outras empresas, onde o atendimento parece ser feito por pessoas robotizadas que mal te escutam.
          </Text>
          <HStack w="100%">
            <HStack spacing="4">
              <Avatar src="/images/pic-2.png" />

              <VStack align="flex-start" justify="flex-start">
                <Text p="0" color="gray.100" fontWeight="semibold" fontSize="2xl">
                  Mira
                  <Text p="0" color="red.600" fontWeight="thin" fontSize="md">Admin</Text>
                </Text>
              </VStack>
            </HStack>

            <Icon as={FaQuoteRight} fontSize="6xl" position="absolute" color="red.600" bottom="15px" right="15px" />
          </HStack>
        </VStack>

      </Stack>

      <Footer />
    </Flex>
  );
}