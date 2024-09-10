import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface CategoryOptionProps {
  name: string;
  icon: IconType;
  isSelected: boolean;
  onSelect: (name: string) => void;
}

const CategoryOption: React.FC<CategoryOptionProps> = ({ name, icon, isSelected, onSelect }) => {
  return (
    <Box
      textAlign="center"
      width="125px"
      cursor="pointer"
      onClick={() => onSelect(name)}
      bg={isSelected ? "background.300" : "transparent"}
      border="3px solid transparent"
      borderColor={isSelected ? "brand.900" : "transparent"}
      p={3}
      borderRadius="md"
      _hover={{ bg: "background.300" }}
    >
      <Icon
        aria-label={name}
        boxSize="24px"
        as={icon}
        size="lg"
        color="white"
      />
      <Text color="white" fontSize={"16px"}>{name}</Text>
    </Box>
  );
};

export default CategoryOption;
