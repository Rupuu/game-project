import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/RedloryLogo-Small.webp";

const Navbar = () => {
  return (
    <HStack borderTop="0px" borderBottom="0px" borderWidth="10px">
      <Image src={logo} boxSize="100px"></Image>
      <Text>Redlory</Text>
    </HStack>
  );
};

export default Navbar;
