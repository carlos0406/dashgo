import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/form/Input'
export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input inputName="email" label="E-mail" type="email" />
          <Input inputName="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" mt="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
