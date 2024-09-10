import { Flex, Input, Select } from "@chakra-ui/react";

interface SearchFilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

export default function SearchFilterBar({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
}: SearchFilterBarProps) {
  return (
    <Flex justify="space-between" mb={4}>
      
      <Input
        placeholder="Search items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        width="60%"
        size="lg"
      />

      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="All Categories"
        width="20%"
        size="lg"
      >
        <option value="Rifle">Rifles</option>
        <option value="Pistol">Pistols</option>
        <option value="Sniper Rifle">Sniper Rifles</option>
      </Select>
    </Flex>
  );
}
