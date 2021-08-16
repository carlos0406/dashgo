import { Flex, Text, Box, Avatar } from '@chakra-ui/react'
export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Carlos Henrique</Text>
        <Text color="gray.300" fontSize="small">
          carlos.andrade.henrique1@outlook.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Carlos Henrique"
        src="https://github.com/carlos0406.png"
      ></Avatar>
    </Flex>
  )
}
