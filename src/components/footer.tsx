import { Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return(
        <Flex justifyContent={'center'} alignItems={'center'} bg={'white'} py={'16px'} px={'250px'} width={'100%'}>
            <Text color={'black'} fontSize={'16px'} fontWeight={'600'}>{currentYear} - João Nogueira</Text>
        </Flex>
    )
}

export default Footer