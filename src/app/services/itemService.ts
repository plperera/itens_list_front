import api from "./api";
import { fakeItems } from "./fakeItemsData";

export interface Item {
  id: string;
  name: string;
  image: string;
  category: string;
  float?: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export const fakeFetchItens = async (): Promise<Item[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return fakeItems;
  } catch (error) {
    console.error("Erro ao carregar dados fake:", error);
    throw error;
  }
};

export const fetchItens = async (): Promise<Item[]> => {
  try {
    const response = await api.get<Item[]>("/item/all");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar itens:", error);
    throw error;
  }
};

export const fetchItemById = async (id: string): Promise<Item> => {
  try {
    const response = await api.get<Item>(`/item/unique/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o item com ID ${id}:`, error);
    throw error;
  }
};
