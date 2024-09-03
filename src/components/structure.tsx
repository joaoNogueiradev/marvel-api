import { Flex } from "@chakra-ui/react"

export type StructureProps = {
    children:React.ReactNode
}

const Structure = ({children}:StructureProps) => {
    return(
        <Flex bgColor={'#f5f5f5'} minH={'100vh'}>
            <Flex width={'100%'} maxW={'1440px'} p={'16px'} margin={'0 auto'}>
                {children} 
            </Flex>
        </Flex>
    )
}

export default Structure