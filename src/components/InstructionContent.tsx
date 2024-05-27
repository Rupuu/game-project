import { Box, Text, Image, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  videoSource: string;
}

function InstructionContent({ title, children, videoSource }: Props) {
  return (
    <Box
      margin={4}
      p={4}
      minW={{ base: "220px", md: "300px", lg: "400px" }}
      maxW={{ base: "230px", md: "400px", lg: "600px" }}
      borderWidth="2px"
      borderRadius="lg"
    >
      <Text color={"#0099ff"} fontSize="xl">
        {title}
      </Text>
      <Box mt={2}>
        <Image src={videoSource} alt="Video Placeholder" />
      </Box>
      <Box mt={2}>
        <UnorderedList>{children}</UnorderedList>
      </Box>
    </Box>
  );
}

export default InstructionContent;
