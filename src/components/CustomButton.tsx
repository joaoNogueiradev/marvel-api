import { Button as ChakraButton } from "@chakra-ui/react";
import Link from "next/link";

export type ButtonProps = {
  buttonTitle: string;
  href: string;
  heroId: number;
};

const CustomButton = ({ buttonTitle, href, heroId }: ButtonProps) => {
  return (
    <Link href={`/${href}/${heroId}`}>
      <ChakraButton>{buttonTitle}</ChakraButton>
    </Link>
  );
};

export default CustomButton;
