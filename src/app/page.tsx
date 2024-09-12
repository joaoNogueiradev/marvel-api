"use client";

import HeroCard from "@/components/heroCard";
import Structure from "@/components/structure";
import { useMarvelActions } from "@/hooks/useMarvelActions";
import { Spinner } from "@chakra-ui/react";

const Page = () => {
  const { heroes, isLoading } = useMarvelActions();

  return (
    <Structure>
      {isLoading && <Spinner />}
      {heroes?.map((hero) => {
        return (
          <HeroCard
            key={hero.id}
            characterName={hero.name}
            characterImage={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            characterDescription={hero.description ?? "Not Available"} 
          />
        );
      })}
    </Structure>
  );
};

export default Page;
