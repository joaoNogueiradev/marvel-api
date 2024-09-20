"use client";

import HeroComics from "@/components/heroComics";
import Structure from "@/components/structure";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Comics = () => {
  const router = useRouter();
  const { heroId } = router.query;

  return (
    <Structure title="Comics">
      <HeroComics heroId={Number(heroId)} />
    </Structure>
  );
};

export default Comics;
