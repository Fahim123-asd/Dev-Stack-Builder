import { use, useState } from "react";
import { toast} from "react-toastify";
import type { IDevsType } from "../type/Type";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface devPromiseProps {
  devPromise: Promise<IDevsType[]>;
}
const Technologies = ({ devPromise }: devPromiseProps) => {
  const dev = use(devPromise);
  const [selectedTechnologies, setSelectedTechnologies] = useState<IDevsType[]>(
    [],
  );
  const handleAddToStack = (technology: IDevsType) => {
  const isAlreadyExists = selectedTechnologies.filter(
    (item) => item.id === technology.id
  );

  if (isAlreadyExists.length > 0) {
     toast.warning("Technology already added!");
    return;
  }

  setSelectedTechnologies([
    ...selectedTechnologies,
    technology,
  ]);
   toast.success(`${technology.name} added to stack!`);
};
const handleRemove = (id: string): void => {
  setSelectedTechnologies((tech) =>
    tech.filter((technology) => technology.id !== id)
  );
  toast.info("Technology removed from stack!");
};

const handleRemoveAll = (): void => {
  setSelectedTechnologies([]);
  toast.error("All technologies removed!");
};
  return (
    <div className="my-4 px-3 py-3 container mx-auto p-4">
      <h2 className="text-4xl font-bold">
        Explore the{" "}
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p>Pick one technology per category to build your ideal stack.</p>
      <div className="grid grid-cols-12 gap-5">
        <div className="grid grid-cols-3 col-span-9 gap-4">
          {dev.map((technology) => {
            return (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                handleAddToStack={handleAddToStack}
                selectedTechnologies={selectedTechnologies}
              ></TechnologyCard>
            );
          })}
        </div>
        <div className="col-span-3">
          <YourStack
            selectedTechnologies={selectedTechnologies}
            handleRemoveAll={handleRemoveAll}
            handleRemove={handleRemove}
          ></YourStack>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
