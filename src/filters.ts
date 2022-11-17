import { CanvasFilter, Filter } from "./types";
import { filters as pixiFilters } from "pixi.js";

export const filters: Filter[] = [
  { name: "blur", cssProperty: "blur", defaultValue: 0, min: 0, max: 10, unit: "px" },
  { name: "brightness", cssProperty: "brightness", defaultValue: 100, min: 0, max: 200, unit: "%" },
  { name: "contrast", cssProperty: "contrast", defaultValue: 100, min: 0, max: 200, unit: "%" },
  { name: "grayscale", cssProperty: "grayscale", defaultValue: 0, min: 0, max: 100, unit: "%" },
  { name: "hue-rotate", cssProperty: "hue-rotate", defaultValue: 0, min: 0, max: 360, unit: "deg" },
  { name: "invert", cssProperty: "invert", defaultValue: 0, min: 0, max: 100, unit: "%" },
  { name: "saturate", cssProperty: "saturate", defaultValue: 100, min: 0, max: 200, unit: "%" },
  { name: "sepia", cssProperty: "sepia", defaultValue: 0, min: 0, max: 100, unit: "%" },
];

export type PixiFilter = {
  name: string;
  pixiFilter: typeof pixiFilters.AlphaFilter | typeof pixiFilters.BlurFilter | typeof pixiFilters.NoiseFilter;
  defaultValue: number;
  min: number;
  max: number;
};

export const PixiFilters: PixiFilter[] = [
  { name: "alpha", pixiFilter: pixiFilters.AlphaFilter, defaultValue: 0, min: 0, max: 1 },
  { name: "blur", pixiFilter: pixiFilters.BlurFilter, defaultValue: 0, min: 0, max: 10 },
  { name: "noise", pixiFilter: pixiFilters.NoiseFilter, defaultValue: 0, min: 0, max: 1 },
];

export const canvasFilters: CanvasFilter[] = [
  { name: "brightness", value: 1, min: 0, max: 2 },
  { name: "contrast", value: 1, min: -1, max: 2 },
  { name: "saturation", value: 1, min: -1, max: 3 },
  { name: "gamma", value: 1, min: 0, max: 2 },
  { name: "red", value: 1, min: 0, max: 2 },
  { name: "green", value: 1, min: 0, max: 2 },
  { name: "blue", value: 1, min: 0, max: 2 },
  { name: "alpha", value: 1, min: 0, max: 3 },
];
