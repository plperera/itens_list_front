import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function ItemSkeleton() {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="6"
      bg="gray.50"
      textAlign="center"
    >
      <SkeletonCircle size="100px" />
      <SkeletonText mt="4" noOfLines={3} spacing="4" />
    </Box>
  );
}
