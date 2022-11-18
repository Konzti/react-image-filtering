import { useState } from "react";
import { useCanvasStore } from "../../store/canvas";
import AdjustmentFilterSlider from "./AdjustmentFilterSlider";

const AdjustmentFilterContainer = () => {
  const filters = useCanvasStore(state => state.filters);
  const updateFilters = useCanvasStore(state => state.updateFilters);
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  let ft = filters.find(f => f.name === activeFilter.name);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters(activeFilter, parseFloat(target.value));
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-row gap-5 mb-3 overflow-x-scroll w-full max-w-md md:overflow-hidden md:flex-col md:gap3">
        {filters.map(filter => {
          return (
            <AdjustmentFilterSlider
              key={filter.name}
              filter={filter}
              setFilter={setActiveFilter}
              activeFilter={activeFilter}
            />
          );
        })}
      </div>
      <div className="w-full max-w-md mb-5 md:hidden">
        <p className="w-full mb-3">{ft!.value}</p>
        <input
          className="range range-secondary w-full"
          type="range"
          value={ft!.value}
          min={activeFilter.min}
          max={activeFilter.max}
          step={0.05}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default AdjustmentFilterContainer;
