import { useCanvasStore } from "../../store/canvas";
import { CanvasFilter } from "../../types";

type AdjustmentFilterSliderProps = {
  filter: CanvasFilter;
};

const AdjustmentFilterSlider = ({ filter }: AdjustmentFilterSliderProps) => {
  const updateFilters = useCanvasStore(state => state.updateFilters);
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters(filter, parseFloat(target.value));
  };
  return (
    <>
      <label htmlFor={filter.name}>
        {filter.name} {filter.value}
      </label>
      <input
        className="range range-accent w-full"
        type="range"
        min={filter.min}
        max={filter.max}
        step={0.05}
        name={filter.name}
        value={filter.value}
        onChange={onChange}
      />
    </>
  );
};

export default AdjustmentFilterSlider;
