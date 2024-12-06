import './home.css'
import Slider from "./slider/slider";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center p-4 md:p-6 lg:p-8"
      style={{
        background: "rgb(127,143,233)",
        background:
          "linear-gradient(0deg, rgba(127,143,233,1) 13%, rgba(63,68,104,1) 100%)",
      }}
    >
      <div className="home m-6 rounded-xl">
        <Slider />
      </div> 
    </div>
  );
}
