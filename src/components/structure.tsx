import { Flex } from "@chakra-ui/react"
import Header from "./header"

export type StructureProps = {
    children:React.ReactNode
}

const Structure = ({children}:StructureProps) => {
    return(
        <Flex flexDir={'column'} bgColor={'#f5f5f5'} minH={'100vh'}>
            <Header avatarImageUrl='https://github.com/joaonogueiradev.png' avatarName="João Nogueira"/>
            <Flex width={'100%'} maxW={'1440px'} p={'16px'} margin={'0 auto'}>
                {children} 
            </Flex>
        </Flex>
    )
}

export default Structure