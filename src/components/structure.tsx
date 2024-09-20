import { Flex, Text } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";

export type StructureProps = {
  children: React.ReactNode;
  title: string;
};

const Structure = ({ children, title }: StructureProps) => {
  return (
    <Flex
      justifyContent={"space-between"}
      flexDir={"column"}
      bgColor={"#f5f5f5"}
      minH={"100vh"}
    >
      <Flex flexDir={"column"} w={"100%"}>
        <Header
          avatarImageUrl="https://github.com/joaonogueiradev.png"
          avatarName="João Nogueira"
        />
        <Flex textAlign={"left"} p={"8px"} flex={1}>
          <Text
            w={"100%"}
            fontWeight={"bold"}
            fontSize={"24px"}
            p={{
              base: "0",
              md: "0 242px",
            }}
          >
            {title}
          </Text>
        </Flex>
        <Flex
          gap={"50px"}
          flexWrap={"wrap"}
          width={"100%"}
          maxW={"1440px"}
          p={"16px"}
          margin={"0 auto"}
        >
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Structure;
