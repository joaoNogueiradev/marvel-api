import { Avatar, Flex, Input, Text } from "@chakra-ui/react"

export type HeaderProps = {
    avatarName:string
    avatarImageUrl:string
}

const Header = ({avatarImageUrl, avatarName}:HeaderProps) => {
    return(
        <Flex justifyContent={'space-between'} alignItems={'center'} bg={'white'} py={'16px'} px={'250px'} width={'100%'}>
            <Text color={'#8d8d99'} fontSize={'18px'} fontWeight={'600'}>Home</Text>
            <Input color={'#3d3d3d'} fontSize={'16px'} border={'none'} backgroundColor={'#f5f5f5'} p={'16px'} placeholder="Search for a character..." h={'50px'} width={'720px'}/>
            <Avatar src={avatarImageUrl} name={avatarName}/>
        </Flex>
    )
}

export default Header