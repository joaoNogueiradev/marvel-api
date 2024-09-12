import { limitString } from "@/helpers/stringHelper";
import { Card, CardBody, Text, Image, Heading, Stack } from "@chakra-ui/react";

export type HeroCardProps = {
  characterName: string;
  characterImage: string;
  characterDescription: string;
};

const HeroCard = ({
  characterDescription,
  characterImage,
  characterName,
}: HeroCardProps) => {
  const maxLength = 88;
  const formattedDescription =
    characterDescription.length > 0
      ? limitString({
          value: characterDescription,
          maxLength,
        })
      : "Not Available";

  return (
    <Card w="390px" minH="289px" h={"auto"}>
      <Image
        maxH={"195px"}
        objectFit={"cover"}
        src={characterImage}
        alt={characterName}
        borderTopRadius={"lg"}
      />
      <CardBody>
        <Stack>
          <Heading size="md">{characterName}</Heading>
          <Text>{formattedDescription}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HeroCard;
