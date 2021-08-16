import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { SearchBox } from './SearchBox'
import { Profile } from './Profile'
export function Header() {
  return (
    <Flex
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      as="header"
    >
      <Logo />
      <SearchBox />

      <NotificationNav />
      <Profile />
    </Flex>
  )
}
