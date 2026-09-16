import banner from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="flex justify-between container mx-auto items-center py-3 px-3">
      <div className="">
        <h2 className="text-5xl font-bold">Build Your Ideal</h2>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">Development Stack</h2>
        <p className="mt-6 text-2xl">
          Explore frontend, backend, database, and tooling options,<br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
        <div className="mt-10 flex gap-3">
          <button className="btn bg-gradient-to-r from-[#f97316] to-[#ec4899] rounded-xl text-white ">Explore Technologies</button>
          <button className="btn pl-5 rounded-xl">Learn More</button>
        </div>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
