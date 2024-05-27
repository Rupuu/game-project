import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const languages = [
  { id: "bg", name: "Bulgarian" },
  { id: "en", name: "English" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const bulgarian = languages[0].id;
  const english = languages[1].id;

  return (
    <HStack>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {i18n.language === bulgarian ? languages[0].name : languages[1].name}
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              if (i18n.language === bulgarian) {
                changeLanguage(english);
              } else {
                changeLanguage(bulgarian);
              }
            }}
          >
            {i18n.language === bulgarian
              ? languages[1].name
              : languages[0].name}
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default LanguageSelector;
