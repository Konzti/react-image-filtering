import create from "zustand";
import { canvasFilters } from "../filters/filters";
import { CanvasFilter } from "./../types";

interface CanvasState {
  filters: CanvasFilter[];
  updateFilters: (filter: CanvasFilter, value: number) => void;
  resetFilters: () => void;
}

export const useCanvasStore = create<CanvasState>(set => ({
  filters: canvasFilters,
  updateFilters: (filter: CanvasFilter, value: number) => {
    set(state => ({
      filters: state.filters.map(f => {
        if (f.name === filter.name) {
          return { ...f, value };
        }
        return f;
      }),
    }));
  },
  resetFilters: () => set({ filters: canvasFilters }),
}));
