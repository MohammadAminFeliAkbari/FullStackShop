import data from "./data";
import Com from "./com";

export default function App() {
  return (
    <div className="flex flex-row gap-2 mx-3 my-2 items-center justify-center flex-wrap">
      {data.map((item, index) => (
        <Com
          information={item.information}
          img={item.img}
          numberStart={item.numberStart}
          price={item.price}
          offer={item.offer}
        />
      ))}
    </div>
  );
}
