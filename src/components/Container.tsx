import { useState, useEffect, useCallback } from "react";

import { ContainerType } from "../types";
import { DEFAULT_IMG, DEFAULT_RATIO, DEFAULT_CONTAINER } from "../constants/constants";
import CssContainer from "./cssContainer/CssContainer";
import CanvasContainer from "./canvas/CanvasContainer";
import Upload from "./Upload";

const Container = () => {
  const [container, setContainer] = useState<ContainerType>(DEFAULT_CONTAINER);
  const [ratio, setRatio] = useState<number>(DEFAULT_RATIO);
  const [image, setImage] = useState<string>(DEFAULT_IMG);

  const getImageRatio = useCallback(() => {
    const img = new Image();
    img.src = image;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      setRatio(() => img.height / img.width);
    };
  }, [image]);

  useEffect(() => {
    getImageRatio();
  }, [getImageRatio]);

  return (
    <div className="flex flex-col flex-1 items-center justify-start">
      <div className="flex items-center">
        <div className="btn-group btn-group-horizontal">
          <button
            className={container === "css" ? "btn btn-active" : "btn btn-outline"}
            onClick={() => setContainer("css")}
          >
            Css
          </button>
          <button
            className={container === "canvas" ? "btn btn-active" : "btn btn-outline"}
            onClick={() => setContainer("canvas")}
          >
            Pixi (Canvas)
          </button>
        </div>
      </div>
      <div className="w-full flex-1">
        {container === "css" ? <CssContainer image={image} /> : <CanvasContainer image={image} ratio={ratio} />}
      </div>
      <Upload setImage={setImage} />
    </div>
  );
};

export default Container;
