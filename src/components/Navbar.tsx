import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/RedloryLogo-Small.webp";

const Navbar = () => {
  return (
    <HStack padding="2px">
      <Image src={logo} boxSize="60px"></Image>
      <Text>Redlory</Text>
    </HStack>
  );
};

export default Navbar;
