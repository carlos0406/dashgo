import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
interface InputProps extends ChakraInputProps {
  inputName: string
  label?: string
}
export function Input({ inputName, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={inputName}>{label}</FormLabel>}
      <ChakraInput
        id={inputName}
        {...rest}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
      />
    </FormControl>
  )
}
