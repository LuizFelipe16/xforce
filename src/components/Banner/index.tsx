import { Button, Flex, Text, VStack } from "@chakra-ui/react";

interface BannerProps {
  src: string;
}

export const Banner = ({ src }: BannerProps) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bgClip="content-box"
      bgImage={`"/images/${src}"`}
      bgAttachment="fixed"
      objectFit="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      borderBottomLeftRadius="20rem"
      align="center"
      justify="flex-start"
    >
      <VStack spacing="4" align="flex-start" ml={["10", "24"]}>
        <Text color="red.600" fontSize="2xl" fontWeight="bold">
          No Pain, No Game
        </Text>
        <Text color="red.50" fontSize={["3xl", "5xl"]}>
          Torne-se Mais Forte do
          <br />
          que suas Desculpas.
        </Text>
        <Button
          as="a"
          target="_blank"
          href="https://www.cybernegocio.com.br"
          bg="red.600"
          color="red.50"
          fontSize="xl"
          py="6"
          px="10"
          fontWeight="normal"
          _hover={{
            color: 'red.600',
            bg: 'red.50',
          }}
        >
          Entrar em Contato
        </Button>
      </VStack>
    </Flex>
  );
}