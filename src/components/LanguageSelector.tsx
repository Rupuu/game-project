import { Button, Container } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const languages = [
  { id: "en", name: "English" },
  { id: "bg", name: "Bulgarian" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      {languages.map((lng) => {
        return (
          <Button
            key={lng.id}
            variant="outline"
            onClick={() => changeLanguage(lng.id)}
          >
            {lng.name}
          </Button>
        );
      })}
    </Container>
  );
};

export default LanguageSelector;
