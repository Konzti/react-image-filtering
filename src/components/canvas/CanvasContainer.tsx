import { useEffect, useRef } from "react";
import { AdjustmentFilter } from "@pixi/filter-adjustment";

import { createRenderer } from "./scene/setup";
import { useCanvasStore } from "../../store/canvas";
import { getAdjustmentFilterObject } from "../../utils/utils";
import AdjustmentFilterContainer from "./AdjustmentFilterContainer";
import Buttons from "./Buttons";
import { ICanvas, Container, IRenderer } from "pixi.js";

type CanvasContainerProps = {
  image: string;
  imageSize: any;
};

const CanvasContainer = ({ image, imageSize }: CanvasContainerProps) => {
  const filters = useCanvasStore(state => state.filters);
  const stageRef = useRef<Container | null>(null);
  const rendererRef = useRef<IRenderer<ICanvas> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let values = getAdjustmentFilterObject(filters);
  const adjustmentFilter = new AdjustmentFilter(values);

  if (stageRef.current) {
    stageRef.current.filters = [adjustmentFilter];
    rendererRef.current?.render(stageRef.current);
  }
  const downloadImage = () => {
    if (rendererRef.current) {
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

  useEffect(() => {
    createRenderer(imageSize, canvasRef.current!, stageRef, rendererRef, image, adjustmentFilter);
  }, [image, imageSize, canvasRef, stageRef, rendererRef]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-5 flex-1 px-3 py-5">
      <div className="w-full flex flex-col items-center mb-10 md:w-1/2 md:mb-0">
        <div className="w-full max-w-md">
          <canvas id="canvas" ref={canvasRef} className="w-full"></canvas>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-around md:w-1/2">
        <AdjustmentFilterContainer />
        <Buttons downloadImage={downloadImage} />
      </div>
    </div>
  );
};

export default CanvasContainer;
