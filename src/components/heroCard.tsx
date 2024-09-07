import { limitString } from '@/helpers/stringHelper'
import { Card, CardHeader, CardBody, CardFooter, Text, Image, Heading, Stack, Flex } from '@chakra-ui/react'

export type HeroCardProps = {
    characterName:string
    characterImage:string
    characterDescription:string

}

const HeroCard = ({characterDescription, characterImage, characterName}:HeroCardProps) => {

    const maxLength = 88

    return(
        <Card maxW='390px' maxH='289px'>
            <Image
            src={characterImage}
            alt={characterName}
            borderTopRadius={'lg'}
            />
            <CardBody>
                <Stack>
                    <Heading size='md'>{characterName}</Heading>
                    <Text>
                        {limitString({value:characterDescription, maxLength})}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}
 
export default HeroCard; 