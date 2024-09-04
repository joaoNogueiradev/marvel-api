import { Card, CardHeader, CardBody, CardFooter, Text, Image, Heading, Stack } from '@chakra-ui/react'

export type HeroCardProps = {
    characterName:string
    characterImage:string
    characterDescription:string

}

const HeroCard = ({characterDescription, characterImage, characterName}:HeroCardProps) => {
    return(
        <Card maxW='sm'>
            <CardBody>
                <Image
                src={characterImage}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{characterName}</Heading>
                    <Text>
                        {characterDescription}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}
 
export default HeroCard; 