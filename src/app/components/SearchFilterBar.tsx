import { Input } from "@chakra-ui/react";

interface SearchFilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchFilterBarProps) {
  return ( 
    <Input
      placeholder="Search items..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      width="60%"
      size="lg"
    />  
  );
}
