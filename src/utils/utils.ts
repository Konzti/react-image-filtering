import { ICanvas, IRenderer } from "pixi.js";
import { MutableRefObject } from "react";
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

export const downloadImagefromCanvas = (rendererRef: MutableRefObject<IRenderer<ICanvas> | null>) => {
  if (rendererRef.current !== null) {
    const dataURL = rendererRef.current.view.toDataURL?.("image/jpeg", 0.4);
    if (dataURL) {
      const link = document.createElement("a");
      link.download = "image.jpeg";
      link.href = dataURL;
      link.click();
      link.remove();
    }
  } else alert("Cannot download image");
};
