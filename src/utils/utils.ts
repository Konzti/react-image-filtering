import { CanvasFilter, Filter } from "../types";

export const getFilterString = (filters: Filter[]): string => {
  return filters.map((filter: Filter) => `${filter.cssProperty}(${filter.defaultValue}${filter.unit})`).join(" ");
};

export const getStyleObject = (filterString: string) => {
  return {
    filter: filterString,
  };
};

export const getAdjustmentFilterObject = (filters: CanvasFilter[]) => {
  return Object.fromEntries(filters.map(key => [key.name, key.value]));
};
