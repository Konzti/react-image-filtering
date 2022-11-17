import { Application, Container, Sprite } from "pixi.js";

export const createScene = (width: number, ratio: number, imageSrc: string) => {
  const scene = new Container();
  const image = Sprite.from(imageSrc);
  image.anchor.set(0.5);
  image.width = width;
  image.height = width * ratio;
  image.x = width / 2;
  image.y = (width * ratio) / 2;
  scene.addChild(image);
  return scene;
};

export const createApp = (width: number, ratio: number) => {
  let app = new Application({
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    preserveDrawingBuffer: true, // for download to work
    width: width,
    height: width * ratio,
  });
  return app;
};
