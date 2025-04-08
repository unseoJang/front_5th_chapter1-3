import { createContext, useContext } from "react";
import { Item } from "../../types/item";

export interface ItemContextType {
  items: Item[];
  addItems: () => void;
}

export const ItemContext = createContext<ItemContextType | undefined>(
  undefined,
);

export const useItemContext = () => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error("useItemContext must be used within an ItemProvider");
  }

  return context;
};
