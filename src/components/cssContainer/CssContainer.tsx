import FilterSlider from "./filterSlider";
import { useCssStore } from "../../store/css";
import { getFilterString, getStyleObject } from "../../utils/utils";

type CssContainerProps = {
  image: string;
};

const CssContainer = ({ image }: CssContainerProps) => {
  const filters = useCssStore(state => state.filters);
  const resetFilters = useCssStore(state => state.resetFilters);
  const currentFilters = getFilterString(filters);
  const style = getStyleObject(currentFilters);

  return (
    <div className="flex flex-col md:flex-row items-center gap-5 flex-1 px-3 py-5">
      <div className="w-full rounded-lg flex flex-col items-center mb-10 md:w-1/2 md:mb-0">
        <img src={image} alt="default_image" className="rounded-lg w-full max-w-md" style={style} />
      </div>
      <div className="w-full flex flex-col items-center justify-around md:w-1/2">
        {filters.map(filter => (
          <FilterSlider key={filter.name} filter={filter} />
        ))}
        <button className="btn btn-secondary" onClick={resetFilters}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CssContainer;
