import type { IDevsType } from "../type/Type";
import { FaStar } from "react-icons/fa";
interface TechnologyCardType {
  technology: IDevsType;
  handleAddToStack: (technology: IDevsType) => void;
  selectedTechnologies: IDevsType[];
}
const TechnologyCard = ({
  technology,
  handleAddToStack,
  selectedTechnologies,
}: TechnologyCardType) => {
  const isAdded = selectedTechnologies.filter(
    (item) => item.id === technology.id,
  );
  return (
    <div className="grid">
      <div className="border bg-white rounded-2xl p-4 mt-4 flex flex-col h-full">
        <div className="flex justify-between">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 object-contain mt-4"
          />
          <button className="btn rounded-4xl mt-4">{technology.badge}</button>
        </div>
        <h2 className="text-2xl font-bold mt-auto">{technology.name}</h2>
        <p className="mt-4">{technology.description}</p>
        <div className="flex justify-between mt-auto">
          <button className="btn">{technology.category}</button>
          <button>{technology.difficulty}</button>
          <div className="flex items-center ">
            <span className="text-yellow-500">
              <FaStar />
            </span>
            <button>{technology.rating}</button>
          </div>
        </div>
        <button
          disabled={isAdded.length > 0}
          className="mt-auto rounded-xl text-white w-full h-10 bg-[#0b0f1a]"
          onClick={() => handleAddToStack(technology)}
        >
          {isAdded.length > 0 ? "✓ Added to Stack" : "Add To Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
