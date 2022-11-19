import { useCanvasStore } from "../../store/canvas";

type ButtonsProps = {
  downloadImage: () => void;
};

const Buttons = ({ downloadImage }: ButtonsProps) => {
  const resetFilters = useCanvasStore(state => state.resetFilters);
  return (
    <div className="flex w-full justify-between gap-3 mt-3 sm:justify-center">
      <button className="btn btn-outline" onClick={downloadImage}>
        Download Image
      </button>
      <button className="btn btn-outline" onClick={resetFilters}>
        Reset
      </button>
    </div>
  );
};

export default Buttons;
