import { useCanvasStore } from "../../store/canvas";
import AdjustmentFilterSlider from "./adjustmentFilterSlider";

const AdjustmentFilterContainer = () => {
  const filters = useCanvasStore(state => state.filters);

  return (
    <div className="w-full max-w-md">
      {filters.map(filter => {
        return <AdjustmentFilterSlider key={filter.name} filter={filter} />;
      })}
    </div>
  );
};

export default AdjustmentFilterContainer;
