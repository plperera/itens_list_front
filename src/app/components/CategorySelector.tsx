import React from "react";
import { Box } from "@chakra-ui/react";
import CategoryOption from "./CategoryOption";

import { GiButterflyKnife, GiPistolGun, GiM3GreaseGun, GiSawedOffShotgun, GiMinigun, GiNinjaHead } from "react-icons/gi";
import { PiBoxingGlove } from "react-icons/pi";
import { FaPersonRifle } from "react-icons/fa6";
import { RiEmojiStickerLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import { IconType } from "react-icons";

interface CategorySelectorProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

interface Category {
  name: string;
  icon: IconType;
}

export default function CategorySelector({ selectedCategory, setSelectedCategory }: CategorySelectorProps) {
  const categories: Category[] = [
    { name: "Knife", icon: GiButterflyKnife },
    { name: "Gloves", icon: PiBoxingGlove },
    { name: "Rifle", icon: FaPersonRifle },
    { name: "Pistol", icon: GiPistolGun },
    { name: "SMGs", icon: GiM3GreaseGun },
    { name: "Shotguns", icon: GiSawedOffShotgun },
    { name: "Machineguns", icon: GiMinigun },
    { name: "Stickers", icon: RiEmojiStickerLine },
    { name: "Agent", icon: GiNinjaHead },
    { name: "Others", icon: HiDotsHorizontal },
  ];

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" bg="background.700" p={4} borderRadius="md" border="2px solid" borderColor="border.500">
      {categories.map((category) => (
        <CategoryOption
          key={category.name}
          name={category.name}
          icon={category.icon}
          isSelected={selectedCategory === category.name}
          onSelect={setSelectedCategory}
        />
      ))}
    </Box>
  );
}
