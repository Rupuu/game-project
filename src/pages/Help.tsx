import { useState } from "react";
import { Box, Button, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

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
            setSelectedPayment(null);
          }}
        >
          Gas
        </Button>
        <Button
          colorScheme="blue"
          onClick={() => {
            setSelectedFuel("Diesel");
            setSelectedPayment(null);
          }}
        >
          Diesel
        </Button>
        <Button
          colorScheme="blue"
          onClick={() => {
            setSelectedFuel("E85");
            setSelectedPayment(null);
          }}
        >
          E85
        </Button>
      </SimpleGrid>

      {selectedFuel && (
        <Box mt={4}>
          <Text fontSize="xl">Select Payment Method for {selectedFuel}</Text>
          <SimpleGrid columns={3} spacing={5}>
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
      )}

      {selectedPayment && (
        <Box mt={4}>
          <Text fontSize="xl">
            How to use {selectedFuel} with {selectedPayment}
          </Text>
          <Image
            src="https://via.placeholder.com/150"
            alt="Video Placeholder"
          />
          <Text mt={2}>
            This section will include video instructions and detailed steps on
            how to use the machine with the selected fuel and payment method.
            The information provided here is just a placeholder. Replace this
            text and image with actual instructional content.
          </Text>
        </Box>
      )}
    </VStack>
  );
}

export default HelpPage;
