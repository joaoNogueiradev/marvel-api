import { Flex, Text } from "@chakra-ui/react"
import Header from "./header"
import Footer from "./footer"

export type StructureProps = {
    children:React.ReactNode
}

const Structure = ({children}:StructureProps) => {
    return(
        <Flex justifyContent={'space-between'} flexDir={'column'} bgColor={'#f5f5f5'} minH={'100vh'}>
            <Flex flexDir={'column'} w={'100%'}>
                <Header avatarImageUrl='https://github.com/joaonogueiradev.png' avatarName="João Nogueira"/>
                <Text fontWeight={'bold'} fontSize={'24px'} m={'26px 1165px 10px 250px'}>All Characters</Text>
                <Flex width={'100%'} maxW={'1440px'} p={'16px'} margin={'0 auto'}>
                    {children} 
                </Flex>
            </Flex>
            <Footer />
        </Flex>
    )
}

export default Structure