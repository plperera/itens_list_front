import { Box, Text, Image, AspectRatio, Badge } from "@chakra-ui/react";
import { Item } from "../services/itemService";
import FloatBar from "./FloatBar";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  const floatValue = Number(item.float); // Exemplo de valor float
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="6"
      bg="gray.50"
      textAlign="center"
    >

      <AspectRatio ratio={3 / 2} maxW="100%">
        <Image src={item.image} alt={item.name} borderRadius="10px" />
      </AspectRatio>

      <Badge variant="factoryNew">Factory New</Badge>

      <Text fontSize="xl" mt={4}>
        {item.name}
      </Text>

      <FloatBar floatValue={floatValue} />

      <Text>R$ {(item.price / 100).toFixed(2)}</Text>
      <Text>Float: {item.float || "N/A"}</Text>
    </Box>
  );
}
