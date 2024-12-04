import h2 from "./slider/data/Screenshot 2024-12-04 113031.png";
import Slider from "./slider/slider";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      <div className="m-6 rounded-xl">
        <Slider />
      </div>
    </div>
  );
}
