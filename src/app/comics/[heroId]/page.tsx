"use client";

import HeroComics from "@/components/heroComics";
import Structure from "@/components/structure";
import { ComicService } from "@/services/comicService";
import { Text } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";

const Comics = () => {
  const router = useParams();
  const heroId = Number(router.heroId);
  const comicService = new ComicService();
  comicService.fetchComicsByHeroId(heroId).then((response) => {
    console.log(response);
  });

  return (
    <Structure title="Comics">
      <Text>adadsadada</Text>
      {/* <HeroComics heroId={Number(heroId)} /> */}
    </Structure>
  );
};

export default Comics;
