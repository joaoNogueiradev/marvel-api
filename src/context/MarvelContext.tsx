"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import { IHeroService } from "@/models/IHeroService";
import { HeroService } from "@/services/heroService";

const MarvelContext = createContext<IHeroService | undefined>(undefined);

export const MarvelProvider = ({ children }: PropsWithChildren) => {
  const heroService = new HeroService();

  return (
    <MarvelContext.Provider value={heroService}>
      {children}
    </MarvelContext.Provider>
  );
};

export const useMarvelService = () => {
  const context = useContext(MarvelContext);
  if (!context)
    throw new Error("useMarvelService must be used within a MarvelProvider");

  return context;
};
