"use client";

import React, { useState, useEffect } from "react";
import { Item, fakeFetchItens } from "../services/itemService";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import SearchFilterBar from "./SearchFilterBar";
import ItemSkeleton from "./ItemSkeleton";
import CategorySelector from "./CategorySelector";
import FilterSelect from "./FilterSelect";

export default function ItemList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(""); // Aqui controlamos o filtro por categoria
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

  const exteriorOptions = [
    { name: "Factory New", value: "factoryNew", color: "#397539"},
    { name: "Minimal Wear", value: "minimalWear", color: "#488b47"},
    { name: "Field Tested", value: "fieldTested", color: "#f1ac4d"},
    { name: "Well Worn", value: "wellWorn", color: "#b7625f"},
    { name: "Battle Scarred", value: "battleScarred", color: "#993a38"},
  ]

  return (
    <Box padding="10vh 7vw">

      <CategorySelector selectedCategory={filter} setSelectedCategory={setFilter} />

      <Flex justify="space-between" mb={4}>
        <SearchFilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <FilterSelect
          placeholder={"All Exteriors"}
          options={exteriorOptions}
          filter={filter}
          setFilter={setFilter}
        />

        
      {/* 
        <div>
          <select>desgaste</select>
          <select>preço</select>
          <select>float</select>
        </div> */}

      </Flex>

      

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
