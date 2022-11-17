import { useEffect, useRef, useCallback } from "react";
import { Application } from "pixi.js";
import { AdjustmentFilter } from "@pixi/filter-adjustment";

import { createApp, createScene } from "./scene/setup";
import { useCanvasStore } from "../../store/canvas";
import { getAdjustmentFilterObject } from "../../utils/utils";
import AdjustmentFilterContainer from "./AdjustmentFilterContainer";
import Buttons from "./Buttons";

type CanvasContainerProps = {
  image: string;
  ratio: number;
};

const CanvasContainer = ({ image, ratio }: CanvasContainerProps) => {
  const filters = useCanvasStore(state => state.filters);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<Application | null>(null);

  let values = getAdjustmentFilterObject(filters);
  const adjustmentFilter = new AdjustmentFilter(values);

  if (appRef.current) {
    appRef.current.stage.filters = [adjustmentFilter];
  }

  const downloadImage = () => {
    if (appRef.current) {
      const dataURL = appRef?.current?.renderer?.view?.toDataURL?.("image/jpeg", 1.0);

      if (dataURL) {
        const link = document.createElement("a");
        link.download = "image.jpeg";
        link.href = dataURL;
        link.click();
        link.remove();
      }
    } else alert("Cannot download image");
  };

  const createCanvas = useCallback(() => {
    let app = createApp(parentRef!.current!.offsetWidth, ratio);
    parentRef.current?.append(app.view as HTMLCanvasElement);

    appRef.current = app;
    appRef.current.stage.filters = [adjustmentFilter];

    const scene = createScene(app.screen.width, ratio, image);
    app.stage.addChild(scene);

    return app;
  }, [image, ratio]);

  useEffect(() => {
    const app = createCanvas();

    return () => {
      app.stop();
      app.destroy(true, true);
    };
  }, [createCanvas]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-5 flex-1 px-3 py-5">
      <div className="w-full flex flex-col items-center mb-10 md:w-1/2 md:mb-0">
        <div ref={parentRef} className="w-full max-w-md"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-around md:w-1/2">
        <AdjustmentFilterContainer />
        <Buttons downloadImage={downloadImage} />
      </div>
    </div>
  );
};

export default CanvasContainer;
