import { useCanvasStore } from "../../store/canvas";
import { CanvasFilter } from "../../types";

type AdjustmentFilterSliderProps = {
  filter: CanvasFilter;
  activeFilter: CanvasFilter;
  setFilter: (filter: CanvasFilter) => void;
};

const AdjustmentFilterSlider = ({ filter, setFilter, activeFilter }: AdjustmentFilterSliderProps) => {
  const updateFilters = useCanvasStore(state => state.updateFilters);
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters(filter, parseFloat(target.value));
  };
  return (
    <>
      <div className="hidden md:flex md:flex-col">
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
      </div>
      <div className="w-full md:hidden">
        <button
          className={activeFilter == filter ? `btn btn-secondary w-32` : `btn btn-outline w-32`}
          onClick={() => {
            setFilter(filter);
          }}
        >
          {filter.name}
        </button>
      </div>
    </>
  );
};

export default AdjustmentFilterSlider;
