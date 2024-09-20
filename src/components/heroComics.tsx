import { Image, Text } from "@chakra-ui/react";

export type HeroComicsProps = {
  heroId: number;
};

const HeroComics = ({ heroId }: HeroComicsProps) => {
  return (
    <Text>{heroId}</Text>
    // <Image
    //   minH="450px"
    //   h={"auto"}
    //   maxH={"195px"}
    //   objectFit={"cover"}
    //   alt="adasdad"
    //   src={
    //     "https://sm.ign.com/t/ign_br/screenshot/b/bthe-aveng/bthe-avengers-vol-1-223bbrbrbdrawn-byb-ed-hanniganbrbrthe-no_ywp2.600.jpg"
    //   }
    // />
  );
};

export default HeroComics;
