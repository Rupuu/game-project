import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/RedloryLogo-Small.webp";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <HStack
      borderX="10px solid #e2e8f0"
      paddingLeft={{ base: "20px", lg: "250px" }}
      paddingRight={{ base: "20px", lg: "250px" }}
    >
      <Image src={logo} boxSize={{ base: "90px", lg: "125px" }}></Image>
      <Text align="left">Redlory</Text>
      <Spacer />
      <LanguageSelector />
    </HStack>
  );
};

export default Navbar;
