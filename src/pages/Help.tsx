import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import InstructionContent from "../components/InstructionContent";

function HelpPage() {
  const [selectedFuel, setSelectedFuel] = useState<string | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const { t } = useTranslation();
  const { greeting, information, instructions }: any = t("helpPage");
  const { step1, step2, step3, cardInfo } = instructions;
  const { title, description1, description2 } = cardInfo;

  return (
    <VStack
      spacing={4}
      borderWidth="10px"
      borderBottom="0px"
      p={10}
      backgroundColor={"#f5f5fre"}
    >
      <SimpleGrid>
        <Heading
          textAlign="center"
          as="b"
          fontSize="3xl"
          m={{ base: "30px", md: "40px", lg: "50px" }}
        >
          {greeting}
        </Heading>
        <Text textAlign="left" as="i" fontSize="lg" color="red">
          {information}
        </Text>
        <Box mt={10}>
          <Text as="b" fontSize="xl">
            {step1.title}
          </Text>
          <Image
            mt={10}
            src="https://via.placeholder.com/150"
            alt="Video Placeholder"
          />
        </Box>
        <Box mt={10}>
          <Text as="b" fontSize="xl">
            {step2.title}
          </Text>
          <SimpleGrid
            mt={6}
            columns={3}
            spacing={{ base: "10px", lg: "100px" }}
          >
            <Button
              minW="60px"
              maxW="120px"
              colorScheme="blue"
              onClick={() => {
                setSelectedFuel("Gas");
              }}
            >
              Gas
            </Button>
            <Button
              minW="60px"
              maxW="120px"
              colorScheme="blue"
              onClick={() => {
                setSelectedFuel("Diesel");
              }}
            >
              Diesel
            </Button>
            <Button
              minW="60px"
              maxW="120px"
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
              title={title + " " + selectedFuel}
              videoSource="https://via.placeholder.com/150"
            >
              <ListItem>{description1.step1}</ListItem>
              <ListItem>{description1.step2}</ListItem>
              <ListItem>{description1.step3}</ListItem>
            </InstructionContent>
            <Box mt={10}>
              <Text as="b" fontSize="xl">
                {step3.title + " " + selectedFuel}
              </Text>
              <SimpleGrid
                mt={6}
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
            title={title + " " + selectedPayment}
            videoSource="https://via.placeholder.com/150"
          >
            <ListItem>{description2.step1}</ListItem>
            <ListItem>{description2.step2}</ListItem>
            <ListItem>{description2.step3}</ListItem>
          </InstructionContent>
        )}
      </SimpleGrid>
    </VStack>
  );
}

export default HelpPage;
