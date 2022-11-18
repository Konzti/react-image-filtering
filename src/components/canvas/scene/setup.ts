import { Container, Sprite, autoDetectRenderer, ICanvas, DisplayObject, IRenderer } from "pixi.js";

export const createRenderer = (
  imageSize: any,
  canvas: ICanvas,
  stageRef: React.MutableRefObject<Container<DisplayObject> | null>,
  rendererRef: React.MutableRefObject<IRenderer<ICanvas> | null>,
  image: string
) => {
  let renderer = autoDetectRenderer({
    width: imageSize.width,
    height: imageSize.height,
    antialias: true,
    preserveDrawingBuffer: true,
    view: canvas,
  });
  let stage = new Container();

  let sprite = Sprite.from(image);
  sprite.anchor.set(0.5);
  sprite.position.set(renderer.screen.width / 2, renderer.screen.height / 2);

  stage.addChild(sprite);

  rendererRef.current = renderer;
  stageRef.current = stage;

  renderer.render(stage);
};
