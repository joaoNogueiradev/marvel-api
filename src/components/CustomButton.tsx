"use client";

import { Button as ChakraButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export type ButtonProps = {
  buttonTitle: string;
  href: string;
  state?: Record<string, any>;
};

const CustomButton = ({ buttonTitle, href, state }: ButtonProps) => {
  const router = useRouter();
  const handleNextPage = () => {
    localStorage.setItem("selectedHero", JSON.stringify(state));
    router.push(href);
  };

  return <ChakraButton onClick={handleNextPage}>{buttonTitle}</ChakraButton>;
};

export default CustomButton;
