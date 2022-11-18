export type ContainerType = "css" | "canvas";

export type Filter = {
  name: string;
  cssProperty: string;
  defaultValue: number;
  min: number;
  max: number;
  unit: string;
};

export interface AdjustStateProps {
  [key: string]: { value: number; max: number; min: number };
}

export type CanvasFilter = {
  name: string;
  value: number;
  max: number;
  min: number;
};

export type ImageSizeType = {
  width: number;
  height: number;
};
