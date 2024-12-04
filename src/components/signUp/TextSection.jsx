import React from "react";
import "./signUpCss.css";
import Typewriter from "typewriter-effect";

function TextSection() {
  return (
    <div className="text-container text-purple-950 text-center drop-shadow-2xl">
      <h2 className="text-2xl">
        <Typewriter
          onInit={(tp) => {
            tp.pauseFor(1500)
              .typeString("من یک طراح هستم")
              .pauseFor(1500)
              .deleteChars(9)
              .typeString("توسعه دهنده هستم")
              .pauseFor(1500)
              .deleteChars(7)
              .start();
          }}
          options={{ loop: true }}
        ></Typewriter>
      </h2>
      <p className="paragraph font-semibold">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
      </p>
    </div>
  );
}

export default TextSection;
