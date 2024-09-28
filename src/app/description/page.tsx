"use client";

import { HeroCardProps } from "@/components/heroCard";
import Structure from "@/components/structure";
import { Spinner, Text, Image } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailedPage = () => {
  const [selectedHero, setSelectedHero] = useState<HeroCardProps>();

  useEffect(() => {
    const storedHero = localStorage.getItem("selectedHero");
    if (storedHero) {
      setSelectedHero(JSON.parse(storedHero));
    }
  }, []);

  if (!selectedHero) return <Spinner />;

  return (
    <Structure title="Detailed Page">
      <Image
        src={selectedHero.characterImage}
        alt={selectedHero.characterName}
      />
      <Text>{selectedHero.id}</Text>
    </Structure>
  );
};

export default DetailedPage;
