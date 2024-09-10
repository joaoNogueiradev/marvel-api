import { limitString } from '@/helpers/stringHelper'
import { Card, CardBody, Text, Image, Heading, Stack } from '@chakra-ui/react'

export type HeroCardProps = {
    characterName:string
    characterImage:string
    characterDescription:string

}

const HeroCard = ({characterDescription, characterImage, characterName}:HeroCardProps) => {

    const maxLength = 88

    return(
        <Card maxW='390px' minH='289px' h={'auto'}>
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