import { useState } from "react";
import { Box, Button, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";
import InstructionContent from "../components/InstructionContent";

// Reusable component for displaying instructions
function HelpPage() {
  const [selectedFuel, setSelectedFuel] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  return (
    <VStack spacing={4}>
      <SimpleGrid columns={3} spacing={10}>
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

      {selectedFuel && (
        <>
          <InstructionContent
            selectedOption={selectedFuel}
            text="This section will include video 
      instructions and detailed steps on
       how to use the machine with the selected fuel and payment method.
        The information provided here is just a placeholder.
         Replace this text and image with actual instructional content."
            videoSource="https://via.placeholder.com/150"
          />
          <Box mt={4}>
            <Text fontSize="xl">Select Payment Method for {selectedFuel}</Text>
            <SimpleGrid columns={3} spacing={10}>
              <Button
                colorScheme="green"
                onClick={() => setSelectedPayment("Credit Card")}
              >
                Credit Card
              </Button>
              <Button
                colorScheme="green"
                onClick={() => setSelectedPayment("Debit Card")}
              >
                Debit Card
              </Button>
              <Button
                colorScheme="green"
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
          text="This section will include video 
          instructions and detailed steps on
           how to use the machine with the selected fuel and payment method.
            The information provided here is just a placeholder.
             Replace this text and image with actual instructional content."
          videoSource="https://via.placeholder.com/150"
        />
      )}
    </VStack>
  );
}

export default HelpPage;
