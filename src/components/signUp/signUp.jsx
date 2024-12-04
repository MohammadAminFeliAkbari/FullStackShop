import "./signUpCss.css";
import FormSection from "./FormSection";
import TextSection from "./TextSection";
export default function SignUp() {
  return (
    <div
      className="app p-8"
      style={{
        background: "rgb(63,94,251)",
        background:
          "radial-gradient(circle, rgba(63,94,251,1) 17%, rgba(70,217,252,1) 100%)",
      }}
    >
      <TextSection />
      <FormSection />
    </div>
  );
}
