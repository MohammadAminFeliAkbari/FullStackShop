import Com from "./com";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";

export default function Four_img() {
  const [data, setData] = useState([]);
  const { BASE_URL } = useContext(AppContext);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}headphoneTOP`);
      if (!response.ok) throw new Error("Network response was not ok");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [BASE_URL]);

  return (
    <div className="flex flex-row gap-2 mx-3 my-3 items-center justify-center flex-wrap">
      {data.map((item, index) => (
        <Com
          key={index}
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