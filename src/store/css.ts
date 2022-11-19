import create from "zustand";
import { filters as initialFilters } from "../filters/filters";
import { Filter } from "./../types";

interface CssState {
  filters: Filter[];
  updateFilters: (filter: Filter, value: number) => void;
  resetFilters: () => void;
}

export const useCssStore = create<CssState>(set => ({
  filters: initialFilters,
  updateFilters: (filter: Filter, value: number) => {
    set(state => ({
      filters: state.filters.map(f => {
        if (f.name === filter.name) {
          return { ...f, defaultValue: value };
        }
        return f;
      }),
    }));
  },
  resetFilters: () => set({ filters: initialFilters }),
}));
