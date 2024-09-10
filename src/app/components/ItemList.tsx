"use client";

import React, { useState, useEffect } from "react";
import { Item, fakeFetchItens } from "../services/itemService";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import SearchFilterBar from "./SearchFilterBar";
import ItemSkeleton from "./ItemSkeleton";


export default function ItemList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedItems = await fakeFetchItens();
        setItems(fetchedItems);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "" || item.category === filter)
    );
  });

  return (
    <Box padding="10vh 10vw">
      <SearchFilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
        {loading
          ? Array(6)
              .fill("")
              .map((_, index) => <ItemSkeleton key={index} />)
          : filteredItems.length > 0
          ? filteredItems.map((item) => <ItemCard key={item.id} item={item} />)
          : (
            <Text>No items found.</Text>
          )}
      </SimpleGrid>
    </Box>
  );
}
