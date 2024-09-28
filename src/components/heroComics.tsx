import { Image, Text } from "@chakra-ui/react";

export type HeroComicsProps = {
  comicImage: string;
  comicName: string;
};

const HeroComics = ({ comicName, comicImage }: HeroComicsProps) => {
  return (
    <Image
      minH="450px"
      h={"auto"}
      maxH={"195px"}
      objectFit={"cover"}
      alt={comicName}
      src={comicImage}
    />
  );
};

export default HeroComics;
