import { useState } from "react";
import {
  Box,
  Button,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import InstructionContent from "../components/InstructionContent";

// Reusable component for displaying instructions
function HelpPage() {
  const [selectedFuel, setSelectedFuel] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  return (
    <VStack spacing={4} borderWidth="10px" borderBottom="0px" p={10}>
      <Text textAlign="center" as="b" fontSize="3xl">
        Welcome to the help page!
      </Text>
      <Text textAlign="left" as="i" fontSize="lg" color="red">
        Here you can find all the information you need on how to use the device
      </Text>
      <Box mt={4}>
        <Text as="b" fontSize="xl">
          1. Choose one of the avaliable gas stations from 1-4.
        </Text>
        <Image
          mt={10}
          src="https://via.placeholder.com/150"
          alt="Video Placeholder"
        />
      </Box>
      <Box mt={4}>
        <Text as="b" fontSize="xl">
          2. Please select one of the following options:
        </Text>
        <SimpleGrid mt={10} columns={3} spacing={{ base: "10px", lg: "100px" }}>
          <Button
            colorScheme="blue"
            onClick={() => {
              setSelectedFuel("Gas");
            }}
          >
            Gas
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              setSelectedFuel("Diesel");
            }}
          >
            Diesel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              setSelectedFuel("E85");
            }}
          >
            E85
          </Button>
        </SimpleGrid>
      </Box>

      {selectedFuel && (
        <>
          <InstructionContent
            selectedOption={selectedFuel}
            videoSource="https://via.placeholder.com/150"
          >
            <ListItem>Do this</ListItem>
            <ListItem>Do that</ListItem>
            <ListItem>Do there</ListItem>
            <ListItem>Do where</ListItem>
          </InstructionContent>
          <Box mt={4}>
            <Text as="b" fontSize="xl">
              3. Select Payment Method for {selectedFuel}
            </Text>
            <SimpleGrid
              mt={10}
              columns={3}
              spacing={{ base: "10px", lg: "100px" }}
            >
              <Button
                minW="60px"
                maxW="120px"
                whiteSpace={"normal"}
                colorScheme="blue"
                onClick={() => setSelectedPayment("Credit Card")}
              >
                Credit Card
              </Button>
              <Button
                minW="60px"
                maxW="120px"
                whiteSpace={"normal"}
                colorScheme="blue"
                onClick={() => setSelectedPayment("Debit Card")}
              >
                Debit Card
              </Button>
              <Button
                minWidth="60px"
                maxW="120px"
                whiteSpace={"normal"}
                colorScheme="blue"
                onClick={() => setSelectedPayment("Cash")}
              >
                Cash
              </Button>
            </SimpleGrid>
          </Box>
        </>
      )}

      {selectedPayment && (
        <InstructionContent
          selectedOption={selectedPayment}
          videoSource="https://via.placeholder.com/150"
        >
          <ListItem>
            Do
            thisssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </ListItem>
        </InstructionContent>
      )}
    </VStack>
  );
}

export default HelpPage;
