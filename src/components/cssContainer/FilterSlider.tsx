import { Filter } from "../../types";
import { useCssStore } from "../../store/css";

type FilterInputProps = {
  filter: Filter;
};

const FilterSlider = ({ filter }: FilterInputProps) => {
  const updateFilters = useCssStore(state => state.updateFilters);
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters(filter, Number(target.value));
  };
  return (
    <div className="w-full max-w-md">
      <label htmlFor="brightness" className="w-full">{`${filter.name}: "${filter.defaultValue}${filter.unit}"`}</label>
      <input
        type="range"
        name={filter.name}
        id={filter.name}
        className="w-full range range-primary"
        min={filter.min}
        max={filter.max}
        value={filter.defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterSlider;
