import type { IDevsType } from "../type/Type";
interface ISelectedTech {
  selectedTechnologies: IDevsType[];
  handleRemoveAll: () => void;
  handleRemove: (id: string) => void;
}
const YourStack = ({
  selectedTechnologies,
  handleRemoveAll,
  handleRemove,
}: ISelectedTech) => {
  if (selectedTechnologies.length === 0) {
    return (
      <div className="border bg-white rounded-2xl p-4 mt-4">
        <h2 className="text-2xl font-bold">Your Stack</h2>
        <p>No technology selected yet.</p>
        <div className="mt-4 border border-dashed rounded-xl h-20 flex items-center justify-center">
          <h2>Your stack is empty</h2>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-2xl font-bold">Your Stack</h2>
      <p>{selectedTechnologies.length} Technology Selected</p>
      <div>
        {selectedTechnologies.map((selectedTechnology: IDevsType) => {
          return (
            <div className="border border-gray-200 bg-white rounded-2xl p-4 mt-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={selectedTechnology.icon}
                  alt={selectedTechnology.name}
                  className="w-10 h-10 object-contain mt-4"
                />
              </div>
              <div>
                <h3 className="font-bold">{selectedTechnology.name}</h3>

                <p className="text-xs text-gray-400">
                  {selectedTechnology.category}
                </p>
              </div>
              <button
                onClick={() => handleRemove(selectedTechnology.id)}
                className="text-4xl text-gray-400"
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        {selectedTechnologies.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="w-full mt-16 h-12 rounded-xl border border-red-300 text-red-500 font-bold"
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
};

export default YourStack;
