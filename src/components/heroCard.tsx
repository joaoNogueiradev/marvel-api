import { limitString } from "@/helpers/stringHelper";
import { Card, CardBody, Image, Heading, Stack } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

export type HeroCardProps = {
  id: number;
  characterName: string;
  characterImage: string;
  characterDescription: string;
};

const HeroCard = ({
  id,
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
    <Card
      w={{
        base: "100%",
        lg: "360px",
      }}
      minH="289px"
      h={"auto"}
    >
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
          <CustomButton
            buttonTitle="Click to see full description"
            href="detailed"
            heroId={id}
          />
          <CustomButton
            buttonTitle="Click to see character comics!"
            href="comics"
            heroId={id}
          />
          {/* <Text>{formattedDescription}</Text> */}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HeroCard;
