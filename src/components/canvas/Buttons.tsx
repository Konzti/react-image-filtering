import { useCanvasStore } from "../../store/canvas";

type ButtonsProps = {
  downloadImage: () => void;
};

const Buttons = ({ downloadImage }: ButtonsProps) => {
  const resetFilters = useCanvasStore(state => state.resetFilters);
  return (
    <div className="flex justify-center gap-3 mt-3">
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
