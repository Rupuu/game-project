import { Box, Text, Image } from "@chakra-ui/react";

interface Props {
  selectedOption: string;
  text: string;
  videoSource: string;
}

function InstructionContent({ selectedOption, text, videoSource }: Props) {
  return (
    <Box
      margin={4}
      shadow="1px 1px 4px 1px"
      p={4}
      minW="30px"
      maxW="500px"
      borderWidth="2px"
      borderRadius="lg"
    >
      <Text fontSize="xl">How to use {selectedOption}</Text>
      <Box mt={2}>
        <Image src={videoSource} alt="Video Placeholder" />
      </Box>
      <Box mt={2}>
        <Text>{text}</Text>
      </Box>
    </Box>
  );
}

export default InstructionContent;
