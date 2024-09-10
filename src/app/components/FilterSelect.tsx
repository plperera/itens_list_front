import { Select } from "@chakra-ui/react";

interface SearchFilterBarProps {
  filter: string;
  setFilter: (filter: string) => void;
  options: {
    name: string;
    value: string;
    color?: string;
  }[];
  placeholder: string;
}

export default function FilterSelect({
  filter,
  setFilter,
  options,
  placeholder,
}: SearchFilterBarProps) {
  return (
    <Select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder={placeholder}
      width="15%"
      size="lg"
      variant="filled"
      bg="background.300"
      fontWeight={!!filter ? "700" : "500"}
      color={!!filter ? filter : "white"}
      _hover={{ bg: "background.300" }}
      _focus={{ bg: "background.300", borderColor: "brand.900", }}
      iconColor="white"
      sx={{
        '> :first-child': {
          color: "white"
        },
        option: {
          backgroundColor: "#393939"
        },
      }}
    >
      {options.map((e) => (
        <option value={e.value} key={e.value} style={{ color: e.color || "white", fontWeight: 700 }}>
          {e.name}
        </option>
      ))}
    </Select>
  );
}
